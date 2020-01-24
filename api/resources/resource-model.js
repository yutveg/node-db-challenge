const db = require("../../data/dbconfig.js");

module.exports = {
  addResource,
  getResources
};

function addResource(resource) {
  return db("resources").insert(resource);
}

function getResources() {
  return db("resources").select("*");
}
