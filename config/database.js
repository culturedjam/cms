const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(__dirname, "..", "culturedjam.db"),
    },
    useNullAsDefault: true,
  },
});
