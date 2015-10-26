var express = require('express'),
    app = express();

app.use('/scratch', express.static(__dirname + '/scratch'));

app.get('*', function (req, res) {
    res.sendfile('index.html');
});

app.listen(3333);
console.log('\n----------------------------------------\n' +
            ' Magic happns on http://localhost:3333/' +
            '\n----------------------------------------\n\n');