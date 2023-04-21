
exports.up = function(knex) {
    return knex.schema.table('tin_nhan', function (t) {
        t.dropColumn("nguoi_nhan");
        t.string("nguoi_gui").nullable();
        t.string("type").nullable();

    });
};

exports.down = function(knex) {
    return knex.schema.table('tin_nhan', function (t) {
        t.string("nguoi_nhan").nullable();
        t.dropColumn("nguoi_gui");
        t.dropColumn("type");
    });
};
