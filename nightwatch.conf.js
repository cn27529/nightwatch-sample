var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');
var geckoDriver = require('geckodriver');
var phantomjs = require('phantomjs-prebuilt');

var config = {
    "src_folders": ["test"],
    "custom_commands_path": "command",
    "page_objects_path": "page",

    "selenium": {
        "start_process": true,
        "server_path": selenium.path,
        "host" : "127.0.0.1",
        "port" : 4444,
        "cli_args": {
          "webdriver.chrome.driver": chromeDriver.path,
          "webdriver.gecko.driver": geckoDriver.path,
          "webdriver.firefox.profile": "nightwatch"
        }
    },

    "test_settings": {
        "default": {
            "launch_url": "http://localhost",
            "selenium_port": 4444,
            "selenium_host": "localhost",
            "silent": true,
            "globals": {
                "waitForConditionTimeout": 30000
            },
            "desiredCapabilities": {
                "browserName": "chrome",
                "marionette": true,
                "javascriptEnabled": true
            }
        },

        "phantomjs": {
          "desiredCapabilities": {
            "browserName" : "phantomjs",
            "phantomjs.binary.path" : phantomjs.path,
            "javascriptEnabled" : true,
            "acceptSslCerts" : true,
            "phantomjs.cli.args" : ["--ignore-ssl-errors=true", "--web-security=false"]
          }
        },

        // your local Chrome browser (chromedriver)
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },

        "firefox" : {
            "desiredCapabilities": {
                "browserName": "firefox",
                "javascriptEnabled": true,
                "acceptSslCerts": true,
                marionette: true
            }
        }

        // "ie11": {
        //   "desiredCapabilities": {
        //     "browserName": "internet explorer",
        //     "platform": "Windows 10",
        //     "version": "11.0"
        //   }
        // },
        //
        // "firefox" : {
        //   "desiredCapabilities": {
        //     "platform": "XP",
        //     "browserName": "firefox",
        //     "version": "33"
        //   }
        // },
        //
        // "internet_explorer_10" : {
        //   "desiredCapabilities": {
        //     "platform": "Windows 7",
        //     "browserName": "internet explorer",
        //     "version": "10"
        //   }
        // }

    }
}

module.exports = config;
