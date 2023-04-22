
exports.up = function(knex) {
    return knex.schema.table('trieu_chung_tu_van', function (t) {
        t.text("chuyen_khoa").nullable();
        t.text("tc_ck").nullable();

    });
};

exports.down = function(knex) {
    return knex.schema.table('trieu_chung_tu_van', function (t) {
        t.dropColumn("chuyen_khoa");
        t.dropColumn("tc_ck");
    });
};
