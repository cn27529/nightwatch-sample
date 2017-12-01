exports.command = function(username, password){
  var browser = this.page.cart();
  browser
    .navigate()
    .waitForElementVisible('@login_field_username', "進入登入頁", false)
    .setValue('@login_field_username', username)
    .setValue('@login_field_password', password)
    .click('@login_field_submit')
    .waitForElementVisible('@index_loginMail', "登入檢測")
    .click('@index_cart_btn')
    .waitForElementVisible('@cart_process_img', "進入購物車")
    
  return this;
};
