import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";

const repoRoot = process.cwd();

function read(relativePath) {
  return readFileSync(join(repoRoot, relativePath), "utf8");
}

describe("homepage visual refinement contract", () => {
  test("uses proportional numerals with the service-list rhythm", () => {
    const whatWeDo = read("src/components/sections/WhatWeDo.tsx");
    const aiApplied = read("src/components/sections/AiApplied.tsx");
    const industries = read("src/components/sections/Industries.tsx");

    assert.doesNotMatch(whatWeDo, /font-mono/);
    assert.doesNotMatch(aiApplied, /font-mono/);
    assert.match(whatWeDo, /grid-cols-\[1\.75rem_1fr\] items-baseline gap-3/);
    assert.match(aiApplied, /grid-cols-\[1\.75rem_1fr\] items-baseline gap-3/);
    assert.match(industries, /text-sm font-semibold leading-7 text-brand-700/);
  });

  test("keeps the chart explanation primary and METR attribution secondary", () => {
    const aiApplied = read("src/components/sections/AiApplied.tsx");
    const content = read("src/i18n/content.ts");

    assert.match(aiApplied, /<h3 className="max-w-xl font-heading text-lg/);
    assert.match(aiApplied, /text-\[0\.7rem\] leading-5 text-gray-400/);
    assert.match(content, /Duración de tareas de software completadas con un 50 % de éxito/);
    assert.match(content, /sourceLabel: "Fuente y metodología"/);
  });

  test("uses sector language and omits a trailing industry separator", () => {
    const industries = read("src/components/sections/Industries.tsx");
    const content = read("src/i18n/content.ts");

    assert.doesNotMatch(industries, /last:border-b/);
    assert.match(content, /secondaryLabel: "Otros sectores"/);
    assert.match(content, /secondaryLabel: "Other sectors"/);
    assert.match(content, /secondaryLabel: "Inne sektory"/);
  });

  test("keeps the full industry name in content while shortening the homepage card", () => {
    const industries = read("src/components/sections/Industries.tsx");
    const content = read("src/i18n/content.ts");

    assert.match(industries, /industry\.cardTitle \?\? industry\.title/);
    assert.match(content, /cardTitle: "Industria",\s+title: "Industria y trazabilidad"/);
    assert.match(industries, /gap-x-2 gap-y-2[^\n]+text-\[0\.7rem\]/);
    assert.doesNotMatch(industries, /font-mono/);
  });

  test("centers one shared geometric FAQ icon in both accordions", () => {
    const servicesFaq = read("src/components/services/ServicesFAQ.astro");
    const industriesFaq = read("src/components/industries/IndustriesFAQ.astro");
    const icon = read("src/components/ui/FaqToggleIcon.astro");

    for (const faq of [servicesFaq, industriesFaq]) {
      assert.match(faq, /FaqToggleIcon/);
      assert.doesNotMatch(faq, />\s*\+\s*</);
    }
    assert.match(icon, /before:top-1\/2/);
    assert.match(icon, /before:-translate-y-1\/2/);
    assert.match(icon, /after:left-1\/2/);
    assert.match(icon, /after:-translate-x-1\/2/);
    assert.match(icon, /group-open:rotate-45/);
  });
});
