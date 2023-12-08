/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: '',
                pathname: '/ddzlmw5rp/image/upload/**'
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: ''
            }
        ],
    }
}

module.exports = nextConfig
