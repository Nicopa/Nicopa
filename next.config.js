/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: process.env.BASE_PATH || undefined,
	images: { unoptimized: true },
	assetPrefix: process.env.ASSET_PREFIX || undefined,
	output: 'export'
};
module.exports = nextConfig;
