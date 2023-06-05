const commentetor = require("./commentetor");

commentetor("./demo/")
  .then((data) => {
    console.log("then ==", data);
  })
  .catch((error) => {
    console.log("catch === ", error);
  });
