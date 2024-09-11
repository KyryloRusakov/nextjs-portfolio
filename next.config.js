/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  basePath: isProd ? '/nextjs-portfolio' : '',
  output: 'export',
  distDir: 'dist',
  typescript: {
    ignoreBuildErrors: true,
  }
}
 
module.exports = nextConfig