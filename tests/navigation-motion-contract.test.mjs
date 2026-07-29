import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, test } from "node:test";

const repoRoot = process.cwd();

function read(relativePath) {
  return readFileSync(join(repoRoot, relativePath), "utf8");
}

describe("navigation and disclosure motion contract", () => {
  test("uses a soft horizontal reveal without translating the page snapshot", () => {
    const layout = read("src/layouts/Layout.astro");

    assert.match(layout, /import \{ ClientRouter \} from "astro:transitions"/);
    assert.match(layout, /<ClientRouter \/>/);
    assert.match(layout, /transition:animate=\{pageWipeAnimation\}/);
    assert.match(layout, /transition:name="root"/);
    assert.doesNotMatch(layout, /transition:name="page"/);
    assert.match(layout, /name: "tahona-page-hold"/);
    assert.match(layout, /name: "tahona-page-wipe-in"/);
    assert.match(layout, /@property --tahona-wipe-front/);
    assert.match(layout, /mask-image: linear-gradient/);
    assert.match(layout, /::view-transition-new\(root\)/);
    assert.match(layout, /--tahona-wipe-front: -42%/);
    assert.match(layout, /--tahona-wipe-front: 100%/);
    assert.doesNotMatch(layout, /translateY\(/);
    assert.doesNotMatch(layout, /scale\(/);
  });

  test("keeps hover discovery while making the desktop Services label a real page link", () => {
    const navbar = read("src/components/sections/Navbar.tsx");

    assert.match(navbar, /const servicesHref = getLocalizedPath\(locale, "services"\)/);
    assert.match(navbar, /<a\s+aria-controls="services-mega-menu"/);
    assert.match(navbar, /href=\{servicesHref\}/);
    assert.match(navbar, /onClick=\{handleServicesClick\}/);
    assert.match(navbar, /onMouseEnter=\{\(\) => setIsServicesMenuOpen\(true\)\}/);
    assert.match(navbar, /window\.requestAnimationFrame/);
    assert.match(navbar, /navigate\(destination\)/);
    assert.match(navbar, /onExitComplete=\{completePendingNavigation\}/);
    assert.match(navbar, /scrollToHash\(nextUrl\.hash \|\| "#hero"\)/);

    const menu = read("src/components/sections/navbar/ServicesMegaMenu.tsx");
    assert.match(menu, /<AnimatePresence onExitComplete=\{onExitComplete\}>/);

    const mobileMenu = read("src/components/sections/navbar/MobileNavMenu.tsx");
    const languageSelector = read("src/components/sections/navbar/LanguageSelector.tsx");
    assert.match(mobileMenu, /<AnimatePresence onExitComplete=\{onExitComplete\}>/);
    assert.match(languageSelector, /onExitComplete=\{completeLanguageNavigation\}/);
  });

  test("animates one shared FAQ disclosure while preserving native details semantics", () => {
    const accordion = read("src/components/ui/FaqAccordion.astro");
    const servicesFaq = read("src/components/services/ServicesFAQ.astro");
    const industriesFaq = read("src/components/industries/IndustriesFAQ.astro");

    assert.match(accordion, /<details/);
    assert.match(accordion, /<summary/);
    assert.match(accordion, /answer\.animate/);
    assert.match(accordion, /if \(isAnimating\) \{\s*event\.preventDefault\(\)/);
    assert.match(accordion, /prefers-reduced-motion: reduce/);
    assert.match(accordion, /astro:page-load/);
    assert.match(servicesFaq, /<FaqAccordion items=\{servicesFaq\}/);
    assert.match(industriesFaq, /<FaqAccordion items=\{industriesFaq\}/);
  });
});
