'use strict'




setTimeout(function(){
    document.body.style.overflowY = 'scroll';
    pre_loader.style.opacity = '0';
    pre_loader.style.zIndex = '-2';
}, 1200);

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


btn1_2.addEventListener('click', function(){
    slides_wrapper2.classList.add('show1');
    slides_wrapper2.classList.remove('show2');
    slides_wrapper2.classList.remove('show3');
    slides_wrapper2.classList.remove('show4');
});
btn2_2.addEventListener('click', function(){
    slides_wrapper2.classList.remove('show1');
    slides_wrapper2.classList.add('show2');
    slides_wrapper2.classList.remove('show3');
    slides_wrapper2.classList.remove('show4');
});
btn3_2.addEventListener('click', function(){
    slides_wrapper2.classList.remove('show1');
    slides_wrapper2.classList.remove('show2');
    slides_wrapper2.classList.add('show3');
    slides_wrapper2.classList.remove('show4');
});
btn4_2.addEventListener('click', function(){
    slides_wrapper2.classList.remove('show1');
    slides_wrapper2.classList.remove('show2');
    slides_wrapper2.classList.remove('show3');
    slides_wrapper2.classList.add('show4');
});


window.addEventListener('scroll', function(){
    let dist = window.pageYOffset;
    if (dist >= 600){
      but.style.opacity = '1';
      but.style.zIndex = '1';
    }
    else{
      but.style.opacity = '0';
      but.style.zIndex = '-1';
    }
    if (dist >= 90){
        mainnav.style.position = 'fixed';
        mainnav.style.top = '0px';     
        mainnav.style.zIndex = '3';
        let percentage = 0;
        percentage = dist / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
        indic.style.width = percentage + '%';
        indic.style.zIndex = '4';
    } else{
        mainnav.style.position = 'relative';
        mainnav.style.borderBottom = '0px solid black';
        indic.style.width = 0;
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

about.addEventListener('click', function(){
    let i = window.pageYOffset;
    let speed = 0;
    if (i >= 800){
        speed = -60;
    } else{
        speed = 60;
    }
    let timerId = setInterval(function() {
        i += speed;
        window.scrollTo(0, i);   
        if(i >= 800 & speed > 0){
            clearInterval(timerId);
            window.scrollTo(0, 800);
        }
        if(i <= 800 & speed < 0){
            clearInterval(timerId);
            window.scrollTo(0, 800);
        }
    }, 1000/75);
});

news.addEventListener('click', function(){
    let i = window.pageYOffset;
    let speed = 0;
    if (i >= 1940){
        speed = -60;
    } else{
        speed = 60;
    }
    let timerId = setInterval(function() {
        i += speed;
        window.scrollTo(0, i);   
        if(i >= 1940 & speed > 0){
            clearInterval(timerId);
            window.scrollTo(0, 1940);
        }
        if(i <= 1940 & speed < 0){
            clearInterval(timerId);
            window.scrollTo(0, 1940);
        }
    }, 1000/75);
});

katal.addEventListener('click', function(){
    let i = window.pageYOffset;
    let speed = 0;
    if (i >= 2700){
        speed = -60;
    } else{
        speed = 60;
    }
    let timerId = setInterval(function() {
        i += speed;
        window.scrollTo(0, i);   
        if(i >= 2700 & speed > 0){
            clearInterval(timerId);
            window.scrollTo(0, 2700);
        }
        if(i <= 2700 & speed < 0){
            clearInterval(timerId);
            window.scrollTo(0, 2700);
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


    let count_1 = 0;
        let count_1_1 = 0;
        let count_2 = 0;
        let count_2_2 = 0;
        let sign_1 = 4;
        let sign_1_1 = -1;
        let sign_2 = -4;
        let sign_2_2 = 1;
        function tik_1(){
            obj_1.style.left = document.body.scrollWidth/2.6 + count_1 + 'px';
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
            obj_2.style.left = document.body.scrollWidth/2.6 + count_2 + 'px';
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
       
        let count_of_clicks = 1;
        theme.addEventListener('click', function(){
            count_of_clicks++;
            if(count_of_clicks % 2 == 1)
                {gif_snow.style.backgroundImage = '';}
            else
                {gif_snow.style.backgroundImage = 'url(https://kalejdoskopphotoshopa.ru/wp-content/uploads/2012/12/snow12.gif)';}
        });
