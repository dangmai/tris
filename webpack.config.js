module.exports = {
 entry: './bin/tris_admin.ts',
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'awesome-typescript-loader',
       exclude: /node_modules/,
     },
     {
       enforce: "pre",
       test: /\.js$/,
       loader: "source-map-loader",
     }
   ]
 },
 resolve: {
   extensions: [".ts", ".tsx", ".js", ".json"],
 },
 output: {
   filename: 'bundle.js',
   path: __dirname + "/dist",
 },
 devtool: "source-map",
};