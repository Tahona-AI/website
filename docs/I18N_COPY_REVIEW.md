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
| Objetivo y límites | Goal and boundaries | Cel i granice |
| Sistema e integración | System and integration | System i integracja |
| Supervisión y evolución | Oversight and evolution | Nadzór i rozwój |
| Gestión de excepciones | Exception handling | Zarządzanie wyjątkami |
| Validación humana | Human validation | Walidacja przez człowieka |
| Trazabilidad de cambios | Change tracking | Śledzenie zmian |
| Trazabilidad industrial / calidad | Industrial / quality traceability | Identyfikowalność |

## Hybrid Positioning Decisions

- Tahona's public category is an end-to-end technology partner. The category spans strategy and consulting, digital product, custom software, integrations and AI.
- Strategy and architecture, artificial intelligence, and product and software remain three equally visible, first-class capabilities.
- Outcome orientation is a transversal delivery principle. It does not replace the company category or imply outcome pricing, guaranteed metrics, timeframes or service levels.
- Operating a delivered system is selective and conditional. Public copy may say Tahona assumes agreed operation and exception handling only when the process is bounded and measurable and the scope or collaboration model warrants it.
- Public copy must not present Tahona as an automation agency, an AI-only agency, an operations consultancy or a company defined by a single delivery model.
- The labels `Service as Software`, `AI-native agency`, `partner 360` and `partner all-in` are documentation-only forbidden terms and must not appear in public copy.

## Polish Copy Decisions

- `Partner technologiczny od strategii po wdrożenie` is the primary company category. Diagnosis and process analysis remain part of the method, not the main positioning.
- `Produkt i oprogramowanie` is a first-class service family. It replaces wording that presented non-AI development as a residual category.
- `Oprogramowanie na miarę` is preferred over an English `custom software` loan phrase.
- `Technologia szyta na miarę` is used only as a supporting metaphor for the tailored approach, not as the formal category.
- `Wczytywanie dokumentów` is preferred to `ingestia dokumentów` in public copy.
- `Śledzenie działań` is used for AI agents and audit trails. `Identyfikowalność` remains for industrial and quality contexts.
- `Obsługa` and concrete process language are preferred for selective system operation. `Operacje` remains limited to sector-specific contexts where it is the natural term.
- `Praca pod nadzorem` and `zarządzanie wyjątkami` express the selective execution boundary without implying full autonomous operation.
- English loanwords are reduced where natural Polish terms exist: `software` becomes `oprogramowanie`, `workflow` becomes `przepływ pracy`, and `back office` becomes `zaplecze operacyjne`.

## Intentional Rewrites

- English body copy avoids direct second-person phrasing and keeps a professional B2B tone.
- Polish paragraphs use natural syntax instead of following Spanish sentence order.
- AI is presented as a core capability, but not as Tahona's only capability or public category.
- Selective execution appears only for bounded, measurable processes and never as a blanket promise to operate every delivered system.
- Health-sector language remains non-clinical: operational support, documentation, internal knowledge and administrative coordination only.
- Marketing text preserves the boundary that Tahona is not a marketing agency.
