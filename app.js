const cta_text = document.querySelector(".cta-text");
const toggle_btn = document.querySelector(".toggle-btn");
const  circle = document.querySelector(".circle");
const amount = document.querySelector(".amount");
const range_inputs = document.querySelectorAll("input[type='range']");
var globalVar;
const discount = document.querySelector(".discount");

window.addEventListener("DOMContentLoaded", function(){
    cta_text.textContent = "0 PAGEVIEWS";
    amount.textContent = "$0.00";
});

window.addEventListener("resize", loadMedia);

function loadMedia(){
    if(window.innerWidth <= 767.9){
        discount.textContent = "-25%";
    }
    else {
        discount.textContent = "25% discount";
    }
}

toggle_btn.addEventListener("click", function(){
    circle.classList.toggle("toggle");
    toggle_btn.classList.toggle("toggle-color");
    setValues(globalVar);
});

range_inputs.forEach(function(item){
    item.addEventListener("input", function(){
        item.style.backgroundSize = item.value +"% 100%"
        setValues(item.value);
        globalVar = item.value;
    });

    item.addEventListener("mousedown", function(){
        item.style.setProperty('--cursor', 'grabbing');
        item.style.setProperty('--thumbBackground', 'hsl(174, 50%, 41%)');
    });

    item.addEventListener("mouseup", function(){
        item.style.setProperty('--cursor', 'pointer');
        item.style.setProperty('--thumbBackground', 'hsl(174, 86%, 45%)');
    });
});

function setValues(itemValue){
    if(circle.classList.contains("toggle")){
        if(itemValue==="0"){
            setString("0", "0")
        }
        else if(itemValue==="20"){
            setString("10","6");
        }
        else if(itemValue==="40"){
            setString("50","9");
        }
        else if(itemValue==="60"){
            setString("100","12");
        }
        else if(itemValue==="80"){
            setString("500","18");
        }
        else if(itemValue==="100"){
            setString("1","27");
        }
    }
    else if(!circle.classList.contains("toggle")){
        if(itemValue==="0"){
            setString("0", "0")
        }

        else if(itemValue==="20"){
            setString("10","8");
        }
        else if(itemValue==="40"){
            setString("50","12");
        }
        else if(itemValue==="60"){
            setString("100","16");
        }
        else if(itemValue==="80"){
            setString("500","24");
        }
        else if(itemValue==="100"){
            setString("1","36");
        }
    }
}

function setString(a,b){
    if(a==="1"){
        cta_text.textContent = `${a}M PAGEVIEWS`;
    }
    else if(a==="0"){
        cta_text.textContent = `${a} PAGEVIEWS`;
    }
    else {
        cta_text.textContent = `${a}K PAGEVIEWS`;
    }
    amount.textContent = `$${b}.00`;
}