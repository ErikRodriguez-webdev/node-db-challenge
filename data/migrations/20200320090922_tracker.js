exports.up = function(knex) {
  return knex.schema
    .createTable("project", (tbl) => {
      tbl.increments();
      tbl.string("name", 100).notNullable();
      tbl.string("description", 300);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })

    .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.string("name", 100).notNullable();
      tbl.string("description", 300);
    })

    .createTable("task", (tbl) => {
      tbl.increments();
      tbl.string("description", 300).notNullable();
      tbl.string("notes", 300);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("projects_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("project")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resource")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects_resources")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("project");
};
