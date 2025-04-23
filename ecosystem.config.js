module.exports = {
  apps: [
    {
      name: 'express-server',
      script: './dist/server.js',
      // env: {
      //   NODE_ENV: 'development',
      //   PORT: 3000,
      // },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
