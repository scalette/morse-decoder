const semver = require('semver');
const colors = require('colors/safe');

const { engines: { node: nodeVersion }} = require('./package');

if (!semver.satisfies(process.version, nodeVersion)) {
  process.emitWarning(
    colors.red(`
      For this task we are strictly recomend you to use node ${nodeVersion}.
      Now you are using node ${process.version}, if you are using any of features that not supported by node ${nodeVersion}, score won't be submitted
    `)
  );
}


// const { decode } = require('./src/index.js');
// const expr = "001010101000000000100011101111**********001110111100001111110000101011**********0010101010000000001000101110100010111110**********00000011110000000010";
// console.log(decode(expr))