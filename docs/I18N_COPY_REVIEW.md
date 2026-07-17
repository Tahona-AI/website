# I18N Copy Review

## Architecture Summary

Spanish remains the default locale at the root URLs. English and Polish are generated under `/en/` and `/pl/`. Shared Astro templates receive a `locale` prop, React islands read typed content from `src/i18n/content.ts`, and `src/i18n/routing.ts` generates localized links, canonicals, hreflang alternates and language-selector targets.

Localized metadata, JSON-LD language, breadcrumb labels and `llms.txt` route coverage must change together with public positioning. The generated sitemap covers all Spanish, English and Polish routes.

## Current Positioning Phrases

| ES | EN | PL |
| --- | --- | --- |
| De la estrategia a la implementación. | From strategy to implementation. | Od strategii do wdrożenia. |
| Partner tecnológico | Technology partner | Partner technologiczny |
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
| Validación humana | Human validation | Walidacja przez człowieka |
| Trazabilidad de cambios | Change tracking | Śledzenie zmian |
| Trazabilidad industrial / calidad | Industrial / quality traceability | Identyfikowalność |

## Polish Copy Decisions

- `Partner technologiczny` is the primary company category. Operational diagnosis remains part of the method, not the main positioning.
- `Produkt i oprogramowanie` is a first-class service family. It replaces wording that presented non-AI development as a residual category.
- `Oprogramowanie na miarę` is preferred over an English `custom software` loan phrase.
- `Technologia szyta na miarę` is used only as a supporting metaphor for the tailored approach, not as the formal category.
- `Wczytywanie dokumentów` is preferred to `ingestia dokumentów` in public copy.
- `Śledzenie działań` is used for AI agents and audit trails. `Identyfikowalność` remains for industrial and quality contexts.
- English loanwords are reduced where natural Polish terms exist: `software` becomes `oprogramowanie`, `workflow` becomes `przepływ pracy`, and `back office` becomes `zaplecze operacyjne`.

## Intentional Rewrites

- English body copy avoids direct second-person phrasing and keeps a professional B2B tone.
- Polish paragraphs use natural syntax instead of following Spanish sentence order.
- AI is presented as a core end-to-end capability, but not as Tahona's only capability.
- Health-sector language remains non-clinical: operational support, documentation, internal knowledge and administrative coordination only.
- Marketing text preserves the boundary that Tahona is not a marketing agency.
