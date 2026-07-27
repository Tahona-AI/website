# I18N Copy Review

## Architecture Summary

Spanish remains the default locale at the root URLs. English and Polish are generated under `/en/` and `/pl/`. Shared Astro templates receive a `locale` prop, React islands read typed content from `src/i18n/content.ts`, and `src/i18n/routing.ts` generates localized links, canonicals, hreflang alternates and language-selector targets.

Localized metadata, JSON-LD language, breadcrumb labels and `llms.txt` route coverage must change together with public positioning. The generated sitemap covers all Spanish, English and Polish routes.

## Current Positioning Phrases

| ES | EN | PL |
| --- | --- | --- |
| Partner tecnológico de principio a fin | End-to-end technology partner | Partner technologiczny od strategii po wdrożenie |
| De la estrategia a productos y sistemas que funcionan. | From strategy to products and systems that work. | Od strategii do produktów i systemów, które działają. |
| Estrategia, producto y tecnología en un mismo equipo. | Strategy, product and technology in one team. | Strategia, produkt i technologia w jednym zespole. |
| Productos digitales | Digital products | Produkty cyfrowe |
| Software a medida | Custom software | Oprogramowanie na miarę |
| Soluciones de IA | AI solutions | Rozwiązania AI |
| Estrategia y arquitectura | Strategy and architecture | Strategia i architektura |
| Inteligencia artificial | Artificial intelligence | Sztuczna inteligencja |
| Producto y software | Product and software | Produkt i oprogramowanie |
| Diagnóstico y definición | Diagnosis and definition | Diagnoza i definicja |
| Estrategia de producto y tecnología | Product and technology strategy | Strategia produktu i technologii |
| Arquitectura y hoja de ruta | Architecture and roadmap | Architektura i plan działania |
| Agentes y automatización | Agents and automation | Agenci i automatyzacja |
| Procesamiento documental y conocimiento | Document processing and knowledge | Przetwarzanie dokumentów i wiedza |
| Integraciones y plataformas | Integrations and platforms | Integracje i platformy |
| Consultoría y definición | Consulting and definition | Doradztwo i definicja |
| Construcción de producto o sistema | Product or system delivery | Budowa produktu lub systemu |
| Evolución y operación acordada | Agreed evolution and operations | Uzgodniony rozwój i obsługa |
| Objetivo y límites | Goal and boundaries | Cel i granice |
| Sistema e integración | System and integration | System i integracja |
| Supervisión y evolución | Oversight and evolution | Nadzór i rozwój |
| Gestión de excepciones | Exception handling | Zarządzanie wyjątkami |
| Validación humana | Human validation | Walidacja przez człowieka |
| Trazabilidad de cambios | Change tracking | Śledzenie zmian |
| Trazabilidad industrial / calidad | Industrial / quality traceability | Identyfikowalność |
| Industria y trazabilidad | Industry and traceability | Przemysł i identyfikowalność |
| Operaciones comerciales | Commercial operations | Operacje sprzedażowe |
| Salud no clínica | Non-clinical healthcare | Niekliniczne obszary ochrony zdrowia |

## Hybrid Positioning Decisions

- Tahona's public category is an end-to-end technology partner. The category spans strategy and consulting, digital product, custom software, integrations and AI.
- Strategy and architecture, artificial intelligence, and product and software remain three equally visible, first-class capabilities.
- Outcome orientation is a transversal delivery principle. It does not replace the company category or imply outcome pricing, guaranteed metrics, timeframes or service levels.
- Operating a delivered system is selective and conditional. Public copy may say Tahona assumes agreed operation and exception handling only when the process is bounded and measurable and the scope or collaboration model warrants it.
- Public copy must not present Tahona as an automation agency, an AI-only agency, an operations consultancy or a company defined by a single delivery model.
- The labels `Service as Software`, `AI-native agency`, `partner 360` and `partner all-in` are documentation-only forbidden terms and must not appear in public copy.
- The industries page distinguishes full-detail sector experience and active workstreams in legal, logistics, and industry and traceability from lighter, applicable patterns in insurance, commercial operations, and non-clinical healthcare.
- The lighter contexts do not imply equal prior delivery, case evidence, or sector authority. They show where similar rules, data, documentation, validation, and integration patterns may apply.

