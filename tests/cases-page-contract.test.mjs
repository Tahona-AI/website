import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getContent } from "../src/i18n/content.ts";
import {
  LOCALES,
  getLocalizedHashPath,
  getLocalizedPath,
} from "../src/i18n/routing.ts";

const repoRoot = process.cwd();
const distRoot = join(repoRoot, "dist");
const canonicalCaseIds = ["plataforma-documental-operativa", "planificacion-logistica", "base-conocimiento-empresarial", "calidad-trazabilidad-appcc"];
const legacyCaseIds = ["planificacion-logistica-reporting", "documentacion-calidad-trazabilidad"];
const rejectedCaseFields = ["status", "phase", "maturity", "ownership", "deliveryStatus", "caseType", "activeProject", "poc", "prototype"];
const forbiddenCaseStatePatterns = [
  /\bcase status\b/i,
  /\bcase phase\b/i,
  /\bcase maturity\b/i,
  /\bdelivery status\b/i,
  /\bclient work\b/i,
  /\bactive project\b/i,
  /\bproof of concept\b/i,
  /\bwork in progress\b/i,
  /\bin production\b/i,
  /\bestado del caso\b/i,
  /\bfase del caso\b/i,
  /\bmadurez del caso\b/i,
  /\bproyecto activo\b/i,
  /\bprueba de concepto\b/i,
  /\btrabajo en curso\b/i,
  /\ben producción\b/i,
  /\bstatus przypadku\b/i,
  /\bfaza przypadku\b/i,
  /\bdojrzałość przypadku\b/i,
  /\baktywny projekt\b/i,
  /\bwersja demonstracyjna\b/i,
  /\bw produkcji\b/i,
  /\bPoC\b/,
];
const legalValidationLines = {
  es: "Validación humana antes de cada avance",
  en: "Human validation before each step advances",
  pl: "Walidacja przez człowieka przed każdym kolejnym krokiem",
};

function readGeneratedRoute(locale, routeKey) {
  const localizedPath = getLocalizedPath(locale, routeKey);
  const outputPath =
    localizedPath === "/"
      ? join(distRoot, "index.html")
      : join(distRoot, localizedPath, "index.html");

  return readFileSync(outputPath, "utf8");
}

function getStructuredData(html) {
  const scriptMatch = html.match(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/,
  );

  assert.notEqual(scriptMatch, null, "missing JSON-LD script");
  return JSON.parse(scriptMatch[1]);
}

function assertNoCaseStateLanguage(source, surface) {
  for (const pattern of forbiddenCaseStatePatterns) {
    assert.doesNotMatch(source, pattern, `${surface}: ${pattern.source}`);
  }

  assert.doesNotMatch(
    source,
    /data-(?:case-)?(?:status|phase|maturity|ownership|delivery-status)=/i,
    `${surface}: forbidden case-state data attribute`,
  );
}

execFileSync("bun", ["run", "build"], { cwd: repoRoot, stdio: "pipe" });

