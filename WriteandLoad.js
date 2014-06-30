

var save = (function () {
    var fs = require('fs');
    return function save(data) {

        var id = "fileid-" + new Date().getTime();
        fs.writeFile("/home/rishabh/" + id, data, "utf8", function (err, data) {
            if (err)
                console.log("there is some error in writing to the file");
            else
                console.log("your content gets successfully written to the file");

        });

        return id;
    }
})();

var getFile = (function () {
    var fs = require('fs');

    return function getFile(id,callback) {
        console.log(id);

        fs.readFile("/home/rishabh/" + id, "utf8", function (err,data) {
            if (err)
                console.log("there is some error in reading from the file");
            //console.log(data);
            callback(data);

        });

    }
})();
module.exports.save = save;
module.exports.getFile = getFile;