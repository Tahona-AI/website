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

function countMatches(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function readGeneratedRoute(locale, routeKey) {
  const localizedPath = getLocalizedPath(locale, routeKey);
  const outputPath =
    localizedPath === "/"
      ? join(distRoot, "index.html")
      : join(distRoot, localizedPath, "index.html");

  return readFileSync(outputPath, "utf8");
}

describe("industries page contract", () => {
  test("keeps three primary sectors and three secondary contexts", () => {
    const commercialOperationsTitles = {
      es: "Operaciones comerciales",
      en: "Commercial operations",
      pl: "Operacje sprzedażowe",
    };

    for (const locale of LOCALES) {
      const industryItems = getContent(locale).industryItems;
      const primaryItems = industryItems.filter(
        (industry) => industry.level === "primary",
      );
      const secondaryItems = industryItems.filter(
        (industry) => industry.level === "secondary",
      );

      assert.equal(primaryItems.length, 3, `${locale} primary industry count`);
      assert.equal(
        secondaryItems.length,
        3,
        `${locale} secondary industry count`,
      );
      assert.equal(
        secondaryItems.some(
          (industry) =>
            industry.title === commercialOperationsTitles[locale],
        ),
        true,
        `${locale} commercial operations title`,
      );

      for (const industry of primaryItems) {
        assert.equal(typeof industry.caseLink.hash, "string");
        assert.equal(industry.relatedServices.length >= 2, true);
        assert.equal(industry.relatedServices.length <= 3, true);
      }

      for (const industry of industryItems) {
        for (const rejectedField of [
          "status",
          "phase",
          "maturity",
          "activeProject",
          "poc",
        ]) {
          assert.equal(
            Object.hasOwn(industry, rejectedField),
            false,
            `${locale} ${industry.id} exposes ${rejectedField}`,
          );
        }
      }
    }
  });

  test(
    "generated pages resolve localized case and service evidence links",
    { timeout: 30_000 },
    () => {
      execFileSync("bun", ["run", "build"], {
        cwd: repoRoot,
        stdio: "pipe",
      });

      const caseHashes = {
        legal: "#plataforma-documental-operativa",
        logistica: "#planificacion-logistica",
        "industria-trazabilidad": "#calidad-trazabilidad-appcc",
      };
      const caseStatePatterns = [
        /case status/i,
        /case maturity/i,
        /estado del caso/i,
        /fase del caso/i,
        /active project/i,
        /proof of concept/i,
        /\bPoC\b/,
      ];

      for (const locale of LOCALES) {
        const industriesHtml = readGeneratedRoute(locale, "industries");
        const casesHtml = readGeneratedRoute(locale, "cases");
        const servicesHtml = readGeneratedRoute(locale, "services");
        const primaryItems = getContent(locale).industryItems.filter(
          (industry) => industry.level === "primary",
        );

        assert.equal(
          countMatches(industriesHtml, /data-industry-level="primary"/g),
          3,
          `${locale} generated primary details`,
        );
        assert.equal(
          countMatches(industriesHtml, /data-industry-level="secondary"/g),
          3,
          `${locale} generated secondary cards`,
        );
        assert.match(
          industriesHtml,
          /data-industry-id="salud-no-clinica"[\s\S]*?(no clínica|non-clinical|nieklinicz)/i,
        );

        for (const industry of primaryItems) {
          assert.equal(industry.caseLink.hash, caseHashes[industry.id]);

          const caseHref = getLocalizedHashPath(
            locale,
            "cases",
            industry.caseLink.hash,
          );
          assert.equal(
            industriesHtml.includes(`href="${caseHref}"`),
            true,
            `${locale} missing ${caseHref}`,
          );
          assert.equal(
            casesHtml.includes(`id="${industry.caseLink.hash.slice(1)}"`),
            true,
            `${locale} unresolved ${caseHref}`,
          );

          for (const service of industry.relatedServices) {
            const serviceHref = getLocalizedHashPath(
              locale,
              "services",
              service.hash,
            );
            assert.equal(
              industriesHtml.includes(`href="${serviceHref}"`),
              true,
              `${locale} missing ${serviceHref}`,
            );
            assert.equal(
              servicesHtml.includes(`id="${service.hash.slice(1)}"`),
              true,
              `${locale} unresolved ${serviceHref}`,
            );
          }
        }

        for (const pattern of caseStatePatterns) {
          assert.doesNotMatch(industriesHtml, pattern);
        }
      }
    },
  );
});
