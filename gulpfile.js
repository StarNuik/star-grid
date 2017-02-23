const
    gulp = require("gulp"),
    gulpLess = require("gulp-less"),
    gulpCss = require("gulp-csso"),
    gulpRename = require("gulp-simple-rename"),
    del = require("del"),
    srcPath = "./less";


gulp.task("default", () => {
    console.log("Use 'gulp build' to build this project or 'gulp clean' to clean your old files.");
});

gulp.task("build", ["buildLess"]);

gulp.task("buildLess", () => {
    return gulp.src(srcPath + "/**/*.less")
        .pipe(gulpLess())
        .pipe(gulp.dest("./css"))
        .pipe(gulpCss())
        .pipe(gulpRename((name) => {
            return name.replace(/(css)$/, "min.css")
        }))
        .pipe(gulp.dest("./css"))
});

gulp.task("clean", () => {
    return del(["./css"]);
});
