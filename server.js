var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(cors());

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

var routes = require('./server/config/routes')(app);

// app.use(express.static('src'));npm
app.use('/images', express.static(path.join(__dirname, 'src/app/media/images')));
app.use('/media', express.static(path.join(__dirname, 'src/app/media/videos')));

app.get('*', function(req, res) {
  res.redirect('/');
});

var PORT = 7780;

app.listen(PORT, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server started on localhost:' + PORT);
});