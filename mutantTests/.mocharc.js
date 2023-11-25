// 'use strict';
// const path = require('path');
// const glob = require('glob');

// // This is a JavaScript-based config file containing every Mocha option plus others.
// // If you need conditional logic, you might want to use this type of config,
// // e.g. set options via environment variables 'process.argv'.
// // Otherwise, JSON or YAML is recommended.
// // // "$schema": "https://json.schemastore.org/mocharc",

// const params = {};

// const setupCommandParams = () => {
//   process.argv.forEach((element) => {
//     if (element.startsWith('--') && element.indexOf('=') > -1) {
//       const tmp = element.split('=');
//       params[tmp[0]] = tmp[1];
//     }
//   });
// };

// setupCommandParams();

// // if (!params['--test-path'] && !params['--test-all']) {
// //   throw new Error(`'--test-path' or '--test-all' is missing.`);
// // }

// const testPath = params['--test-path'];
// const testAll = true
// const match = params['--match'];

// const specPathArray = glob.sync(
//   testAll ? (match ? match : './src/**/*.test.+(ts|js)') : path.join(testPath, '/**/*.test.+(ts|js)'),
//   {
//     nodir: true,
//     ignore: ['**/node_modules/**'],
//   },
// );

// module.exports = {
//   require: [],
//   extension: [ 'js'],
//   spec: specPathArray,
// };
