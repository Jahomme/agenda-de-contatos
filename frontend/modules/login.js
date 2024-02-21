import validator from 'validator';



export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);

  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }



  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');

    const errorMessages = el.querySelectorAll('.error-message');
    errorMessages.forEach((errorMessage) => errorMessage.remove());

    let error = false;



    if (!validator.isEmail(emailInput.value)) {
      this.createErrorMessage(emailInput, '* Email inválido');
      error = true;
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
      this.createErrorMessage(passwordInput, '* A senha deve conter entre 3 e 50 caracteres')
      error = true;
    }
    if (!error) el.submit();
  }

  createErrorMessage(inputElement, message) {
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.style.color = 'red';
    errorMessage.innerHTML = message;

    const parentElement = inputElement.parentNode;
    parentElement.insertBefore(errorMessage, inputElement.nextSibling);
  }

}