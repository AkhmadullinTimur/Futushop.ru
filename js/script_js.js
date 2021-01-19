'use strict'


let list_of_obj = [];   

btn1.addEventListener('click', function(){
    slides_wrapper.classList.add('show1');
    slides_wrapper.classList.remove('show2');
    slides_wrapper.classList.remove('show3');
});
btn2.addEventListener('click', function(){
    slides_wrapper.classList.remove('show1');
    slides_wrapper.classList.add('show2');
    slides_wrapper.classList.remove('show3');
});
btn3.addEventListener('click', function(){
    slides_wrapper.classList.remove('show1');
    slides_wrapper.classList.remove('show2');
    slides_wrapper.classList.add('show3');
});


window.addEventListener('scroll', function(){
    let dist = window.pageYOffset;
    if (dist >= 600){
      but.style.opacity = '1';
    }
    else{
      but.style.opacity = '0';
    }
    if (dist >= 90){
        mainnav.style.position = 'fixed';
        mainnav.style.top = '0px';
        mainnav.style.borderBottom = '3px solid black';        
        mainnav.style.zIndex = '3';
    } else{
        mainnav.style.position = 'relative';
        mainnav.style.borderBottom = '0px solid black';
    }
});


but.addEventListener('click', function(){
    let i = window.pageYOffset;
    let timerId = setInterval(function() {
        i-= 80;
        window.scrollTo(0, i);   
        if(i <= 0){
            clearInterval(timerId);
            window.scrollTo(0, 0);
        }
    }, 1000/75);
});


 let flag_dif = 0;
 let member = 0;
 let price = 0;
    shop_but.addEventListener('mouseover', function(){
    shop_list.style.display = 'unset';
    if (flag_dif){
        for(let i = member; i < list_of_obj.length; i++){
            let newOl = document.createElement('li');
            newOl.innerHTML = list_of_obj[i];
            shop_list.appendChild(newOl);
        }
        member += flag_dif;
        flag_dif = 0;
    }    
    });
 
shop_but.addEventListener('mouseout', function(){
    shop_list.style.display = 'none';
    shop_list.addEventListener('mouseover', function(){
        shop_list.style.display = 'unset';
    });
});
shop_list.addEventListener('mouseout', function(){
    shop_list.style.display = 'none';
});



add_first_card.addEventListener('click', function(){
    if (list_of_obj.length == 0){
        if(korzina_text.innerHTML == 'Ваша корзина пуста'){
            price += 30000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
        list_of_obj[0] = 'Робот-пылесос';
        flag_dif += 1;
    }
    else{
        let flag = 0
        for(let i = 0; i < list_of_obj.length; i++){
            if (list_of_obj[i] == 'Робот-пылесос'){
                flag = 1;
            }
        }
        if(!flag){
            list_of_obj[list_of_obj.length] = 'Робот-пылесос';
            flag_dif += 1;
            price += 30000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
    }
    console.log(list_of_obj);
});
add_second_card.addEventListener('click', function(){
    if (list_of_obj.length == 0){
        if(korzina_text.innerHTML == 'Ваша корзина пуста'){
            price += 13000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
        list_of_obj[0] = 'Игровой монитор';
        flag_dif += 1;
    }
    else{
        let flag = 0
        for(let i = 0; i < list_of_obj.length; i++){
            if (list_of_obj[i] == 'Игровой монитор'){
                flag = 1;
            }
        }
        if(!flag){
            list_of_obj[list_of_obj.length] = 'Игровой монитор';
            flag_dif += 1;
            price += 13000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
    }
    console.log(list_of_obj); 
});
add_third_card.addEventListener('click', function(){
    if (list_of_obj.length == 0){
        if(korzina_text.innerHTML == 'Ваша корзина пуста'){
            price += 7000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
        list_of_obj[0] = 'Беспроводной зарядник';
        flag_dif += 1;
    }
    else{
        let flag = 0
        for(let i = 0; i < list_of_obj.length; i++){
            if (list_of_obj[i] == 'Беспроводной зарядник'){
                flag = 1;
            }
        }
        if(!flag){
            list_of_obj[list_of_obj.length] = 'Беспроводной зарядник';
            flag_dif += 1;
            price += 7000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
    }
    console.log(list_of_obj.length); 
});
add_fourth_card.addEventListener('click', function(){
    if (list_of_obj.length == 0){
        if(korzina_text.innerHTML == 'Ваша корзина пуста'){
            price += 25000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
        list_of_obj[0] = 'Умные часы';
        flag_dif += 1;
    }
    else{
        let flag = 0
        for(let i = 0; i < list_of_obj.length; i++){
            if (list_of_obj[i] == 'Умные часы'){
                flag = 1;
            }
        }
        if(!flag){
            list_of_obj[list_of_obj.length] = 'Умные часы';
            flag_dif += 1;
            price += 25000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
    }
    console.log(list_of_obj.length); 
});
add_fivth_card.addEventListener('click', function(){
    if (list_of_obj.length == 0){
        if(korzina_text.innerHTML == 'Ваша корзина пуста'){
            price += 4000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
        list_of_obj[0] = 'Беспроводные наушники';
        flag_dif += 1;
    }
    else{
        let flag = 0
        for(let i = 0; i < list_of_obj.length; i++){
            if (list_of_obj[i] == 'Беспроводные наушники'){
                flag = 1;
            }
        }
        if(!flag){
            list_of_obj[list_of_obj.length] = 'Беспроводные наушники';
            flag_dif += 1;
            price += 4000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
    }
    console.log(list_of_obj.length); 
});
add_sixth_card.addEventListener('click', function(){
    if (list_of_obj.length == 0){
        if(korzina_text.innerHTML == 'Ваша корзина пуста'){
            price += 20000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
        list_of_obj[0] = 'Квадрокоптер';
        flag_dif += 1;
    }
    else{
        let flag = 0
        for(let i = 0; i < list_of_obj.length; i++){
            if (list_of_obj[i] == 'Квадрокоптер'){
                flag = 1;
            }
        }
        if(!flag){
            list_of_obj[list_of_obj.length] = 'Квадрокоптер';
            flag_dif += 1;
            price += 20000;
            korzina_text.innerHTML = 'Общая стоимость: ' + price + ' рублей.';
        }
    }
});

    let arr = list.children;
    let arr_2 = mainnav.children;
    let counter_for_h = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i].tagName == 'H2'){
      window.addEventListener('scroll', function(){
        let dis = arr[i].getBoundingClientRect();
        if (dis.top <= 300 && dis.top >= -600){
          arr_2[(i - 1)/2].style.color = 'Aquamarine';
        } else {
          arr_2[(i - 1)/2].style.color = 'white';
        }
      });
      }
    }