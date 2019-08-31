'use strict';

const chalk = require('chalk');

module.exports = () => {
  console.log('\nExamples:');
  console.log(chalk.gray('  # use default, default root = ./client/page'));
  console.log('  $ mkit g demo');
  console.log(chalk.gray('  # change root'));
  console.log('  $ mkit g -root=./src/components demo');
  console.log(chalk.gray('  # or'));
  console.log('  $ mkit g -r ./src/components demo');
}