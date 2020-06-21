var connection = require('../connect');
var mysql = require('mysql');
var md5 = require('md5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip = require('ip');

// controller untuk register
exports.registration = function (req, res) {
    var post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.username),
        role: req.body.role,
        created_at: new Date(),
    }

    var query = "SELECT email FROM ?? WHERE ?? = ?";
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (error, rows) {
        if (error) {
            console.log(error);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table);
                connection.query(query, post, function (error, rows) {
                    if (error) {
                        console.log(error)
                    } else {
                        response.ok('success insert data!', res);
                    }
                });
            } else {
                response.ok('email already taken !', res);
            }
        }
    })
}