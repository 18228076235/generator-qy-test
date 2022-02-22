const Generator = require('yeoman-generator');
module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'your project name',
            default: this.appname
        }]).then(answers => {
            this.answers = answers
        })
    }
    whriting() {
        const templates = ['.babelrc', '.eslintrc.js', '环境安装.md', '加大课程提升服务的声明.md', 'bug修复.md', 'index.html']
        templates.forEach((item) => {
            this.fs.copyTpl(this.templatePath(item), this.destinationPath(item), this.answers)
        })
    }
}