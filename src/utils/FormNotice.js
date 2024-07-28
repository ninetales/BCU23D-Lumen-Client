const formNotice = ({ form, message, type }) => {
    const notice = document.createElement('span');
    notice.textContent = message;

    switch (type) {
        case 'warning':
            notice.classList.add('notice', 'warning');
            break;
        case 'success':
            notice.classList.add('notice', 'success');
            break;
        default:
            notice.classList.add('notice');
    }

    form.prepend(notice);

    setTimeout(() => {
        notice.remove();
    }, 3000);

};

export default formNotice;