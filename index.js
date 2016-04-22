#!/usr/bin/env node

var WTTR_HOST = 'wttr.in';

var moment = require('moment');
var curl = require('./src/curl');
var pkg = require('./package.json');

var program = require('commander')
  .version(pkg.version)
  .usage('[location] [options]')
  .description('Console weather application for wttr.in.')
  .option('-M, --Moon [date]', 'see the phase of the Moon')
  // help message
  .on('--help', function(){
    console.log('  location:');
    console.log('');
    console.log('                           # default for current location');
    console.log('    paris                  # city name');
    console.log('    muc                    # airport code (3 letters)');
    console.log('    @stackoverflow.com     # domain name');
    console.log('    94107                  # area codes');
    console.log('');
  })
  .parse(process.argv);

// action
var curlPath = program.args[0] || '';
if (program.Moon) {
  curlPath = 'Moon@' + moment(program.date).format('YYYY-MMM-DD');
}
curl(WTTR_HOST, curlPath);
