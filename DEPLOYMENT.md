# Deployment Guide for ankon.me

## GitHub Pages Deployment

Your portfolio is configured to deploy automatically to GitHub Pages with your custom domain `ankon.me`.

### Setup Steps:

1. **GitHub Repository Settings:**
   - Go to your GitHub repository settings
   - Navigate to "Pages" section
   - Set source to "Deploy from a branch"
   - Select "gh-pages" branch
   - Set folder to "/ (root)"

2. **Custom Domain Configuration:**
   - In GitHub Pages settings, add your custom domain: `ankon.me`
   - GitHub will automatically create a CNAME file

3. **Namecheap DNS Configuration:**
   - Login to your Namecheap account
   - Go to Domain List → Manage → Advanced DNS
   - Add these records:
     \`\`\`
     Type: CNAME
     Host: www
     Value: yourusername.github.io
     TTL: Automatic
     
     Type: A
     Host: @
     Value: 185.199.108.153
     TTL: Automatic
     
     Type: A
     Host: @
     Value: 185.199.109.153
     TTL: Automatic
     
     Type: A
     Host: @
     Value: 185.199.110.153
     TTL: Automatic
     
     Type: A
     Host: @
     Value: 185.199.111.153
     TTL: Automatic
     \`\`\`

4. **Automatic Deployment:**
   - Every push to the `main` branch will trigger automatic deployment
   - The GitHub Action will build and deploy your site
   - Your site will be available at `https://ankon.me`

### Manual Deployment:

If you need to deploy manually:

\`\`\`bash
npm run deploy
\`\`\`

### Troubleshooting:

- **Site showing README instead of website:** Make sure the GitHub Action completed successfully
- **404 errors:** Check that the `gh-pages` branch exists and contains the built files
- **Domain not working:** Verify DNS settings in Namecheap (can take up to 48 hours to propagate)
- **Build failures:** Check the Actions tab in your GitHub repository for error logs

### Alternative: Vercel Deployment (Recommended)

For better performance and easier deployment:

1. Connect your GitHub repo to Vercel
2. Set custom domain in Vercel dashboard
3. Update Namecheap DNS to point to Vercel:
   \`\`\`
   Type: CNAME
   Host: @
   Value: cname.vercel-dns.com
   TTL: Automatic
   \`\`\`

Your portfolio will be live at `https://ankon.me` once DNS propagates!
