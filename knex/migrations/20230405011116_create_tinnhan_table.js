
exports.up = function (knex) {
    return knex.schema.createTable("tin_nhan", function (t) {
        t.increments("id").primary().unsigned();
        t.integer("phong_id").notNull();
        t.integer("nguoi_nhan").notNull();
        t.text("noi_dung").notNull();
        t.string("trang_thai").nullable();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("tin_nhan");
};
