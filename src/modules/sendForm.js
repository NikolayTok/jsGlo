const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const inputName = form.querySelector('.form-name');
    const inputEmail = form.querySelector('.form-email');
    const inputPhone = form.querySelector('.form-phone')
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо, наш менеджер с вами свяжется!'

    const validate = (list) => {
        let success = true;

        if (/[^0-9()-]/.test(inputPhone.value)) {
            success = false;
        }
        if (/[^а-я ]/g.test(inputName.value)) {
            success = false;
        }
        if (/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(inputEmail.value)) {
            success = false;
        }

        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "multipart/form-data"
            }
        }).then(response => response.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val
        });

        someElem.forEach((elem) => {
            const element = document.getElementById(elem.id);

            console.log(element)
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            formElements.forEach(input => {
                input.value = ''
            })
            statusBlock.textContent = 'данныe не валидны!!!';
        }
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста!!!!!')
        }
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            submitForm();
        })
    } catch (error) {
        consol.log(error.message)
    }

};

export default sendForm;