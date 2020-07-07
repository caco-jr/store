const path = require('path');
const withOffline = require('next-offline');

const nextOfflineConfig = {
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? '/service-worker.js'
      : '/static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ];
  },
};

const sassConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

const nextConfig = {
  ...sassConfig,
  ...nextOfflineConfig,
};

module.exports = withOffline(nextConfig);
