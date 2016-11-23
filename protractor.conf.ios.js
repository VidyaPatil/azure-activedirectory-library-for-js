exports.config = {
    framework: 'jasmine',
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['tests/e2eTestsSpec.js'],
    capabilities: {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'browserName': 'iPhone',
        'platform': 'MAC',
        'device': 'iPhone 5',
        'project': 'adalJs',
        'build': 'adalJsIOS'
    },
}