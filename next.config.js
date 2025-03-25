/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	basePath: process.env.BASE_PATH || undefined,
	images:
		process.env.NODE_ENV === "production"
			? {
					unoptimized: true,
			  }
			: undefined,
	assetPrefix: process.env.ASSET_PREFIX || undefined,
	output: 'export'
};
module.exports = nextConfig;