## Public Cases Contract

- The cases route contains exactly four entries in the established order and keeps the canonical and legacy anchors documented in the route contract tests.
- Every entry presents the same visible hierarchy: challenge, Tahona intervention, three concise statements of what the system enables, and two or three localized links to existing service capabilities.
- The challenge describes the operational problem or constraint. The intervention explains what Tahona defined, designed, built or integrated across strategy, architecture, product, software and AI where it contributes. Enablement statements describe defensible workflow or system behavior without invented metrics or client outcomes.
- Case titles stay work-oriented and consistent across the cases route and the two featured homepage entries:

| ES | EN | PL |
| --- | --- | --- |
| Documentación legal conectada con el expediente | Legal documents connected to the matter | Dokumentacja prawna powiązana ze sprawą |
| Planificación logística bajo restricciones operativas | Logistics planning under operational constraints | Planowanie logistyczne z uwzględnieniem ograniczeń operacyjnych |
| Conocimiento interno con fuentes, permisos y evaluación | Internal knowledge with sources, permissions and evaluation | Wiedza wewnętrzna ze źródłami, uprawnieniami i ewaluacją |
| Trazabilidad alimentaria desde la recepción hasta la salida | Food traceability from receipt to dispatch | Identyfikowalność żywności od przyjęcia do wysyłki |

- Public case content and structured data must never classify a case by state, phase, maturity, ownership, delivery status or internal versus external category. This includes headings, badges, fields, data attributes, grouping and equivalent phrases in ES, EN and PL.
- Forbidden public classifications include client work, active project, PoC, prototype, validation or production as case-state labels, internal infrastructure, own product, system we use, work in progress, validated and in production. Human validation remains valid when it describes a system control inside the workflow.
- Case metadata and JSON-LD reflect the visible challenge, intervention and related capabilities. They do not carry a hidden case-state model.

## Polish Copy Decisions

- `Partner technologiczny od strategii po wdrożenie` is the primary company category. Diagnosis and process analysis remain part of the method, not the main positioning.
- `Produkt i oprogramowanie` is a first-class service family. It replaces wording that presented non-AI development as a residual category.
- `Oprogramowanie na miarę` is preferred over an English `custom software` loan phrase.
- `Technologia szyta na miarę` is used only as a supporting metaphor for the tailored approach, not as the formal category.
- `Wczytywanie dokumentów` is preferred to `ingestia dokumentów` in public copy.
- `Śledzenie działań` is used for AI agents and audit trails. `Identyfikowalność` remains for industrial and quality contexts.
- `Obsługa` and concrete process language are preferred for selective system operation. `Operacje` remains limited to sector-specific contexts where it is the natural term.
- `Uzgodniony rozwój i obsługa` names the selective post-launch engagement mode. It does not imply blanket operation; operational tasks and exception handling require a bounded, measurable process and an agreed collaboration model.
- `Praca pod nadzorem` and `zarządzanie wyjątkami` express the selective execution boundary without implying full autonomous operation.
- English loanwords are reduced where natural Polish terms exist: `software` becomes `oprogramowanie`, `workflow` becomes `przepływ pracy`, and `back office` becomes `zaplecze operacyjne`.

## Intentional Rewrites

- English body copy avoids direct second-person phrasing and keeps a professional B2B tone.
- Polish paragraphs use natural syntax instead of following Spanish sentence order.
- AI is presented as a core capability, but not as Tahona's only capability or public category.
- Selective execution appears only for bounded, measurable processes and never as a blanket promise to operate every delivered system.
- Health-sector language remains non-clinical: operational support, documentation, internal knowledge and administrative coordination only.
- Commercial operations copy preserves the boundary that Tahona is not a marketing agency.
