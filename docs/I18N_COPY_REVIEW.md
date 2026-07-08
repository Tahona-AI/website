# I18N Copy Review

## Architecture Summary

The site keeps Spanish as the default locale at the existing URLs and generates English and Polish under `/en/` and `/pl/`. Shared Astro page templates receive a `locale` prop, React islands read typed content from `src/i18n/content.ts`, and routing helpers in `src/i18n/routing.ts` generate localized internal links, canonicals, hreflang alternates and language-selector targets.

SEO/GEO baseline files were preserved. The i18n work extends them with localized metadata, localized JSON-LD language and breadcrumb labels, alternate links in the page head, and expanded `llms.txt` route coverage.

The generated sitemap lists all Spanish, English and Polish routes. Hreflang alternates are emitted in each page head rather than as sitemap alternate entries in this pass.

## Key Phrases Reviewed

| ES | EN | PL |
| --- | --- | --- |
| La tecnología ya existe. Falta la implementación adecuada. | The technology already exists. What is missing is the right implementation. | Technologia już istnieje. Brakuje właściwego wdrożenia. |
| Procesos, datos y herramientas internas | Internal processes, data and tools | Procesy, dane i narzędzia wewnętrzne |
| Fundamentos | Foundations | Fundamenty |
| Desarrollo de IA | AI development | Wdrożenia AI |
| Otros desarrollos | Other custom development | Inne wdrożenia techniczne |
| Trabajo aplicado | Applied work | Projekty wdrożeniowe |
| Validación humana | Human validation | Walidacja przez człowieka |
| Trazabilidad de cambios | Change tracking | Śledzenie zmian |
| Trazabilidad de acciones de agentes | Agent action traceability | Śledzenie działań |
| Trazabilidad industrial / calidad | Industrial / quality traceability | Identyfikowalność |
| Herramientas internas | Internal tools | Narzędzia wewnętrzne |
| Bases de conocimiento empresarial | Enterprise knowledge bases | Firmowe bazy wiedzy |
| Diagnóstico operativo | Operational diagnosis | Diagnoza operacyjna |
| Implementación técnica | Technical implementation | Wdrożenie techniczne |
| Procesamiento documental | Document processing | Przetwarzanie dokumentów |
| Ingesta documental | Document ingestion | Wczytywanie dokumentów |
| Automatización supervisada | Supervised automation | Automatyzacja nadzorowana |

## Polish copy decisions

- `Wdrożenia AI` replaces `Rozwój rozwiązań AI` in the main taxonomy. It is shorter, more implementation-led and closer to Tahona's positioning.
- `Inne wdrożenia techniczne` replaces `Pozostałe prace rozwojowe`. The previous wording sounded generic and slightly software-house-like.
- `Projekty wdrożeniowe` replaces `Praca wdrożeniowa` for public navigation and case framing.
- `Wczytywanie dokumentów` replaces `Ingestia dokumentów` in public copy. `Ingestia` is understandable in technical circles but too artificial for a general B2B website.
- `Śledzenie działań` is used for AI agents and audit trails. `Identyfikowalność` is kept for industrial, quality and traceability contexts where it is a natural Polish term.
- English loanwords were reduced where possible: `software` became `oprogramowanie`, `workflow` became `przepływ pracy`, `back office` became `zaplecze operacyjne`, and `follow-up` became `dalszy kontakt`.

## Intentional Rewrites

- English copy avoids direct "you" phrasing in body sections and keeps a professional B2B tone.
- Polish paragraphs were rewritten for natural syntax instead of following Spanish sentence order.
- Health-sector language stays non-clinical: operational support, documentation, internal knowledge and administrative coordination only.
- Marketing text explicitly preserves the "not a marketing agency" boundary while avoiding untranslated `growth` / `lead ops` wording in public copy.
