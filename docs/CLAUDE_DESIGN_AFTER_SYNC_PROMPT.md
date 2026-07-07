# Prompt After Claude Design Sync

Use this prompt after running `/design-sync` and selecting the synced Tahona design
system in Claude Design.

```text
You are working with the synced "Tahona Website" design system.

Goal:
Create design explorations that extend the current Tahona website without changing
the brand direction. The output should feel like a natural continuation of the
current homepage, /services, /industries, and /cases pages.

Context:
Tahona is a technical consulting and implementation studio for internal operations:
processes, data, documents, reporting, internal tools, integrations, adoption, and
practical automation when it fits the real workflow.

Deck context:
The deck frames the audience as Spanish SMBs overwhelmed by AI hype and unsure where
to start. The useful message is not "buy AI", but "the technology already exists;
what is missing is the right implementation." Companies need a trusted, senior,
small team that understands their business, diagnoses the operation, builds around
existing tools, and helps with adoption. Treat technology as a means, not the end.

Important positioning:
- Tahona is not a generic AI automation agency.
- Lead with operations, implementation, process clarity, data, documents, and tools.
- AI can appear when it improves a concrete workflow, but should not be the default
  hero claim.
- Do not invent metrics, customers, testimonials, awards, savings, timelines, or
  regulatory guarantees.

Design rules:
- Use Plus Jakarta Sans for headings and Geist Sans for body/UI.
- Use the current Tahona green and neutral palette.
- Preserve the raised green primary CTA style and the quieter secondary CTA style.
- Preserve the soft card system: white or translucent white, thin border, soft shadow,
  subtle hover lift, no nested cards.
- Use generous but disciplined spacing.
- Use the current 3D green/white visual asset style or neutral placeholders when
  final visuals are not available.
- Avoid purple/blue AI gradients, dark futuristic UI, decorative blobs, stock visuals,
  and monospace-heavy labels.
- Keep the design responsive. No text should overflow on mobile.

Copy rules:
- Write in neutral corporate Spanish.
- Be direct, practical, specific, and anti-hype.
- Avoid "transformación digital", "disruptivo", "game-changer", and generic AI
  agency wording.
- Avoid "tú" and "usted" unless a CTA explicitly needs conversational language.
- Keep service taxonomy aligned with:
  - Fundamentos
  - Desarrollo de IA
  - Otros desarrollos

Current page patterns to reuse:
- Homepage: hero, services, industries/cases previews, working method, contact, footer.
- Services: hero, three service families, detailed service sections, implementation
  examples, FAQ, contact, footer.
- Industries: hero, industry grid, detailed alternating industry sections, FAQ,
  contact, footer.
- Cases: hero, detailed case studies with alternating visuals, contact, footer.

Task:
Create two design options for the next Tahona page or section I request.

For each option:
1. Keep the same brand system and component language.
2. Explain the layout briefly in Spanish.
3. State which existing Tahona patterns it reuses.
4. Mark any visual as placeholder if the final asset is not available.
5. Do not change the navbar, contact section, or footer unless I explicitly ask.

Start by asking me what page or section we are designing next.
```
