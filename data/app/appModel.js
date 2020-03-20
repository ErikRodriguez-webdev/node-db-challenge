const db = require("../dbConfig");

module.exports = {
  addResource,
  findAllResources,
  addProject,
  findAllProjects,
  addTask,
  findAllTasks
};

function addResource(data) {
  return db("resource")
    .insert(data)
    .then((res) => {
      return db("resource").where({ id: res[0] });
    });
}

function findAllResources() {
  return db("resource");
}

function addProject(data) {
  return db("project")
    .insert(data)
    .then((res) => {
      return db("project").where({ id: res[0] });
    });
}

function findAllProjects() {
  return db("project");
}

function addTask(data) {
  return db("task")
    .insert(data)
    .then((res) => {
      return db("task").where({ id: res[0] });
    });
}

function findAllTasks() {
  return db("task");
}
