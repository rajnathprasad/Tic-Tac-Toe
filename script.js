let arr=["","","","","","","","",""]
let item="0";
let someOneWon = false;
function change(item){
    if (item==="X"){
        item="0";
    }
    else{
        item="X";
    }
    return item;
}
function reset(){
    someOneWon = false;
    arr=["","","","","","","","",""]
    for(let i=0;i<arr.length;i++){
        document.querySelector(`#putOn${i}`).innerText="";
    }
    item="0";
    resultDiv=document.querySelector(".resultDiv");
    // resultDiv.remove();
    try{
        resultDiv.remove();
    }
    catch(error){
        // do nothing
    }
    
}
function ifWon(item){
    if((arr[0]!="" && arr[1]!="" && arr[2]!="" && arr[0]=== arr[1] && arr[0]===arr[2]) ||
        (arr[0]!="" && arr[3]!="" && arr[6]!="" && arr[0]=== arr[3] && arr[0]===arr[6]) ||
        (arr[0]!="" && arr[4]!="" && arr[8]!="" && arr[0]=== arr[4] && arr[0]===arr[8]) ||
        (arr[1]!="" && arr[4]!="" && arr[7]!="" && arr[1]=== arr[4] && arr[1]===arr[7]) ||
        (arr[2]!="" && arr[4]!="" && arr[6]!="" && arr[2]=== arr[4] && arr[2]===arr[6]) ||
        (arr[2]!="" && arr[5]!="" && arr[8]!="" && arr[2]=== arr[5] && arr[2]===arr[8]) ||
        (arr[3]!="" && arr[4]!="" && arr[5]!="" && arr[3]=== arr[4] && arr[3]===arr[5]) ||
        (arr[6]!="" && arr[7]!="" && arr[8]!="" && arr[6]=== arr[7] && arr[6]===arr[8])){
            someOneWon = true;
            won(item);
            return true;
        }
}
function isFull(){
    let full=true;
    arr.forEach(function (i){
        if(i===""){
            full=false;
        }
    })
    return full;
}
function putItem(i){
    if(someOneWon===false && arr[i]===""){
        item = change(item);
        document.querySelector(`#putOn${i}`).innerText=item;
        arr[i]=item;
        if(!(ifWon(item)) && isFull()){
            tie();
        }
    }
}
function won(item){
    let resultDiv=document.createElement("div");
    resultDiv.className="resultDiv";
    resultDiv.innerText = `${item} Won!`;
    document.body.appendChild(resultDiv);
}
function tie(){
    let resultDiv=document.createElement("div");
    resultDiv.className="resultDiv";
    resultDiv.innerText = `Its a Tie!`;
    document.body.appendChild(resultDiv);
}
