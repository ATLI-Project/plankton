/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces a fully deployable `out/` folder that can be
  // hosted on Netlify, Vercel, Cloudflare Pages, GitHub Pages or cPanel.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
