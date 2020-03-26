## Webpack Terminologies

### MiniCssExtractPlugin
Extract CSS or JS modules into a separate file.
It creates a CSS file per JS file which contains CSS.
It supports On-Demand-Loading of CSS and SourceMaps.

### css-loader
Interprets @import and url() like import/require() and will resolve them, 
translates CSS into CommonJS

### postcss-loader
Modification of css using other package.

### sass-loader
Loads a Sass/SCSS file and compiles it to CSS.

### babel-loader
Transpiling JavaScript files using Babel and webpack.
Following are its preset. Add them in .babelrc file.
(preset is a set of plugins used to support particular language features.)

#### @babel/preset-env
For compiling modern Javascript down to ES5

#### @babel/preset-react
For compiling JSX and other stuff down to Javascript

### HtmlWebPackPlugin
Simplifies creation of HTML files to serve webpack bundles.
More useful when include a hash in the filename which changes every compilation

### output.publicPath
Used as url-prefix for ex. /assets/

### file-loader
Copy files to the build folder and insert links to them where they are included

### url-loader
Will encode entire file bytes content as base64 and insert base64-encoded content where they are included. So there is no separate file. Load faster.