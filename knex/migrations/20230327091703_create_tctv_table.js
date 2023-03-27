
exports.up = function (knex) {
    return knex.schema.createTable("trieu_chung_tu_van", function (t) {
        t.increments("id").primary().unsigned();
        t.text("trieu_chung").notNull();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("trieu_chung_tu_van");
};
