'use strict'

let nam = '';
let phone_num = ''; 
but.addEventListener('click', function(){
    let arr = userNameField.value.split(' ');
    let s = ' ';
    let f = ' ';
    for (let i = 0; i < userNameField.value.length; i++){
        if(userNameField.value[i] == ' ' & s != ' '){
            f = userNameField.value[i + 1];
        }
        if(userNameField.value[i] == ' ' & s == ' '){
            s = userNameField.value[i + 1];
        }
    }
    nam = arr[0] + ' ' + s + '. ' + f + '.';
    phone_num = userPhoneNumber.value;
    registration.style.display = 'none';
    let newForm = document.createElement('div');
    newForm.classList = 'log_form';
    newForm.id = 'user_form';
    main_body.appendChild(newForm);
    newForm.style.width = '450px';
    let newP = document.createElement('p');
    newP.innerHTML = 'Уважаемый, ' + nam;
    user_form.appendChild(newP);
    newP = document.createElement('p');
    newP.innerHTML = 'Наши специалисты уже получили Вашу заявку и свяжутся с Вами в ближайшее время по телефону ' + phone_num + '.';
    user_form.appendChild(newP);
    newP = document.createElement('p');
    newP.innerHTML = 'Спасибо за обращение!';
    user_form.appendChild(newP);
});