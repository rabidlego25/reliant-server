const app = require("./app");
const sequelize = require("./db/sequelize");

const port = process.env.PORT || 8080;

sequelize
  .sync()
  // .sync({ force: true })
  .then(() => {
    console.log("SYNC SUCCESSFUL");
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  })
  .catch((err) => console.log(err.message));

//Test Connection
// (async () => {
//   try {
//     sequelize.authenticate();
//     console.log("authenticated");
//   } catch (err) {
//     console.log(err);
//   }
// })();

// const server = app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });