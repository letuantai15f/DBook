
exports.up = function (knex) {
    return knex.schema.createTable("benh_nhan", function (t) {
        t.increments("id").primary().unsigned();
        t.string("ho_ten").notNull();
        t.string("sdt").notNull();
        t.string("gioi_tinh").notNull();
        t.string("email").nullable();
        t.string("cccd").nullable();
        t.string("dia_chi").nullable();
        t.date("ngay_sinh").nullable();
        t.integer("tai_khoan_id").unsigned().notNull();
        t.string("trang_thai").notNull();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("benh_nhan");
};
