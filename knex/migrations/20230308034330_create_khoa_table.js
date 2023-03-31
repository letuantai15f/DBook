
exports.up = function (knex) {
    return knex.schema.createTable("khoa", function (t) {
        t.increments("id").primary().unsigned();
        t.string("ma_khoa").notNull();
        t.string("ten_khoa").notNull();
        t.text("mo_ta").nullable();
        t.text("hinh").nullable();
        t.string("trang_thai").notNull();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("khoa");
};
