/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  optimizeFonts: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'prikolnye-kartinki.ru',
  //     },
  //   ],
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
