
exports.up = function (knex) {
    return knex.schema.createTable("lich_kham", function (t) {
        t.increments("id").primary().unsigned();
        t.integer("bac_si_id").notNull();
        t.datetime("ngay_kham").notNull();
        t.time("bat_dau").notNull();
        t.time("ket_thuc").notNull();
        t.string("trang_thai").notNull();
        t.timestamp("created_at").notNull().defaultTo(knex.fn.now());
        t.timestamp("updated_at").nullable();
        t.timestamp("deleted_at").nullable();

    });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("lich_kham");
};
