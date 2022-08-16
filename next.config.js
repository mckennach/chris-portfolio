/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  env: {
    // Add any logic you want here, returning `true` to enable password protect.
    PASSWORD_PROTECT: 'test',
    PASSWORD: 'password123'
  }
}


