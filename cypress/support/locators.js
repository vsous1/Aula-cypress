const locators = {
    SITE:'https://www.saucedemo.com/',
    LOGIN:{
        USUARIO_ELEM: '[data-test="username"]',
        SENHA_ELEM:        '[data-test="password"]',
        BUTT_ELEM: '[data-test="login-button"]'
    },
    
    USUARIO: 'standard_user',
    SENHA:   'secret_sauce',
    SENHA_INVALIDA: 'secret_suce',
    USUARIO_BLOQ: 'locked_out_user',
    TITULO:  '.title'
}
export default locators;
