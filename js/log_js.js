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

setTimeout(function(){
    document.body.style.overflowY = 'scroll';
    pre_loader.style.opacity = '0';
    pre_loader.style.zIndex = '-2';
}, 1200);

let count_1 = 0;
let count_1_1 = 0;
let count_2 = 0;
let count_2_2 = 0;
let sign_1 = 4;
let sign_1_1 = -1;
let sign_2 = -4;
let sign_2_2 = 1;
function tik_1(){
    obj_1.style.left = document.body.scrollWidth/2.2 + count_1 + 'px';
    obj_1.style.top = 400 - count_1_1/4 + 'px';
    obj_1.style.width = 150 + count_1_1 + 'px';
    obj_1.style.height = 150 + count_1_1 + 'px';
    count_1 += sign_1;
    count_1_1 += sign_1_1;
    if (count_1 >= 200){sign_1 = -4;
        obj_1.style.zIndex = '1';
        obj_2.style.zIndex = '2';}     
    if (count_1 <= -200){sign_1 = 4;
        obj_1.style.zIndex = '2';
        obj_2.style.zIndex = '1';}  
    if(count_1_1 >= 100){
        sign_1_1 = -2;
    }
    if (count_1_1 <= -100){
        sign_1_1 = 2;
    }

};
function tik_2(){
    obj_2.style.left = document.body.scrollWidth/2.2 + count_2 + 'px';
    obj_2.style.top = 400 - count_2_2/1.3 + 'px';
    obj_2.style.width = 150 + count_2_2 + 'px';
    obj_2.style.height = 150 + count_2_2 + 'px';
    count_2 += sign_2;
    count_2_2 += sign_2_2;
    if (count_2 >= 200){
        sign_2 = -4;}     
    if (count_2 <= -200){
        sign_2 = 4;}  
    if(count_2_2 >= 100){
        sign_2_2 = -2;
    }
    if (count_2_2 <= -100){
        sign_2_2 = 2;
    }
    
};
setInterval(function() {
    tik_1();
    tik_2();
}, 1000/120)
