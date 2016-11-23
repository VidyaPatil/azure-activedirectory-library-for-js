exports.config = {
    framework: 'jasmine',
    'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    specs: ['tests/e2eTestsSpec.js'],
    capabilities: {
        'browserstack.user': 'tushargupta2',
        'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        'os': 'Windows',
        'os_version': '10',
        'browserName': 'IE',
        'browser_version': '11.0',
        'resolution': '1024x768',
        'browserstack.ie.enablePopups': true,
        'project': 'adalJs',
        'build': 'adalJsIE',
        'browserstack.debug': true,
        'browserstack.video': false
    },
}