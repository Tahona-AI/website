import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";

const repoRoot = process.cwd();
const read = (path) => readFileSync(join(repoRoot, path), "utf8");

const landingDir = "src/components/landing";
const landingFiles = [
  ...readdirSync(join(repoRoot, landingDir))
    .filter((file) => /\.(astro|tsx|ts)$/.test(file))
    .map((file) => `${landingDir}/${file}`),
  ...readdirSync(join(repoRoot, landingDir, "sections")).map(
    (file) => `${landingDir}/sections/${file}`,
  ),
];
const content = read(`${landingDir}/content.ts`);

describe("single-page landing contract", () => {
  test("the home route renders the landing", () => {
    assert.match(read("src/pages/index.astro"), /<LandingPage \/>/);
  });

  test("sections render in the narrative order", () => {
    const page = read(`${landingDir}/LandingPage.astro`);
    const order = [
      "<LandingNavbar client:load />",
      "<LandingHero />",
      "<Proof />",
      "<Capabilities />",
      "<Engagement />",
      "<Cases />",
      "<Industries />",
      "<About />",
      "<Method />",
      "<Team />",
      "<Faq />",
      "<LandingContact client:visible />",
      "<LandingFooter />",
    ];
    const positions = order.map((marker) => page.indexOf(marker));

    assert.ok(positions.every((position) => position >= 0), "missing section");
    assert.deepEqual([...positions].sort((a, b) => a - b), positions);
  });

  test("every section id is rendered by exactly one section", () => {
    const ids = [...content.matchAll(/^\s{2}(\w+): "([a-z]+)",$/gm)]
      .filter(([, key]) => key !== "slot")
      .map(([, key]) => key);
    const sources = landingFiles.map(read).join("\n");
    assert.equal(ids.length, 10, "LANDING_SECTIONS parsing drifted");

    for (const key of ids) {
      const occurrences = sources.match(new RegExp(`id=\\{LANDING_SECTIONS\\.${key}\\}`, "g")) ?? [];
      assert.equal(occurrences.length, 1, `section "${key}" rendered ${occurrences.length} times`);
    }
  });

  test("keeps the three service pillars and the fractional engagement visible", () => {
    for (const pillar of ["Estrategia y arquitectura", "Inteligencia artificial", "Producto y software"]) {
      assert.ok(content.includes(`title: "${pillar}"`), `missing pillar ${pillar}`);
    }
    assert.match(content, /CTO y AI engineer fractional/);
    assert.match(content, /title: "Capacidad senior integrada"/);
  });

  test("copy stays neutral, hype-free and anonymised", () => {
    const forbidden = [
      /[—–·]/, // dashes and middle dots are banned in public copy
      /\b(tu|tus|puedes|tienes|quieres|necesitas|hablas|contigo|cuéntanos)\b/i,
      /transformación digital|disruptiv|game-changer|sinergia/i,
      /reduce costes|ahorra \d|aumenta la facturación/i,
      // Client names must never reach the public site.
      /oxtaz|optimus|geapolis|santalucia|logialent|atrans|col&col|kelp|transpais|vidiv|habilitados|dimurol|eurovia|masquepack|otmopa|inspira/i,
    ];

    for (const file of landingFiles) {
      const source = read(file);
      for (const pattern of forbidden) {
        assert.doesNotMatch(source, pattern, `${file} matches ${pattern}`);
      }
    }
  });

  test("every pending visual slot is unique and documented for production", () => {
    const brief = read("docs/LANDING_VISUALS.md");
    const slots = [...content.matchAll(/slot: "([a-z-]+)"/g)].map(([, slot]) => slot);

    assert.equal(new Set(slots).size, slots.length, "duplicate slot ids");
    for (const slot of slots) {
      assert.ok(brief.includes(`\`${slot}\``), `slot ${slot} missing from docs/LANDING_VISUALS.md`);
    }
  });
});
