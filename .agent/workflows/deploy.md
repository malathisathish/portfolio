---
description: how to deploy the portfolio to Vercel or Netlify for free
---

### Option 1: Deploying to Vercel (Recommended)

1. **Push your code to GitHub**:
   - Create a new repository on [GitHub](https://github.com/new).
   - In your terminal, run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin YOUR_GITHUB_REPO_URL
     git push -u origin main
     ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up with GitHub.
   - Click **"Add New"** > **"Project"**.
   - Import your portfolio repository.
   - Vercel will automatically detect **Vite**. Click **"Deploy"**.

### Option 2: Deploying to Netlify

1. **Push your code to GitHub** (same as above).
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up with GitHub.
   - Click **"Add new site"** > **"Import an existing project"**.
   - Select GitHub and choose your repository.
   - Ensure the build command is `npm run build` and the publish directory is `dist`.
   - Click **"Deploy site"**.

### Option 3: Quick Terminal Deployment (Netlify CLI)

If you don't want to use GitHub yet:
// turbo
1. Install Netlify CLI: `npm install -g netlify-cli`
2. Build the project: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`
