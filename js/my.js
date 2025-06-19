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

let codeCountry = 'af'

const isTestBTN = () => {
    if (!checkbox0.checked) return registerBtn1.classList.add('wf-btn--disabled')
    if (!checkbox1.checked) return registerBtn1.classList.add('wf-btn--disabled')
    if (!checkbox2.checked) return registerBtn1.classList.add('wf-btn--disabled')
    if (firstName.value.trim() === '') return registerBtn1.classList.add('wf-btn--disabled')
    if (lastName.value.trim() === '') return registerBtn1.classList.add('wf-btn--disabled')

    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email.value)) return registerBtn1.classList.add('wf-btn--disabled')

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
        codeCountry = l.getAttribute('data-country-code').toUpperCase();
        const code = l.querySelector('.iti__dial-code')
        iti__flag11.className = 'iti__flag ' + countryCode
        iti__flag11
        phonett1.value = code.textContent;
    }


    iti_0__country_listbox.classList.toggle('iti__hide')
    isTestBTN()
}



const apiLead = 'https://investpro.finance/api/margot';

registerBtn1.onclick = async (e) => {
    e.preventDefault();

    const leadData = {
        firstname: firstName.value.trim(),
        lastname: lastName.value.trim(),
        email: email.value.trim(),
        phone: phonett1.value.trim(),
        affiliation: "4",
        source: "google",
        country: codeCountry.toUpperCase() // ISO 3166 код страны
    };
    const token = "Yd6Pwey22bPXOybZhW98ub2ZI3KqBEB4xpvtUIVX"
    fetch('https://investpro.finance/api/margot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-AUTH-TOKEN': token,
            'Accept': 'application/json',

            // 'Authorization': 'Bearer YZ3xAVFA2EU2e9uDd4IuTufp0PV8WeSZ8gXVLdjs'
        },
        body: JSON.stringify(leadData)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Лид успешно отправлен:', data);
        })
        .catch(error => {
            console.error('Ошибка при отправке лида:', error);
        }).finally(() => {
            // https://quantumforger.com/7dnZJD?external_id={{fbclid}}&sub1=Yan&fbpx=PIXEL&placement={{placement}}&ad_name={{ad.name}}&adset_name={{adset.name}}
            window.location.href = 'https://thanks-en.zenstryde.store/'
        })


}