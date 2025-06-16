const iti_0__country_listbox = document.querySelector('#iti-0__country-listbox');
const iti__flagcontainer1 = document.querySelector('#iti__flag-container1');
const iti__flag11 = document.querySelector('#iti__flag11');
const registerBtn1 = document.querySelector('#registerBtn1');

const checkbox0path = document.querySelector('#checkbox-0-path')
const checkbox1path = document.querySelector('#checkbox-1-path')
const checkbox2path = document.querySelector('#checkbox-2-path')

const checkbox0 = document.querySelector('#checkbox-0')
const checkbox1 = document.querySelector('#checkbox-1')
const checkbox2 = document.querySelector('#checkbox-2')

const phonett1 = document.querySelector('#phone-tt-1');
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email1')


const isTestBTN = () => {
    if (checkbox0path.checked) return registerBtn1.classList.add('wf-btn--disabled')
    if (checkbox1path.checked) return registerBtn1.classList.add('wf-btn--disabled')
    if (checkbox2path.checked) return registerBtn1.classList.add('wf-btn--disabled')
    if (firstName.value.trim() === '') return registerBtn1.classList.add('wf-btn--disabled')
    if (lastName.value.trim() === '') return registerBtn1.classList.add('wf-btn--disabled')

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!re.test(email.value)) return registerBtn1.classList.add('wf-btn--disabled')

    if (phonett1.value.trim().length <= 8) return registerBtn1.classList.add('wf-btn--disabled')


    registerBtn1.classList.remove('wf-btn--disabled')
    isTestBTN()
}

phonett1.oninput = isTestBTN;
lastName.oninput = isTestBTN;
firstName.oninput = isTestBTN;
email.oninput = isTestBTN;

const changeCheckbox = (e) => {
    const is = e.target.checked;
    checkbox0path.setAttribute("d", is
        ? "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        : "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
    );
    isTestBTN()

}

checkbox0.onchange = changeCheckbox
checkbox1.onchange = (e) => {
    const is = e.target.checked;
    checkbox1path.setAttribute("d", is
        ? "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        : "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
    );
    isTestBTN()

}
checkbox2.onchange = (e) => {
    const is = e.target.checked;
    checkbox2path.setAttribute("d", is
        ? "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
        : "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
    );
    isTestBTN()

}


// -----------------

iti__flagcontainer1.onclick = (e) => {
    const t = e.target;
    const l = t.closest('.iti__country.iti__standard')
    if (l) {
        const countryCode = 'iti__' + l.getAttribute('data-country-code');
        const code = l.querySelector('.iti__dial-code')
        iti__flag11.className = 'iti__flag ' + countryCode
        iti__flag11
        phonett1.value = code.textContent;
    }


    iti_0__country_listbox.classList.toggle('iti__hide')
    isTestBTN()
}




registerBtn1.onclick = (e) => {
    e.preventDefault()
    window.location.href = 'https://thanks-en.zenstryde.store/'
}