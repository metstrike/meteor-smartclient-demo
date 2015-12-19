Package.describe({
  name: 'metstrike:meteor-smartclient-demo',
  version: '10.1.0',
  // Brief, one-line summary of the package.
  summary: 'Demo of Smartclient library integrated with Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/metstrike/meteor-smartclient-demo.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('templating', 'client');  
  api.use('metstrike:meteor-smartclient', 'client');

  api.addFiles('lib/client/templates/meteor-smartclient-demo.html', 'client');
  api.addFiles('lib/client/templates/meteor-smartclient-demo.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('metstrike:meteor-smartclient-demo');
  api.addFiles('tests/meteor-smartclient-demo-tests.js');
});
