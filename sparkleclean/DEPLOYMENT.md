# SparkleClean — Continuous Deployment Setup

This guide walks through the one-time setup needed for every push to `main` to auto-deploy to Vercel, with preview deployments on every other branch / pull request, and a GitHub Actions CI gate that blocks broken PRs.

---

## 1. Files included

| File | Purpose |
| --- | --- |
| `vercel.json` | Project config: framework, build command, production branch (`main`), preview deploys, region |
| `.github/workflows/ci.yml` | GitHub Actions CI — runs `npm ci → lint → build` on every push to `main` and every PR |

Copy both files into the root of the SparkleClean repository (the workflow file must live at `.github/workflows/ci.yml`).

---

## 2. Link the Vercel project to GitHub (one-time)

Run these in the project root locally:

```bash
# 1. Install Vercel CLI (skip if already installed)
npm i -g vercel

# 2. Log in
vercel login

# 3. Link this folder to a Vercel project
vercel link
#    → Set up and deploy "~/sparkleclean"? Y
#    → Which scope? <your team>
#    → Link to existing project? N (or Y if already created)
#    → What's your project name? sparkleclean
#    → In which directory is your code? ./
```

This creates a `.vercel/` folder (already git-ignored) that stores the project ID. Commit nothing from `.vercel/`.

---

## 3. Connect the GitHub repo via the Vercel dashboard

The CLI handles linking locally, but you also need the Vercel ↔ GitHub integration so pushes trigger deploys automatically:

1. Go to **https://vercel.com/dashboard**
2. Open the **sparkleclean** project
3. Click **Settings → Git**
4. Under **Connected Git Repository**, click **Connect Git Repository**
5. Choose **GitHub**, authorize the Vercel GitHub App if prompted
6. Select your `sparkleclean` repository
7. Set **Production Branch** to `main`
8. Leave **Ignored Build Step** empty (the workflow handles gating)
9. Confirm **Deploy Hooks** and **Preview Deployments** are enabled — preview deployments will run for every non-`main` branch and every PR

You can verify the configuration on **Settings → Git → Production Branch** — it should read `main`.

---

## 4. How `vercel.json` enforces the policy

```json
"git": { "deploymentEnabled": { "main": true } }
```

Only `main` triggers **production** deployments. Every other branch produces a **preview** deployment automatically — the default Vercel behavior, no extra config needed.

```json
"framework": "nextjs",
"buildCommand": "npm run build",
"installCommand": "npm install",
"outputDirectory": ".next",
"regions": ["syd1"]
```

Sydney edge region (`syd1`) since SparkleClean's audience is AU-based; change if needed.

---

## 5. How CI gates broken PRs

`.github/workflows/ci.yml` runs on:

- `push` to `main`
- `pull_request` targeting `main`

Steps: `actions/checkout` → `setup-node@20` → `npm ci` → `npm run lint` → `npm run build`. If lint or build fails, the workflow exits non-zero and the PR status check turns red, blocking merges (assuming branch protection is on — see step 6).

---

## 6. Recommended: enable branch protection on `main`

In the GitHub repo:

1. **Settings → Branches → Add branch protection rule**
2. Branch name pattern: `main`
3. Check **Require status checks to pass before merging**
4. Search for and require the **Lint & Build** check from `.github/workflows/ci.yml`
5. Check **Require branches to be up to date before merging**
6. Save

Now a failing CI build literally cannot be merged into `main`.

---

## 7. Test the pipeline

```bash
# Make a trivial change
echo "<!-- ci test $(date) -->" >> README.md

git add README.md
git commit -m "chore: trigger CI/CD test"
git push origin main
```

Then watch:

- **GitHub → Actions tab** — the `CI` workflow should appear and turn green
- **Vercel dashboard → Deployments** — a new production deployment should appear within ~30 seconds of the push and go live at your production URL once finished

For preview deployments, push to a feature branch and open a PR — Vercel will comment on the PR with the preview URL.

---

## Troubleshooting

- **No deploy triggered after push** → Settings → Git in Vercel: confirm the repo is connected and `main` is the production branch.
- **CI green but no Vercel deploy** → The GitHub integration isn't linked, or the Vercel GitHub App lost repo access. Re-authorize at https://github.com/settings/installations.
- **Build fails on Vercel but works locally** → Node version mismatch. Set the Vercel project to Node 20 under Settings → General → Node.js Version.
