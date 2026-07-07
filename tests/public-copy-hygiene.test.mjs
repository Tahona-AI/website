import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.cwd();

const activePublicFiles = [
  "public/llms.txt",
  "public/robots.txt",
  "public/site.webmanifest",
  "src/layouts/Layout.astro",
  "src/components/SEO.astro",
  "src/components/StructuredData.astro",
  "src/pages/index.astro",
  "src/pages/services.astro",
  "src/pages/industries.astro",
  "src/pages/cases.astro",
  "src/components/sections/Contact.tsx",
  "src/components/sections/Footer.astro",
  "src/components/sections/Hero.tsx",
  "src/components/sections/WhatWeDo.tsx",
  "src/components/sections/Services.tsx",
  "src/components/sections/AiApplied.tsx",
  "src/components/sections/Industries.tsx",
  "src/components/sections/OurWork.tsx",
  "src/components/sections/HowWeWork.tsx",
  "src/components/services/service-families.ts",
  "src/components/services/services-faq.ts",
  "src/components/industries/industry-data.ts",
  "src/components/industries/industries-faq.ts",
  "src/components/cases/cases-data.ts",
  "src/components/sections/work/workItems.ts",
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
  /aportar valor la IA/i,
  /[—–]/,
];

const canonicalRoutes = [
  "https://tahona.ai/",
  "https://tahona.ai/services/",
  "https://tahona.ai/industries/",
  "https://tahona.ai/cases/",
];

function readProjectFile(path) {
  return readFileSync(join(repoRoot, path), "utf8");
}

function projectFileExists(path) {
  return existsSync(join(repoRoot, path));
}

function sha256(path) {
  return createHash("sha256")
    .update(readFileSync(join(repoRoot, path)))
    .digest("hex");
}

describe("public copy hygiene", () => {
  test("active public SEO and GEO files are tracked by hygiene checks", () => {
    const missingFiles = activePublicFiles.filter(
      (file) => !projectFileExists(file),
    );

    assert.deepEqual(missingFiles, []);
  });

  test("active public files do not contain stale positioning terms", () => {
    const offenders = activePublicFiles.flatMap((file) => {
      const source = readProjectFile(file);

      return stalePublicCopyPatterns
        .filter((pattern) => pattern.test(source))
        .map((pattern) => `${file}: ${pattern.source}`);
    });

    assert.deepEqual(offenders, []);
  });

  test("robots file keeps render-critical assets and AI discovery crawlable", () => {
    const robotsSource = readProjectFile("public/robots.txt");

    assert.equal(robotsSource.includes("Disallow: /_astro/"), false);
    assert.equal(robotsSource.includes("Allow: /_astro/"), true);
    assert.equal(
      robotsSource.includes("Sitemap: https://tahona.ai/sitemap-index.xml"),
      true,
    );

    for (const crawler of [
      "GPTBot",
      "ChatGPT-User",
      "OAI-SearchBot",
      "PerplexityBot",
      "ClaudeBot",
      "Claude-SearchBot",
      "Google-Extended",
      "Bingbot",
    ]) {
      assert.match(robotsSource, new RegExp(`User-agent: ${crawler}`));
    }
  });

  test("llms.txt exposes concise canonical context for the current routes", () => {
    const llmsSource = readProjectFile("public/llms.txt");
    const firstLines = llmsSource.split("\n").slice(0, 3);

    assert.equal(firstLines[0], "# Tahona");
    assert.match(firstLines[2], /^> .{40,200}$/);

    for (const route of canonicalRoutes) {
      assert.equal(
        llmsSource.includes(`](${route})`),
        true,
        `missing canonical route ${route}`,
      );
    }

    assert.match(llmsSource, /consultoría técnica/i);
    assert.match(llmsSource, /operaciones internas/i);
    assert.match(llmsSource, /no es una agencia genérica de IA/i);
  });

  test("metadata defaults and route titles avoid duplicate generic SERP copy", () => {
    const seoSource = readProjectFile("src/components/SEO.astro");
    const servicesSource = readProjectFile("src/pages/services.astro");
    const industriesSource = readProjectFile("src/pages/industries.astro");
    const casesSource = readProjectFile("src/pages/cases.astro");

    assert.equal(
      seoSource.includes(
        'title = "Tahona | Procesos, datos y herramientas internas"',
      ),
      true,
    );
    assert.equal(
      servicesSource.includes(
        'title="Servicios Tahona | Operaciones, IA e integraciones"',
      ),
      true,
    );
    assert.equal(
      industriesSource.includes(
        'title="Industrias Tahona | Software e IA por sector"',
      ),
      true,
    );
    assert.equal(
      casesSource.includes(
        'title="Casos Tahona | Proyectos operativos anonimizados"',
      ),
      true,
    );
  });

  test("structured data is route-aware and backed by visible page data", () => {
    const layoutSource = readProjectFile("src/layouts/Layout.astro");
    const structuredDataSource = readProjectFile(
      "src/components/StructuredData.astro",
    );

    assert.equal(layoutSource.includes("<StructuredData />"), true);
    assert.match(structuredDataSource, /SERVICES_FAQ/);
    assert.match(structuredDataSource, /INDUSTRIES_FAQ/);
    assert.match(structuredDataSource, /SERVICE_FAMILIES/);
    assert.match(structuredDataSource, /INDUSTRY_ITEMS/);
    assert.match(structuredDataSource, /CASE_STUDIES/);

    for (const route of ["/", "/services/", "/industries/", "/cases/"]) {
      assert.equal(
        structuredDataSource.includes(`path: "${route}"`),
        true,
        `missing structured data route ${route}`,
      );
    }
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
