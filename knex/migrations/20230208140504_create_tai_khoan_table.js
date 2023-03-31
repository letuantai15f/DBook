
exports.up = function (knex) {
    return knex.schema.createTable("tai_khoan", function (t) {
        t.increments("id").primary().unsigned();
        t.text("tai_khoan").notNull();
        t.text("mat_khau").notNull();
        t.integer("quyen").notNull();
        t.string("trang_thai").notNull();
        t.text("hinh").nullable();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("tai_khoan");
};
