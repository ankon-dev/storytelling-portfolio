# GitHub Pages Deployment Guide with Custom Domain

## 🚀 Quick Setup

Your Next.js project is already configured for static export! Follow these steps:

### 1. GitHub Repository Setup

1. Push your code to a GitHub repository
2. Go to **Settings** → **Pages**
3. Set **Source** to "GitHub Actions"
4. The workflow will automatically deploy on push to main branch

### 2. Custom Domain Configuration (Namecheap)

#### DNS Records in Namecheap:
\`\`\`
Type: A Record
Host: @
Value: 185.199.108.153

Type: A Record  
Host: @
Value: 185.199.109.153

Type: A Record
Host: @
Value: 185.199.110.153

Type: A Record
Host: @
Value: 185.199.111.153

Type: CNAME Record
Host: www
Value: yourusername.github.io
\`\`\`

#### Update CNAME file:
- Edit `public/CNAME` with your actual domain
- Commit and push changes

### 3. GitHub Pages Settings

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `yourdomain.com`
3. Check **Enforce HTTPS** (after DNS propagation)

## 🔧 Build Process

The GitHub Action automatically:
- Installs Node.js 18
- Runs `npm ci` to install dependencies
- Executes `npm run build` (creates static files in `/out`)
- Deploys to GitHub Pages

## 🐛 Troubleshooting

### Common Issues:

**1. "404 - File not found"**
- Check if build completed successfully in Actions tab
- Verify `output: 'export'` in next.config.mjs ✅ (already configured)

**2. "DNS_PROBE_FINISHED_NXDOMAIN"**
- DNS propagation takes 24-48 hours
- Use `dig yourdomain.com` to check DNS records
- Verify A records point to GitHub's IPs

**3. "Mixed Content" errors**
- Ensure all assets use relative paths
- Check `images: { unoptimized: true }` ✅ (already configured)

**4. Custom domain not working**
- Verify CNAME file contains correct domain
- Check Namecheap DNS settings match above
- Wait for DNS propagation

### Testing DNS Propagation:
\`\`\`bash
# Check A records
dig yourdomain.com A

# Check CNAME
dig www.yourdomain.com CNAME

# Check from different locations
nslookup yourdomain.com 8.8.8.8
\`\`\`

## 📁 File Structure After Build

\`\`\`
out/
├── _next/
│   ├── static/
│   └── ...
├── index.html
├── about.html
└── ...
\`\`\`

## 🌐 Alternative: Vercel Deployment (Recommended)

For better performance and full Next.js features:

1. Connect GitHub repo to Vercel
2. Auto-deploys on push
3. Built-in custom domain support
4. No static export limitations

## 📋 Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Actions workflow added
- [ ] CNAME file updated with your domain
- [ ] DNS records configured in Namecheap
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Custom domain added in GitHub Pages settings
- [ ] HTTPS enforced (after DNS propagation)

## 🎯 Expected Timeline

- **GitHub deployment**: 2-5 minutes
- **DNS propagation**: 24-48 hours
- **SSL certificate**: 1-2 hours after DNS propagation
