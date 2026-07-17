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
  "docs/I18N_COPY_REVIEW.md",
  "src/layouts/Layout.astro",
  "src/components/SEO.astro",
  "src/components/StructuredData.astro",
  "src/i18n/routing.ts",
  "src/i18n/content.ts",
  "src/components/pages/HomePage.astro",
  "src/components/pages/ServicesPage.astro",
  "src/components/pages/IndustriesPage.astro",
  "src/components/pages/CasesPage.astro",
  "src/pages/index.astro",
  "src/pages/services.astro",
  "src/pages/industries.astro",
  "src/pages/cases.astro",
  "src/pages/[locale]/index.astro",
  "src/pages/[locale]/services.astro",
  "src/pages/[locale]/industries.astro",
  "src/pages/[locale]/cases.astro",
  "src/components/sections/Contact.tsx",
  "src/components/sections/contact-content.ts",
  "src/components/sections/contact/ContactForm.tsx",
  "src/components/sections/contact/ContactModal.tsx",
  "src/components/sections/contact/ContactSidebar.tsx",
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

const localizedCanonicalRoutes = [
  ...canonicalRoutes,
  "https://tahona.ai/en/",
  "https://tahona.ai/en/services/",
  "https://tahona.ai/en/industries/",
  "https://tahona.ai/en/cases/",
  "https://tahona.ai/pl/",
  "https://tahona.ai/pl/services/",
  "https://tahona.ai/pl/industries/",
  "https://tahona.ai/pl/cases/",
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

    for (const route of localizedCanonicalRoutes) {
      assert.equal(
        llmsSource.includes(`](${route})`),
        true,
        `missing canonical route ${route}`,
      );
    }

    assert.match(llmsSource, /partner tecnológico/i);
    assert.match(llmsSource, /productos digitales/i);
    assert.match(llmsSource, /software a medida/i);
    assert.match(llmsSource, /no es una agencia genérica de IA/i);
  });

  test("metadata defaults and route titles avoid duplicate generic SERP copy", () => {
    const seoSource = readProjectFile("src/components/SEO.astro");
    const i18nSource = readProjectFile("src/i18n/content.ts");

    assert.equal(
      seoSource.includes("hreflang"),
      true,
    );
    assert.match(
      i18nSource,
      /Tahona \| AI, digital products and custom software/,
    );
    assert.match(
      i18nSource,
      /Tahona \| AI, produkty cyfrowe i oprogramowanie na miarę/,
    );
    assert.equal(
      i18nSource.includes(
        "Servicios Tahona | Estrategia, IA y desarrollo de producto",
      ),
      true,
    );
    assert.equal(
      i18nSource.includes("Tahona Services | Strategy, AI and product development"),
      true,
    );
    assert.equal(
      i18nSource.includes("Usługi Tahona | Strategia, AI i rozwój produktu"),
      true,
    );
  });

  test("i18n routing maps every page family across Spanish, English and Polish", () => {
    const routingSource = readProjectFile("src/i18n/routing.ts");
    const navbarSource = readProjectFile("src/components/sections/Navbar.tsx");
    const mobileNavSource = readProjectFile(
      "src/components/sections/navbar/MobileNavMenu.tsx",
    );

    for (const locale of ["es", "en", "pl"]) {
      assert.match(routingSource, new RegExp(`hreflang: "${locale}"`));
    }

    for (const route of ["/", "/services/", "/industries/", "/cases/"]) {
      assert.match(routingSource, new RegExp(`"${route.replace("/", "\\/")}`));
    }

    assert.match(navbarSource, /LanguageSelector/);
    assert.match(mobileNavSource, /LanguageSelector/);
  });

  test("structured data is route-aware and backed by visible page data", () => {
    const layoutSource = readProjectFile("src/layouts/Layout.astro");
    const structuredDataSource = readProjectFile(
      "src/components/StructuredData.astro",
    );

    assert.equal(
      layoutSource.includes(
        "<StructuredData locale={locale} pageKey={pageKey} />",
      ),
      true,
    );
    assert.match(structuredDataSource, /getServicesFaq/);
    assert.match(structuredDataSource, /getIndustriesFaq/);
    assert.match(structuredDataSource, /getServiceFamilies/);
    assert.match(structuredDataSource, /getIndustryItems/);
    assert.match(structuredDataSource, /getCaseStudies/);
    assert.match(structuredDataSource, /schemaLanguage/);
    assert.match(structuredDataSource, /LOCALE_DETAILS\[locale\]/);
  });

  test("landing page keeps the canonical rendered section order", () => {
    const source = readProjectFile("src/components/pages/HomePage.astro");
    const expectedOrder = [
      "<SkipLink locale={locale} />",
      '<Navbar client:load initialPath={Astro.url.pathname} locale={locale} />',
      "<Hero client:load locale={locale} />",
      "<WhatWeDo client:visible locale={locale} />",
      "<Services client:visible locale={locale} />",
      "<AiApplied client:visible locale={locale} />",
      "<Industries client:visible locale={locale} />",
      "<OurWork client:visible locale={locale} />",
      "<HowWeWork client:visible locale={locale} />",
      "<Contact client:visible locale={locale} />",
      "<Footer locale={locale} />",
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
