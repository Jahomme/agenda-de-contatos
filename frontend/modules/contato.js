import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nomeInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telInput = el.querySelector('input[name="telefone"]');

        const errorMessages = el.querySelectorAll('.error-message');
        errorMessages.forEach((errorMessage) => errorMessage.remove());

        let error = false;

        if (!nomeInput.value) {
            this.createErrorMessage(nomeInput, '* Nome é um campo obrigatório.');
            error = true;
        }

        if (!emailInput.value && !telInput.value) {
            this.createErrorMessage(telInput, '* Pelo menos um contato precisa ser enviado: Email ou Telefone.');
            error = true;
        }

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            error = true;
        }

        if (!error) {
            el.submit();
        }
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
