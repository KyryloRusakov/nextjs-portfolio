/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  basePath: '/nextjs-portfolio',
  assetPrefix: '/nextjs-portfolio/',
  output: 'export',
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: true,
  }
}
 
module.exports = nextConfig