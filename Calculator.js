var number = document.querySelectorAll("[class~=keyword-number]");
var inputScreen = document.querySelector("[id=result]");

var allClear = document.querySelector("[class~=keyword-reset]");
var percentage = document.querySelector("[class~=keyword-percentage]");
var comma = document.querySelector("[class~=keyword-comma]");
var plus = document.querySelector("[class~=keyword-plus]");
var minus = document.querySelector("[class~=keyword-minus]");
var equal = document.querySelector("[class~=keyword-equal]");
var x = document.querySelector("[class~=keyword-multiplication]");
var divide = document.querySelector("[class~=keyword-divide]");

allClear.addEventListener("click", function() {
    inputScreen.value = "";
    comma.value = ".";
}); 

percentage.addEventListener("click", function () {
    if (inputScreen.value == "") {
        inputScreen.value = "";
    } else {
        inputScreen.value = inputScreen.value / "100";
    }
});

for (let i = 0; i < number.length; i++) {
    number[i].value = number[i].innerText;  
}

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
        if (inputScreen.value == "") {
            number[9].value = "";
        } else {
            number[9].value = "0";
        }

        inputScreen.value = inputScreen.value + number[i].value;
    });
    
}

comma.value = ".";

comma.addEventListener("click", function() {
    if (inputScreen.value == "") {
        inputScreen.value = "0" + comma.value + inputScreen.value;
    } else {
        inputScreen.value = inputScreen.value + comma.value;
    }
    comma.value = "";
});

plus.value = "+";

condPlus = true;

plus.addEventListener("click", function() {
    if (inputScreen.value && condPlus == true) {
        inputScreen.value = inputScreen.value + plus.value;
        condPlus = false;
    } else if (condPlus == false && inputScreen.value.endsWith("+") != true && inputScreen.value.endsWith("-") != true) {
        condPlus = true;
        inputScreen.value = eval(inputScreen.value);
    }
});

minus.value = "-";

minus.addEventListener("click", function() {
    if (inputScreen.value && condPlus == true) {
        inputScreen.value = inputScreen.value + minus.value;
        condPlus = false;
    } else if (condPlus == false && inputScreen.value.endsWith("-") != true && inputScreen.value.endsWith("+") != true) {
        condPlus = true;
        inputScreen.value = eval(inputScreen.value);
    } else if (inputScreen.value == "" && condPlus == true) {
        inputScreen.value = inputScreen.value + minus.value;
        condPlus = false;
    }
});

equal.value = "=";

equal.addEventListener("click", function() {
    inputScreen.value = eval(inputScreen.value);
});

x.value = "*";

x.addEventListener("click", function() {
    if (inputScreen.value && condPlus == true) {
        inputScreen.value = inputScreen.value + x.value;
        condPlus = false;
    } else if (condPlus == false && inputScreen.value.endsWith("+") != true && inputScreen.value.endsWith("-") != true && 
    inputScreen.value.endsWith("*") != true) {
        condPlus = true;
        inputScreen.value = eval(inputScreen.value);
    }
});

divide.value = "/";

divide.addEventListener("click", function() {
    if (inputScreen.value && condPlus == true) {
        inputScreen.value = inputScreen.value + divide.value;
        condPlus = false;
    } else if (condPlus == false && inputScreen.value.endsWith("+") != true && inputScreen.value.endsWith("-") != true && 
    inputScreen.value.endsWith("*") != true && inputScreen.value.endsWith("/") != true) {
        condPlus = true;
        inputScreen.value = eval(inputScreen.value);
    }
});
