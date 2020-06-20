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
            console.log(error);
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
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// push data to table mhs
exports.inputMhs = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)",
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Success Inserted !", res);
            }
        });
};

//put data into table by id
exports.ChangeMhs = function (req, res) {
    var id = req.body.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("UPDATE MAHASISWA SET nim=?, nama=?, jurusan=? WHERE id=?",
        [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Has Changes !", res);
            }
        });
};

//Delete data by id
exports.deleteById = function (req, res) {
    var id = req.body.id;

    connection.query('DELETE FROM MAHASISWA WHERE id=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Has deleted !", res);
            }
        });
};