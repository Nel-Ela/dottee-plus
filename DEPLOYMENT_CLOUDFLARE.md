# Cloudflare Pages Deployment

## GitHub Push

```bash
git init
git add .
git commit -m "Build Dottee Plus static website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## Cloudflare Pages Setup

1. Open Cloudflare Dashboard.
2. Go to Workers & Pages.
3. Create a Pages project.
4. Connect the GitHub repository.
5. Select the production branch, usually `main`.

## Build Settings

- Framework preset: Next.js
- Build command: `pnpm build`
- Output directory: `out`
- Node version: 22 or newer

## pnpm Notes

The project includes `pnpm-workspace.yaml` with native build scripts approved for:

- `sharp`
- `unrs-resolver`

These are required by the current Next/Tailwind dependency chain.

## Custom Domain Later

1. In Cloudflare Pages, open the deployed project.
2. Go to Custom domains.
3. Add the domain, for example `dotteeplus.com`.
4. Follow Cloudflare DNS verification.
5. Update `metadataBase`, sitemap URL, and robots sitemap URL if the final production domain differs.
