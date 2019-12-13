(function(){

    var display = document.getElementById('calc-display');

    function calcInput(button){
        var number = button.value;
        display.value += number;  
    }

    function showResult(){
        var result = eval(display.value);
        display.value = result;
    }

    function clearCalc(){
        display.value = '';
    }


    document.addEventListener('input', function(event){

        if(!event.target.closest('.calc input')) return;

        if(display.value.match(/[^0-9]/)) display.value = '';

        display.style.border = "4px solid red";

    });

    document.addEventListener('click', function(event){

        if(!event.target.closest('.calc-numbers button')) return;

        var button = event.target;

        calcInput(button);

    });

    document.addEventListener('click', function(event){

        if(!event.target.closest('.calc-operators button')) return;

        var button = event.target;

        switch(button.value) {
            case '+' :
            case '-' :
            case '*' :
            case '/' :
                 calcInput(button);
                 break;

            case '=':
                showResult()    
                break;

            case 'clear':
                clearCalc()
                break;
        }

    });

})();


