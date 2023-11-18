/** @type {import('next').NextConfig} */
const nextConfig = { 
    images: { 
        domains: ['avatars.githubusercontent.com'], 
        formats: ['image/avif', 'image/webp'], 
    }, 
}

module.exports = nextConfig
