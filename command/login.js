exports.command = function(username, password){
  var browser = this.page.login();
  browser
    .navigate()
    .waitForElementVisible('body', 100, '頁面準備完成')
    .waitForElementVisible('@login_field_username', "登入頁載入完成")
    .setValue('@login_field_username', username)
    .setValue('@login_field_password', password)
    .click('@login_field_submit')
    .waitForElementVisible('@index_loginMail', 100, "首頁登入檢測")
  return this;
};
