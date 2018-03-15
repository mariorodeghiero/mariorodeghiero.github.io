var gulp = require("gulp"),
  imagemin = require("gulp-imagemin"), //npm install gulp-imagemin --save-dev
  clean = require("gulp-clean"), //npm install gulp-clean --save-dev
  concat = require("gulp-concat"), //npm install gulp-concat --save-dev
  htmlReplace = require("gulp-html-replace"), //npm install gulp-html-replace --save-dev
  usemin = require("gulp-usemin"), //npm install gulp-usemin --save-dev
  uglify = require("gulp-uglify"), //npm install gulp-uglify --save-dev
  cssmin = require("gulp-cssmin"), //npm install gulp-cssmin --save-dev
  browserSync = require("browser-sync"), //npm install browser-sync --save-dev
  jshint = require("gulp-jshint"), //npm install jshint gulp-jshint --save-dev
  jshintStylish = require("jshint-stylish"), //npm install --save-dev jshint-stylish
  csslint = require("gulp-csslint"), //npm install --save-dev gulp-csslint
  sass = require("gulp-sass"),
  babel = require("gulp-babel");

// tarefa para criar a pasta dist com todos arquivos
gulp.task("copy", ["clean"], function() {
  return gulp
    .src("src/**/*") // retorna uma stream dizendo que finalizou a tarefa "assincrona"
    .pipe(gulp.dest("dist"));
});

// tarefa para apagar
gulp.task("clean", function() {
  return gulp
    .src("dist") // retorna uma stream dizendo que finalizou a tarefa "assincrona"
    .pipe(clean());
});

// Tarefa para reduzir imagens
gulp.task("build-img", function() {
  return gulp
    .src("dist/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

// Tarefa que aplica o uglify e mimifica os arquivos css e js, onde apontados no arquivo html
gulp.task("usemin", function() {
  return gulp
    .src("dist/**/*.html")
    .pipe(
      usemin({
        js: [babel({ presets: ["env"] }), uglify()],
        css: [cssmin()]
      })
    )
    .pipe(gulp.dest("dist"));
});

//Tarefa para atualizar o browser
gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });

  gulp.watch("src/**/*").on("change", browserSync.reload);

  gulp.watch("src/js/**/*.js").on("change", function(event) {
    // verifica erros nos arquivos .js
    console.log("Linting " + event.path);
    gulp
      .src(event.path)
      .pipe(
        jshint({
          esversion: 6
        })
      )
      .pipe(jshint.reporter(jshintStylish));
  });

  gulp.watch("src/css/**/*.css").on("change", function(event) {
    gulp
      .src(event.path)
      .pipe(csslint())
      .pipe(csslint.formatter());
  });

  gulp.watch("src/sass/**/*").on("change", function(event) {
    return gulp
      .src(event.path)
      .pipe(
        sass().on("error", function(erro) {
          console.log("SASS, erro compilação: " + erro.filename);
          console.log(erro.message);
        })
      )
      .pipe(gulp.dest("src/css"));
  });
});

//Tarefa default
gulp.task("default", ["copy"], function() {
  gulp.start("build-img", "usemin");
});
