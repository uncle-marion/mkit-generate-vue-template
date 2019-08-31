# mkit-generate-vue-template

如果您正在开发一个 vue 项目，mkit 系列工具可以让您更容易开始项目，而不是从头创建文件。

If you are developing a vue project, the mkit suite of tools makes it easier to start the project rather than creating files from scratch.

#安装 INSTALL
``` bash
npm install -g mkit-vue-templates
```

安装完成以后，可以在命令行下使用 `mkit` 命令来新建一个模板文件。

After the installation, you can use the command 'mkit' to create a new template file from the command line.

``` bash
Usage: mkit [command] [options]

Options:
  -t, --type <type>      template type (optional)
  -r, --root <root>      the root path (optional) defaults:./client
  -v, --version          output the current version
  -h, --help             output usage information

Commands:
  generate|g <fileName>  quickly generate vue templates(short-cut alias: "g")

Examples:
  # use default, default root = client/page
  $ mkit g demo
  # change root
  $ mkit g -root=src/components demo
  # or
  $ mkit g -r src/components demo
```

fileName:
root: