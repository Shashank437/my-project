module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['5wH7BaHTc5sImd6e07kdNw==','Y6mTk24yedyCPSQghqm91w==','gdMfI0sSAfsrRF6YLWVTeg==','vsF9blGIFNajR9TAtNRSCg=='],
  },
});
