const errors = [];

export const validateForm = (formData) => {
    for (const [key, value] of Object.entries(formData)) {

        if (!value) {
            warning({ key, message: 'This field is required' });
        } else {
            resetNotice({ key });
        }

    }

    if (errors.length > 0) {
        return false;
    } else {
        return true;
    }

}

const warning = ({ key, message }) => {
    errors.push(key);
    const inputElement = document.querySelector(`[name="${key}"]`);
    const notice = document.createElement('span');
    notice.classList.add('notice', 'warning');
    notice.textContent = message;
    if (!inputElement.parentElement.querySelector('span.warning')) {
        inputElement.parentNode.appendChild(notice);
    }
}

const resetNotice = ({ key }) => {
    errors.splice(errors.indexOf(key));
    const inputElement = document.querySelector(`[name="${key}"]`);
    const notice = inputElement.parentElement.querySelector('span.notice');
    if (notice) {
        notice.remove();
    }
};

export default validateForm;