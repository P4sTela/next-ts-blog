/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: process.env.GITHUB_ACTIONS && "/next-ts-blog",
    trailingSlash: true,
}

module.exports = nextConfig