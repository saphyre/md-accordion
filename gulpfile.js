var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache'),
    merge = require('merge-stream'),
    wiredep = require('wiredep'),
    templateCacheConfig;

templateCacheConfig = {
    standalone : true,
    module : 'saphyre.tpls'
};

function logError(err) {
    'use strict';
    console.log('[ERROR]: ' + err.message, err.lineNumber);
}


gulp.task('vendor', () => {
    'use strict';

    var vendor = wiredep();

    gulp.src(vendor.js)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));

    gulp.src(vendor.css)
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCss({ compatibility : 'ie8' }))
        .pipe(gulp.dest('./dist'));

});

gulp.task('script', () => {
    'use strict';

    gulp.src(['src/**/*.module.js', 'src/**/*.js', '!src/**/*.spec.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('saphyre-md-accordion.js'))
        .pipe(uglify())
        .on('error', logError)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('style', () => {
    'use strict';

    gulp.src(['src/**/*.sass'])
        .pipe(sourcemaps.init())
            .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
            .pipe(concat('saphyre-md-accordion.css'))
            .pipe(minifyCss({ compatibility : 'ie8' }))
            .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    'use strict';
    gulp.watch(['src/**/*.js', 'src/**/*.html'], ['script']);
    gulp.watch('src/**/*.sass', ['style']);
});

gulp.task('default', ['vendor', 'script', 'style']);