describe("cases page contract", () => {
  test("keeps exactly four typed case narratives in every locale", () => {
    for (const locale of LOCALES) {
      const caseStudies = getContent(locale).caseStudies;

      assert.equal(caseStudies.length, 4, `${locale} case count`);
      assert.deepEqual(
        caseStudies.map((caseStudy) => caseStudy.id),
        canonicalCaseIds,
        `${locale} canonical case order`,
      );
      assert.deepEqual(
        caseStudies.flatMap((caseStudy) =>
          caseStudy.legacyId ? [caseStudy.legacyId] : [],
        ),
        legacyCaseIds,
        `${locale} legacy aliases`,
      );

      for (const caseStudy of caseStudies) {
        assert.equal(
          typeof caseStudy.challenge,
          "string",
          `${locale} ${caseStudy.id} challenge`,
        );
        assert.equal(
          typeof caseStudy.intervention,
          "string",
          `${locale} ${caseStudy.id} intervention`,
        );
        assert.equal(
          caseStudy.enables.length,
          3,
          `${locale} ${caseStudy.id} enablement count`,
        );
        assert.equal(
          caseStudy.relatedCapabilities.length >= 2 &&
            caseStudy.relatedCapabilities.length <= 3,
          true,
          `${locale} ${caseStudy.id} capability count`,
        );

        for (const rejectedField of rejectedCaseFields) {
          assert.equal(
            Object.hasOwn(caseStudy, rejectedField),
            false,
            `${locale} ${caseStudy.id} exposes ${rejectedField}`,
          );
        }
      }
    }
  });

  test("renders every case hierarchy, alias and localized service target", () => {
    for (const locale of LOCALES) {
      const content = getContent(locale);
      const casesHtml = readGeneratedRoute(locale, "cases");
      const servicesHtml = readGeneratedRoute(locale, "services");

      assert.equal(
        [...casesHtml.matchAll(/aria-labelledby="case-title-/g)].length,
        4,
        `${locale} rendered case count`,
      );

      for (const caseStudy of content.caseStudies) {
        assert.equal(
          casesHtml.includes(`id="${caseStudy.id}"`),
          true,
          `${locale} missing #${caseStudy.id}`,
        );
        assert.equal(
          casesHtml.includes(caseStudy.challenge),
          true,
          `${locale} ${caseStudy.id} missing challenge`,
        );
        assert.equal(
          casesHtml.includes(caseStudy.intervention),
          true,
          `${locale} ${caseStudy.id} missing intervention`,
        );

        for (const enablement of caseStudy.enables) {
          assert.equal(
            casesHtml.includes(enablement),
            true,
            `${locale} ${caseStudy.id} missing enablement`,
          );
        }

        for (const capability of caseStudy.relatedCapabilities) {
          const serviceHref = getLocalizedHashPath(
            locale,
            "services",
            capability.hash,
          );

          assert.equal(
            casesHtml.includes(`href="${serviceHref}"`),
            true,
            `${locale} ${caseStudy.id} missing ${serviceHref}`,
          );
          assert.equal(
            servicesHtml.includes(`id="${capability.hash.slice(1)}"`),
            true,
            `${locale} ${caseStudy.id} unresolved ${serviceHref}`,
          );
        }
      }

      for (const legacyId of legacyCaseIds) {
        assert.equal(
          casesHtml.includes(`id="${legacyId}"`),
          true,
          `${locale} missing legacy #${legacyId}`,
        );
      }

      for (const label of [
        content.casesPage.section.challengeLabel,
        content.casesPage.section.interventionLabel,
        content.casesPage.section.enablesLabel,
        content.casesPage.section.relatedCapabilitiesLabel,
      ]) {
        assert.equal(
          [...casesHtml.matchAll(new RegExp(`>${label}<`, "g"))].length,
          4,
          `${locale} visible ${label} count`,
        );
      }
    }
  });

  test("keeps case state and maturity out of public HTML and JSON-LD", () => {
    for (const locale of LOCALES) {
      const casesHtml = readGeneratedRoute(locale, "cases");
      const structuredData = getStructuredData(casesHtml);
      const structuredDataSource = JSON.stringify(structuredData);
      const casesList = structuredData["@graph"].find(
        (node) => node["@id"]?.endsWith("#cases"),
      );

      assertNoCaseStateLanguage(casesHtml, `${locale} cases HTML`);
      assertNoCaseStateLanguage(
        structuredDataSource,
        `${locale} cases JSON-LD`,
      );
      assert.equal(casesList.itemListElement.length, 4);

      for (const [index, listItem] of casesList.itemListElement.entries()) {
        const caseStudy = getContent(locale).caseStudies[index];

        assert.equal(listItem.item.name, caseStudy.title);
        assert.equal(
          listItem.item.description,
          `${caseStudy.challenge} ${caseStudy.intervention}`,
        );
        assert.deepEqual(
          listItem.item.about,
          caseStudy.relatedCapabilities.map((capability) => capability.label),
        );
      }
    }
  });

  test("completes legal validation wording and aligns two homepage items", () => {
    for (const locale of LOCALES) {
      const content = getContent(locale);
      const homeHtml = readGeneratedRoute(locale, "home");

      assert.equal(
        content.caseStudies[0].enables.includes(legalValidationLines[locale]),
        true,
        `${locale} complete human-validation line`,
      );
      assert.equal(content.workItems.length, 2, `${locale} featured work count`);

      for (const [index, workItem] of content.workItems.entries()) {
        const caseStudy = content.caseStudies[index];

        assert.equal(workItem.title, caseStudy.title);
        assert.notEqual(workItem.description, caseStudy.intervention);
        assert.equal(
          workItem.description.length < caseStudy.intervention.length,
          true,
          `${locale} featured work keeps a concise case summary`,
        );
        assert.equal(homeHtml.includes(workItem.title), true);
        assert.equal(homeHtml.includes(workItem.description), true);
      }
    }
  });

  test("keeps every localized canonical route in the production build", () => {
    for (const locale of LOCALES) {
      for (const routeKey of ["home", "services", "industries", "cases"]) {
        assert.match(readGeneratedRoute(locale, routeKey), /<!doctype html>/i);
      }
    }
  });
});
