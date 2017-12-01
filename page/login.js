module.exports = {
    url: 'https://secure.newegg.com.tw/MyAccount/Login',
    elements:{
        page_content_load: '.wrapper',
        quickmenu_login_btn: '.quickMenu li:first-child a',


        //greetingCard
        greetingCard: '#greetingWords2',
        greetingCard_close_btn: '#greetingWords2 #close',

        //login page
        login_field_username: '#user',
        login_field_password: '#pass',
        login_field_submit: 'input.btn.btn-login',
        index_loginMail: '#loginEmail'
    }
};
