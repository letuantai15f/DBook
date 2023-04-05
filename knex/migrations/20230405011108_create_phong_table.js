
exports.up = function (knex) {
    return knex.schema.createTable("phong_chat", function (t) {
        t.increments("id").primary().unsigned();
        t.integer("benh_nhan_id").notNull();
        t.string("trang_thai").nullable();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("phong_chat");
};
