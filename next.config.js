/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  build: {
    extend(config, {}) {
        config.node = {
            fs: 'empty'
        }
    }
  },
  env: {
    // Add any logic you want here, returning `true` to enable password protect.
    PASSWORD_PROTECT: 'test',
    PASSWORD: 'password123'
  }
}


