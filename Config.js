exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    params: {
        //testUrl: 'http://www.globalsqa.com/angularJs-protractor/ConsumptionCalculator/'
        //testUrl: 'https://angularjs.org/'
        testUrl: 'https://material.angularjs.org/latest/demo/datepicker'
        //testUrl: 'https://material.angularjs.org/latest/demo/checkbox#'
        //testUrl:'https://material.angularjs.org/latest/demo/select'
    },
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['Spec.js'],
    jasmineNodeopts: {
        showColors: true
    }
};
