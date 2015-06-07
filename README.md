# Building Egret From Atom
A document about creating and building egret game project with Atom.

## Install dependencies
- Install **Atom** from [Atom.io](http://atom.io).
- Install **Egret** from [Egret labs](http://www.egret-labs.org).
- Install [atom-typescript](https://atom.io/packages/atom-typescript) plugin for Atom.(Autocomplete, Format code, Goto Declaration, Find Reference...Almost everything you need to play with typescript)
- Install **Node** from [Node.js](http://nodejs.org)

## Create egret project
- Create the egret project from command-line:`egret create HelloEgretFromAtom`.
- Enter the project folder:`cd HelloEgretFromAtom`, and initial the npm file:`npm init`, follow the guid to create a package.json file which holds the node packages informations.
- Install [grunt](http://gruntjs.com/), and some grunt plugins:`npm install grunt --save-dev`,`npm install grunt-contrib-watch --save-dev`,`npm install grunt-shell --save-dev`
- Open the "src/Main.ts" in Atom, the "atom-typescript" will fire some errors about missing "egret", so add the definition files into the "**tsconfig.json**":
```javascript
{
    //...
    "filesGlob": [
        "./**/*.ts",
        "../libs/core/**/*.d.ts",//JUST ADD THIS LINE TO FIND ALL DEFINITION FILES IN THE EGRET CORE.
        "!./node_modules/**/*.ts"
    ],
    //...
}
```
- Create the **gruntfile.js** at the root of the project:
```javascript
module.exports = function(grunt) {
  grunt.initConfig({
    shell: {
        options: {
            stderr: false
        },
        target: {
            command: 'egret build  -sourcemap'
        }
    },
    watch: {
      files: ['src/**/*.ts','src/**/*.exml'],
      tasks: ['shell']    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
}
```
- Input `cd [your/project/path]` and `grunt` in your terminal. Now "grunt" is "watching" every change you made to the souce files, and build the project automatically.
##Usaful plugins
- [atom-project-manager](https://github.com/danielbrodin/atom-project-manager): Managing your project.
- [atom-vim-mode](https://github.com/atom/vim-mode):Writing code with vim.
- [adobe-source-code-pro](https://github.com/adobe/source-code-pro):Best coding font.
