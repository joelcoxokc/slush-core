var inquirer = require('inquirer');
var Storage = require('../config/storage.js');

function Slushy(){
  this.prompt = inquirer.prompt;
  this.config = new Storage('Demo', './slush-y.json');
  console.log(this)
}


module.exports = function(gulp, inquirer, _, $, defaults, Storage){

  var slushy = new Slushy();
  slushy.config.set('helllo');
  console.log(slushy.config.get('helllo'));

  gulp.task('default', function (done){
    var prompts = [{
      name: 'appName',
      message: 'What is the name of your project?',
      default: defaults.appName
    }, {
      name: 'appDescription',
      message: 'What is the description?'
    }, {
      name: 'appVersion',
      message: 'What is the version of your project?',
      default: '0.1.0'
    }, {
      name: 'authorName',
      message: 'What is the author name?',
    }, {
      name: 'authorEmail',
      message: 'What is the author email?',
      default: defaults.authorEmail
    }, {
      name: 'userName',
      message: 'What is the github username?',
      default: defaults.userName
    }, {
      type: 'confirm',
      name: 'moveon',
      message: 'Continue?'
    }];
    //Ask
    inquirer.prompt(prompts,
      function (answers) {
        if (!answers.moveon) {
          return done();
        }
        answers.appNameSlug = _.slugify(answers.appName);

        var config = new Storage(answers.appName, './slush-y.json')
        config.set('my', 'Hello');
        // gulp.src(__dirname + '/../templates/**/*')
        //   .pipe($.template( answers ))
        //   .pipe($.rename(function (file) {
        //     if (file.basename[0] === '_') {
        //       file.basename = '.' + file.basename.slice(1);
        //     }
        //   }))
        //   .pipe($.conflict('./'))
        //   .pipe(gulp.dest('./'))
        //   .pipe($.install())
        //   .on('end', function () {
        //     done();
        //   });
      });
  })
}