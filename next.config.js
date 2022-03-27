/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/',
				destination: '/mania',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
