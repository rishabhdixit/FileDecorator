var file = require('./WriteandLoad');

var id = file.save("this is the content for ninth file");

file.getFile(id,function(data){
    console.log(data);
});
