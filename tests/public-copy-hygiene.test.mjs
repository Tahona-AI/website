import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.cwd();

const activePublicFiles = [
  "public/site.webmanifest",
  "src/components/SEO.astro",
  "src/components/StructuredData.astro",
  "src/components/sections/Footer.astro",
  "src/components/sections/Hero.tsx",
  "src/components/sections/Services.tsx",
  "src/components/sections/WhyTahona.astro",
];

const stalePublicCopyPatterns = [
  /Tahona AI/i,
  /ingeniería de contexto/i,
  /agentes de IA/i,
  /revolución de la IA/i,
  /procesos cognitivos/i,
  /Inteligencia Artificial han llegado/i,
  /automatización inteligente/i,
  /adopción tecnológica/i,
  /resultados en semanas/i,
  /provincias españolas/i,
  /reducción de costes/i,
  /aumenta la facturación/i,
  /APPCC/i,
  /industria alimentaria/i,
];

function readProjectFile(path) {
  return readFileSync(join(repoRoot, path), "utf8");
}

describe("public copy hygiene", () => {
  test("active public files do not contain stale positioning terms", () => {
    const offenders = activePublicFiles.flatMap((file) => {
      const source = readProjectFile(file);

      return stalePublicCopyPatterns
        .filter((pattern) => pattern.test(source))
        .map((pattern) => `${file}: ${pattern.source}`);
    });

    assert.deepEqual(offenders, []);
  });

  test("landing page keeps the canonical rendered section order", () => {
    const source = readProjectFile("src/pages/index.astro");
    const expectedOrder = [
      "<SkipLink />",
      "<Navbar client:load />",
      "<Hero client:load />",
      "<Services client:visible />",
      "<HowWeWork client:visible />",
      "<WhyTahona />",
      "<Contact client:load />",
      "<Footer />",
    ];

    const positions = expectedOrder.map((marker) => source.indexOf(marker));

    assert.equal(
      positions.every((position) => position >= 0),
      true,
    );
    assert.deepEqual(
      [...positions].sort((a, b) => a - b),
      positions,
    );
  });
});
