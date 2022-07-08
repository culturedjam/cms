module.exports = ({ env }) => ({
  host: `localhost`,
  port: 3037,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
