'use strict';

var response = require('./res');
var connection = require('./connect');

exports.index = function (req, res) {
    response.ok('Applikasi Berjalan !', res)
};

//get * from table
exports.GetAllMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// get by id

exports.GetById = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (error, rows, fields) {
        if (error) {
            connection.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};