import express from 'express';
import path from 'path';
import mongoose from 'mongoose';

// import api routes
import hashApi from './apiRoutes/hashApi';

// import for webpack
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';


let app = express();

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));
app.use(webpackHotMiddleware(compiler));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.get('/poop', (req, res) => {
    res.send("YOYO");
});

// for the api
app.use('/api',hashApi);

/* eslint-disable no-console */
mongoose.connect('mongodb://geekodour:geekz@ds029436.mlab.com:29436/newshub');


app.listen(5000);
