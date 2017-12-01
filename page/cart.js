module.exports = {
    url: 'https://secure.newegg.com.tw/MyAccount/Login?ReturnUrl=%2fCart',
    elements:{
        index_cart_btn: '#headerCartBtn > a',

        //greetingCard
        greetingCard: '#greetingWords2',
        greetingCard_close_btn: '#greetingWords2 #close',

        //login page
        login_field_username: '#user',
        login_field_password: '#pass',
        login_field_submit: 'input.btn.btn-login',
        index_loginMail: '#loginEmail',

        //cart page
        cart_process_img: '.ShoppingProcess_step_1_IMG'
    }
};
