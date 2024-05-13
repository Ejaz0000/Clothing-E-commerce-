/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    webpack: (config, { isServer }) => {
        // Exclude specific modules from being bundled
        if (!isServer) {
            // Exclude @mongodb-js/zstd from being bundled
            config.plugins.push(
              new webpack.IgnorePlugin({
                resourceRegExp: /^@mongodb-js\/zstd$/,
              })
            );
          }
        
        return config;
      },
}

module.exports = nextConfig
