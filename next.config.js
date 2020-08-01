const path = require('path');
const withOffline = require('next-offline');

const isDev = process.env.NODE_ENV === 'dev';

const handleHash = () => {
  const date = new Date();

  return date.getTime().toString();
};

const nextOfflineConfig = {
  // add the homepage to the cache
  transformManifest: manifest =>
    [{ url: '/', revision: handleHash() }].concat(manifest),
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
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
