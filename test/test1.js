var randomstring = require("randomstring");
var userConfig = {
    frontend_username: 'd@d.com',
    frontend_password: 'dd1234',
    backend_username: 'vs53',
    backend_password: 'vs53vs53'
};

var repositoryName = randomstring.generate({
  length: 12,
  charset: 'alphabetic'
});

module.exports = {
    'Newegg登入頁跳轉首頁': function(browser) {
        browser
        .resizeWindow(1360, 1044)
        .login(userConfig.frontend_username, userConfig.frontend_password)
        .end();
    },

    'Newegg購物車登入': function(browser) {
        browser
        .resizeWindow(1360, 1044)
        .cart(userConfig.frontend_username, userConfig.frontend_password)
        .end();
    },

    'Newegg後台登入': function(browser){
        browser
        .resizeWindow(1360, 1044)
        .backendlogin(userConfig.backend_username, userConfig.backend_password)
        .end();
    }






};
