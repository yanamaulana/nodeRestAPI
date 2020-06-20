'use strict';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/').get(jsonku.index);

    app.route('/show').get(jsonku.GetAllMahasiswa);

    app.route('/get/:id').get(jsonku.GetById);

    app.route('/insert').post(jsonku.inputMhs);

    app.route('/change').put(jsonku.ChangeMhs);

    app.route('/delete').delete(jsonku.deleteById);

    app.route('/detailmahasiswa').get(jsonku.showGroupMatakuliah);

};