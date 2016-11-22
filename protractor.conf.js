exports.config = {
    framework: 'jasmine',
    //'seleniumAddress': 'http://hub-cloud.browserstack.com/wd/hub',
    'seleniumAddress': 'http://127.0.0.1:4444/wd/hub',
    'chromeDriver': 'C:\Program Files (x86)\chromedriver_win32',
    specs: ['tests/e2eTestsSpec.js'],
    capabilities: {
        //'os': 'Windows',
        //'os_version': '7',
        //'browserName': 'IE',
        'browserName': 'chrome',
        "loggingPrefs": { "browser": "ALL" },
        //'browser_version': '11.0',
        //'resolution': '1024x768', 
        //'browserstack.user': 'tushargupta2',
        //'browserstack.key': 'VdesCZspEKGJhZQZVDXH',
        //'browserstack.ie.enablePopups': true,
        //'browserstack.safari.enablePopups': true
    },
    //directConnect: true
}