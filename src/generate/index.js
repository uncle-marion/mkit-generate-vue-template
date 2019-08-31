
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const printHelp = require('./printHelp');

const {
  jsTemplate,
  lessTemplate,
  vueTemplate,
} = require('./template');

const resolve = (...file) => {
  return path.resolve('./', ...file);
};

function createFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', err => {
      if (err) {
        console.log(chalk.red(err.message));
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
}

function createDir(directory, next) {
  if (fs.existsSync(directory)) {
    next();
  } else {
    createDir(path.dirname(directory), () => {
      fs.mkdirSync(directory);
      next('done');
    });
  }
}

function createComponent(directory) {
  return new Promise((resolve, reject) => {
    createDir(directory, (result) => {
      resolve(result);
    });
  });
}

function createModule(name, root = './client/page') {
  const componentPath = resolve(root, name);
  const fileName = name.includes('/') ? name.split('/').pop() : name;
  const hasComponentExists = fs.existsSync(componentPath);
  if (root.indexOf('./') !== 0) {
    console.log(chalk.yellow('Unhandled promise rejection warning: '));
    console.log(chalk.red(`ERROR: permission denied, mkdir ${root}`));
    return printHelp();
  }
  if (hasComponentExists) {
    console.log(
      chalk.red('Sorry, The template name is already occupied. Please reenter it\n')
    );
    return;
  }
  console.log(
    chalk.gray('Generating files, Please wait...')
  );
  createComponent(componentPath).then(result => {
    createFile(resolve(componentPath, `${fileName}.vue`), vueTemplate(fileName));
    createFile(resolve(componentPath, `${fileName}.js`), jsTemplate(fileName));
    createFile(resolve(componentPath, `${fileName}.less`), lessTemplate(fileName));
    console.log(`FilePath: "${root}/${name}"`);
    console.log(chalk.green('The component generation complete.'));
  });
};

module.exports = createModule;