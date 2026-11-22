// GitHub Pages is a visual-only preview target; production must use a full-stack host.
const isGithubPages = process.env.GITHUB_PAGES === '1';
const nextConfig = {
  reactStrictMode: true,
  ...(isGithubPages ? {
    output: 'export',
    basePath: '/Rudra-tatvaa',
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};
export default nextConfig;
