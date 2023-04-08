
exports.up = function (knex) {
    return knex.schema.createTable("gio", function (t) {
        t.increments("id").primary().unsigned();
        t.integer("bat_dau").notNull();
        t.integer("ket_thuc").notNull();
        t.string("trang_thai").nullable();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("gio");
};
