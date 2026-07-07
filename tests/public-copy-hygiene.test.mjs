import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.cwd();

const activePublicFiles = [
  "public/site.webmanifest",
  "src/components/SEO.astro",
  "src/components/StructuredData.astro",
  "src/components/sections/Contact.tsx",
  "src/components/sections/Footer.astro",
  "src/components/sections/Hero.tsx",
  "src/components/sections/WhatWeDo.tsx",
  "src/components/sections/Services.tsx",
];

const stalePublicCopyPatterns = [
  /Tahona AI/i,
  /ingeniería de contexto/i,
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
  /aportar valor la IA/i,
];

function readProjectFile(path) {
  return readFileSync(join(repoRoot, path), "utf8");
}

function sha256(path) {
  return createHash("sha256")
    .update(readFileSync(join(repoRoot, path)))
    .digest("hex");
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
      "<Navbar client:load initialPath={Astro.url.pathname} />",
      "<Hero client:load />",
      "<WhatWeDo client:visible />",
      "<Services client:visible />",
      "<AiApplied client:visible />",
      "<Industries client:visible />",
      "<OurWork client:visible />",
      "<HowWeWork client:visible />",
      "<Contact client:visible />",
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

  test("active Open Graph image is the neutral public-copy asset", () => {
    const seoSource = readProjectFile("src/components/SEO.astro");

    assert.equal(seoSource.includes('image = "/og-image.png"'), true);
    assert.equal(
      sha256("public/og-image.png"),
      "c7f43dc0db630892e8373fb93fd027a9de566c9613267d9cda48a11af55cab65",
    );
  });
});
