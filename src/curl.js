var http = require('http');

module.exports = function (host, path) {
  var req = http.request({
    host: host,
    path: path ? '/' + path : undefined,
    headers: {
      accept: '*/*',
      'user-agent': 'curl/7.43.0',
    },
  }, function (res) {
    var chunkStrig = '';
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      chunkStrig += chunk.toString();
    });
    res.on('end', function () {
      console.log(chunkStrig);
    });
  });

  req.on('error', function (e) {
    console.log('Problem with request: ' + e.message);
  });

  req.end();
};
