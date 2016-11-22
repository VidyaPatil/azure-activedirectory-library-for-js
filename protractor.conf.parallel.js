exports.config = {
    framework: 'jasmine',
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['tests/e2eTestsSpec.js'],

    'multiCapabilities': [
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Chrome',
        'browser_version': '48.0',
        'resolution': '1024x768'
    },
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'os': 'OS X',
        'os_version': 'Yosemite',
        'browserName': 'Safari',
        'browser_version': '8.0',
        'resolution': '1024x768',
        'browserstack.safari.enablePopups': true
    },
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Firefox',
        'browser_version': '47.0',
        'resolution': '1024x768'
    },
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'IE',
        'browser_version': '11.0',
        'resolution': '1024x768',
        'browserstack.ie.enablePopups': true
    },
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'Edge',
        'browser_version': '13.0',
        'resolution': '1024x768'
    },
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'browserName': 'android',
        'platform': 'ANDROID',
        'device': 'Samsung Galaxy S5'
    },
    {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'browserName': 'iPhone',
        'platform': 'MAC',
        'device': 'iPhone 5'
    }]
};