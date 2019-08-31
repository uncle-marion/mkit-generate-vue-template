#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const package = require('../package');

const generate = require('../src/generate');
const printHelp = require('../src/generate/printHelp');

program
  .usage('[command] [options]')
  .option('-t, --type <type>', 'template type (optional)')
  .option('-r, --root <root>', 'the root path (optional) defaults:./client')
  .version(package.version, '-v, --version', 'output the current version')

program
  .command('generate <fileName>')
  .alias('g')
  .description('quickly generate vue templates(short-cut alias: "g")')
  .action(fileName => {
    if (!fileName) {
      console.log(
        chalk.red('\nERROR: You did not enter a file name. Refer to the example to enter a command\n')
      );
      return printHelp();
    }
    generate(fileName, program.root);
  })
  .on('--help', () => {
    printHelp();
  });

program
  .command('*')
  .action(function(env){
    console.log(chalk.red(`Error: not deploying "${env}"`));
  });

program.parse(process.argv);
