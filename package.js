Package.describe({
    name: 'cesarve:persistent-reactive-var',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Reactive-Persistent local storage',
    // URL to the Git repository containing the source code for this package.
    git: 'cesarve77/persistent-reactive-var',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.2');
    api.use('ecmascript');
    api.use('amplify@1.0.0', 'client')
    api.mainModule('client.js');
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('cesarve:persistent-reactive-var');
    api.mainModule('client.test.js');
});
