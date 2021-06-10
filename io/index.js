const glob = require('glob');

var files = glob.sync(__dirname + '/**/*');
console.log(files);

glob(__dirname + '/**/*', function(err, res) {
    console.log(res);
});