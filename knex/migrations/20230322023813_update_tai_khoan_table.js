
exports.up = function(knex) {
    return knex.schema.table('tai_khoan', function (t) {
        t.string("verify").nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.table('tai_khoan', function (t) {
        t.dropColumn("verify");
    });
};
