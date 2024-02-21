import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/login';
import Contato from './modules/contato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const contatoRegister = new Contato('.form-contato-register')

login.init();
cadastro.init();
contatoRegister.init();

// import './assets/css/style.css';