// import { dirname, sep } from 'path';
// import { fileURLToPath } from 'url';
// import path from 'path';
// console.log(import.meta.url);
// console.log('sep>>>>', sep);
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// import { __ as 함수 } from './nodeutils.js';
// const { __dirname, __filename } = 함수(import.meta.url);
// export { __filename, __dirname };
// console.log(dirname('.../nodebasic');
// console.log(__dirname);
// console.log(__filename);
// console.log(global);
// console.log(global.xx);
// console.log(path.delimiter);
// console.log(path.isAbsolut);
// const filepath = path.join(__dirname, '/nodeutils.js');
// console.log(path.isAbsolute(filepath));
// console.log(path.parse(filepath));
// const x = path.format({
//   root: '/',
//   dir: '/Users/star/Desktop/js/nodebasic/nodebasic',
//   base: 'nodeutils.js',
//   ext: '.js',
//   name: 'nodeutils',
// });
// console.log(path.basename(x), path.parse(x));
// console.log(path.posix);

// import os from 'os';
// console.log(os.cpus().length);
// console.log(os.version());
// const m = 1024 * 1024;
// console.log(os.freemem() / m, '/', os.totalmem() / m);
// console.log(os.hostname());
// console.log(process.env);

// console.log('dirname>>>>', __dirname);
// console.log('filename>>>>', __filename);
import { __ } from './nodeutils.js';
const { __dirname, __filename } = __(import.meta.url);

console.log('dirname>>>', __dirname);
console.log('filename>>>', __filename);
console.log(import.meta.url);
