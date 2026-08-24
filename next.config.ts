import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig: NextConfig = {
  output: 'export',
  distDir: isGithubPages ? '.next-pages' : '.next',
  basePath: isGithubPages ? '/bb-roadside-demo' : '',
  assetPrefix: isGithubPages ? '/bb-roadside-demo/' : '',
};

export default nextConfig;
