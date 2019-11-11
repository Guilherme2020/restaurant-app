module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
   module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [ 
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                },
              
            },
            {
                test: /\.css$/i,
                
               
                use: ['style-loader','css-loader',],
            }
        ]
   }
}
