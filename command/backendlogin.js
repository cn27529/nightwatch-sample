exports.command = function(username, password){
  var browser = this.page.backend();
    browser
        .navigate()
        .click('@login_btn')
        .waitForElementVisible('@login_field_form', "進入後台登入頁")
        .setValue('@login_field_username', username)
        .setValue('@login_field_password', password)
        .click('@login_field_submit')
        .waitForElementVisible('@index_loginSuccess', "後台登入成功")

    return this;
};
