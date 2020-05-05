var proc = require('child_process');

var result = function execute(cmd, callback) {
    var child = proc.exec(cmd, function (err, stdout, stderr) {
        if (err != null)
            return callback(new Error(err), null);
        else if (typeof (stderr) != "string")
            return callback(new Error(stderr), null);
        else
            return callback(null, stdout);
    });
}

exports.result = result;