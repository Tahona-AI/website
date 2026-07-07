# Google Search Console Setup

This checklist is for the current static Astro site at `https://tahona.ai`.

Do not submit the new sitemap or request indexing until the current branch has been deployed. The live site currently may not reflect the local `/services/`, `/industries/`, `/cases/`, `/robots.txt`, and `/llms.txt` output.

## 1. Verify the Property

1. Open Google Search Console.
2. Add a new **Domain property** for `tahona.ai`.
3. Copy the DNS TXT verification value from Google Search Console.
4. Add the TXT record in the DNS provider for `tahona.ai`.
5. Return to Google Search Console and click **Verify**.

Use a Domain property instead of only a URL-prefix property because it covers `http`, `https`, `www`, and subdomains for the domain.

## 2. Submit the Sitemap

After the current static site is deployed and live URLs return 200:

1. Go to **Indexing** > **Sitemaps**.
2. Submit `https://tahona.ai/sitemap-index.xml`.
3. Confirm the sitemap status changes to **Success**.

The `robots.txt` file should keep this sitemap reference:

```text
Sitemap: https://tahona.ai/sitemap-index.xml
```

## 3. Inspect the Main URLs

Use URL Inspection after deployment for:

- `https://tahona.ai/`
- `https://tahona.ai/services/`
- `https://tahona.ai/industries/`
- `https://tahona.ai/cases/`

For each URL:

1. Click **Test live URL**.
2. Confirm Google can fetch the page and render resources.
3. Confirm the canonical selected by Google matches the submitted URL.
4. Request indexing only after the live test passes.

For many URLs, rely on the sitemap instead of manual indexing requests.

## 4. Monitor After Submission

Check these reports after Google processes the deploy:

- **Pages**: important routes should be indexed, not blocked or soft 404.
- **Sitemaps**: `sitemap-index.xml` should stay successful.
- **Search Results**: monitor impressions, clicks, CTR, average position, and queries.
- **Core Web Vitals**: watch mobile first.
- **Enhancements and Rich Results**: verify structured data issues do not appear.

## 5. Manual Post-Deploy Checks

Before submitting to Search Console, verify these URLs in a browser or with `curl -I`:

- `https://tahona.ai/services/`
- `https://tahona.ai/industries/`
- `https://tahona.ai/cases/`
- `https://tahona.ai/robots.txt`
- `https://tahona.ai/llms.txt`
- `https://tahona.ai/sitemap-index.xml`

If any route returns a GitHub Pages 404, trigger the existing deployment workflow first and wait for GitHub Pages to publish the new static output.
