
exports.up = function(knex) {
    return knex.schema.table('lich_dat', function (t) {
        t.text("mo_ta").nullable();
    });
};

exports.down = function(knex) {
    return knex.schema.table('lich_dat', function (t) {
        t.dropColumn("mo_ta");
    });
};
