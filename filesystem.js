var http = require('http')
var fs = require('fs')
http.createServer(function (req, res) {
    fs.readFile('contet.html', function (err, data) {
        res.writeHead(200, {
            'content-type': 'text/html'
        })
        res.write(data)
        res.end()
    })
}).listen(3000, () => console.log('Server Started...'))