/**
 * @file banner.js
 * @since 3.5.2
*/

const path = require('path');
const webpack = require('webpack');
const datefns = require('date-fns');

const year = datefns.format(new Date(), 'YYYY');
const rootDir = path.resolve(__dirname, '..', '..');
const pckg = require(path.join(rootDir, 'package.json'));

// library banner with copyright and version info
let jsBanner = `${pckg.name}
@version ${pckg.version}
@see ${pckg.homepage}
@copyright 2014-${year} ${pckg.author}
@license ${pckg.license}`;
let libBanner = new webpack.BannerPlugin({
    banner: jsBanner,
    test: /\.js$/
});

// plugin banner with copyright and version info
let jsPluginBanner = `[name] plugin for ${pckg.name}
@version ${pckg.version}
@see ${pckg.homepage}
@copyright 2014-${year} ${pckg.author}
@license ${pckg.license}`;
let pluginBanner = new webpack.BannerPlugin({
    banner: jsPluginBanner,
    test: /\.js$/
});

module.exports = { libBanner, pluginBanner };