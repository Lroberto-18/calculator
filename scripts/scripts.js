function change_Num(num){
    let  symbol =['+','-','/','C','x','.']
    let screen = document.querySelector('#screen').innerHTML;
    let zero = document.getElementById('screen').innerText;
    if(num==symbol[3]){
        document.querySelector('#screen').innerText = 0;
    }else{
        if(zero.length==1 && zero=='0'){
            screen =''
        }
        if(symbol[4]==num){
            num = '*';
        }
        document.querySelector('#screen').innerHTML = screen + num;
    }
}
function equal(){
    let expression = document.querySelector('#screen').innerHTML;
    if(expression){
        document.querySelector('#screen').innerHTML = eval(expression);
    }
    document.querySelector('#screen_history').innerText = expression;
}