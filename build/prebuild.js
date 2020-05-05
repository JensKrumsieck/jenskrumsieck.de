var cmd = require('./cmd.js');

cmd.result("chn.sh", function (err, response) {
    if (!err)
        console.log(response);
    else
        console.log(err);
});