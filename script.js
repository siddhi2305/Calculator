let calculate = document.getElementById("calcField");
let buttons = document.querySelectorAll('button');
let btnArr = Array.from(buttons)//Array for buttons
let string = ""; // empty string to store and inputs and results

btnArr.forEach(btn =>{
   btn.addEventListener('click' , (e)=>{

    //Delete button function
    if(e.target.innerHTML == "Del"){
        string = string.substring(0,string.length-1);
        calculate.value = string;
    }
    //All clear button function
    else if(e.target.innerHTML == "AC"){
        string = "";
        calculate.value = string;
    }
    //Equal to button function
    else if(e.target.innerHTML == "="){
        string = eval(string);
        calculate.value = string;
    }
    //Square button function
    else if(e.target.innerHTML == "x<sup>2</sup>"){
        string = string *= string;
        calculate.value = string;
    }
    else{
    string += e.target.innerHTML;
    calculate.value = string;
   }
});

});
