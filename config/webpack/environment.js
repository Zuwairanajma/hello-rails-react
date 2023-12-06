const { environment } = require('@rails/webpacker')
const webpack = require('webpack');

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default'],
  })
);

// Add the following lines to set a valid 'node' property
environment.config.set('node', {
  global: false,
  fs: 'empty',
  net: 'empty',
  child_process: 'empty',
});

module.exports = environment
