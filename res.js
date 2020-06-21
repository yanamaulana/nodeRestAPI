'use strict';

exports.ok = function (values, res) {
    var data = {
        'status': 200,
        'values': values,
    };

    res.json(data);
    res.end();
}

//response nested table
exports.oknested = function (values, res) {
    const hasil = values.reduce((akumulasikan, item) => {
        if (akumulasikan[item.nama]) {
            const group = akumulasikan[item.nama];
            if (Array.isArray(group.mata_kuliah)) {
                group.mata_kuliah.push(item.mata_kuliah)
            } else {
                group.mata_kuliah = [group.mata_kuliah, item.mata_kuliah];
            }
        } else {
            akumulasikan[item.nama] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status': 200,
        'values': hasil,
    };

    res.json(data);
    res.end();
};