# notifications

###### Material-UI (core and icons) installation 
1. Install required dependencies:
```
npm install @material-ui/core @material-ui/icons css-loader style-loader file-loader --save-dev
```
2. Add configuration to `webpack.config.js`
```
rules: [
     ...
     {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
     },
     {
        test: /\.(png|jpg|jpeg|gif|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=assets/[name].[ext]'
     }
     ...
]
```
