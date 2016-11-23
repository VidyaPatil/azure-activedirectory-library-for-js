exports.config = {
    framework: 'jasmine',
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['tests/e2eTestsSpec.js'],
    capabilities: {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'browserName': 'android',
        'platform': 'ANDROID',
        'device': 'Samsung Galaxy S5',
        'project': 'adalJs',
        'build': 'adalJsAndroid'
    },
}