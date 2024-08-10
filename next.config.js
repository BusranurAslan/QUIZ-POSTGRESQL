const nextConfig = {
    i18n: {
      locales: ['en', 'fr'], // i18n (internationalization) ayarlarınız
      defaultLocale: 'en',
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve = {
          ...config.resolve,
          fallback: {
            ...config.resolve.fallback,
            fs: false,
          },
        };
      }
  
      config.module = {
        ...config.module,
        exprContextCritical: false,
      };
  
   
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      });
  
      return config;
    },

    reactStrictMode: true,
    images: {
      domains: ['example.com'],
    },
  };
  
  module.exports = nextConfig;
  