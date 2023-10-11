console.log('working..')
let statement = document.getElementById('statement');
let result = document.getElementById('result');
let string = '';
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener('click',()=>{
        calc(btn);
    })
});

function calc(btn) {
    let val = btn.value;

    // let str = document.createElement('span');
    
    // 
    if( val !== 'clear' && val !== '='  ){
        string = string + val;
        statement.innerText = string;
        
    }
    else{
        
       if(val === '='){
           expr.innerText = '='
           if(string === ''){
               result.innerText = '0';
               
           }else{
               string = eval(string);
               result.innerText = string;
            }
        
           
        }
        if(val === 'clear'){
            string = '';
            statement.innerText = '0';
        }
        
    }


    
    if (string.length < 20) {
        statement.style.fontSize = "3rem";
    }
    else if(string.length > 20 && string.length < 30 ) {
        statement.style.fontSize = "2rem";
    }
    
    else if(string.length > 30 && string.length < 40 ) {
        statement.style.fontSize = "1rem";
    }
    let oprend = ['+','-','*','/']
    let str = string.slice(-2);
    if (str === '++' ||
        str === '--' ||
        str === '/' ||str === '*') {
        let newStr = string.slice(-1);
        // console.log(str, string)
        string = string.slice(0 , -1);
        // string = string + newStr;
        console.log(newStr)
    }
}
