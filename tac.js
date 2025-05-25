let grids=document.querySelectorAll(".grids");
let turnSymbol=document.querySelector("#turnSymbol");
let mainContainer=document.querySelector("#mainContainer");
let outerText=document.querySelector("#outerText");
let button=document.querySelector("button");
let resultDisplay=document.querySelector("#resultDisplay");
let isGameOver=false;
let count=1; //if odd numbers mark x if even mark o

let resultDeclare=(result)=>{
    mainContainer.classList.add("disappear");
        outerText.classList.add("disappear");
        setTimeout(()=>{
            resultDisplay.innerText=result;
            resultDisplay.style.color="green";
            resultDisplay.style.fontSize="60px";
            button.style.visibility="visible";
        },1000);
}
let gameOverOrNot=()=>{
    if(count>=5){
    if(((grids[0].getAttribute("class")==="grids x")&&(grids[1].getAttribute("class")==="grids x")&&(grids[2].getAttribute("class")==="grids x"))
    ||((grids[3].getAttribute("class")==="grids x")&&(grids[4].getAttribute("class")==="grids x")&&(grids[5].getAttribute("class")==="grids x"))
    ||((grids[6].getAttribute("class")==="grids x")&&(grids[7].getAttribute("class")==="grids x")&&(grids[8].getAttribute("class")==="grids x"))
    ||((grids[0].getAttribute("class")==="grids x")&&(grids[3].getAttribute("class")==="grids x")&&(grids[6].getAttribute("class")==="grids x"))
    ||((grids[1].getAttribute("class")==="grids x")&&(grids[4].getAttribute("class")==="grids x")&&(grids[7].getAttribute("class")==="grids x"))
    ||((grids[2].getAttribute("class")==="grids x")&&(grids[5].getAttribute("class")==="grids x")&&(grids[8].getAttribute("class")==="grids x"))
    ||((grids[0].getAttribute("class")==="grids x")&&(grids[4].getAttribute("class")==="grids x")&&(grids[8].getAttribute("class")==="grids x"))
    ||((grids[2].getAttribute("class")==="grids x")&&(grids[4].getAttribute("class")==="grids x")&&(grids[6].getAttribute("class")==="grids x"))){
        isGameOver=true;
        resultDeclare("X Won");
    }
    if(((grids[0].getAttribute("class")==="grids O")&&(grids[1].getAttribute("class")==="grids O")&&(grids[2].getAttribute("class")==="grids O"))
        ||((grids[3].getAttribute("class")==="grids O")&&(grids[4].getAttribute("class")==="grids O")&&(grids[5].getAttribute("class")==="grids O"))
        ||((grids[6].getAttribute("class")==="grids O")&&(grids[7].getAttribute("class")==="grids O")&&(grids[8].getAttribute("class")==="grids O"))
        ||((grids[0].getAttribute("class")==="grids O")&&(grids[3].getAttribute("class")==="grids O")&&(grids[6].getAttribute("class")==="grids O"))
        ||((grids[1].getAttribute("class")==="grids O")&&(grids[4].getAttribute("class")==="grids O")&&(grids[7].getAttribute("class")==="grids O"))
        ||((grids[2].getAttribute("class")==="grids O")&&(grids[5].getAttribute("class")==="grids O")&&(grids[8].getAttribute("class")==="grids O"))
        ||((grids[0].getAttribute("class")==="grids O")&&(grids[4].getAttribute("class")==="grids O")&&(grids[8].getAttribute("class")==="grids O"))
        ||((grids[2].getAttribute("class")==="grids O")&&(grids[4].getAttribute("class")==="grids O")&&(grids[6].getAttribute("class")==="grids O"))){
            isGameOver=true;
            resultDeclare("O Won");
        } 
    }
}
let symbol=(event)=>{
    if(count%2!=0 && isGameOver==false){
        event.target.innerHTML='<i class="fa-solid fa-xmark"></i>';
        event.target.removeEventListener("click",symbol);
        event.target.classList.add("x");
        gameOverOrNot();
        if(isGameOver==false && count<9){
        turnSymbol.innerText="O";
        }
        count++;
    }
    else if(count%2==0 && isGameOver==false){
        event.target.innerText="O";
        event.target.removeEventListener("click",symbol);
        event.target.classList.add("O");
        gameOverOrNot();
        if(isGameOver==false && count<9){
        turnSymbol.innerHTML='<i class="fa-solid fa-xmark"></i>';
        }
        count++;
    }
}
let disappearing=()=>{
    if(count==10 && isGameOver==false){
        mainContainer.classList.add("disappear");
        outerText.classList.add("disappear");
        setTimeout(()=>{
            resultDisplay.innerText="No Body Won";
            button.style.visibility="visible";
        },1000);
    }
}
button.addEventListener("click",()=>{
    location.reload();
});
for(let i of grids){
    i.addEventListener("click",symbol);
    i.addEventListener("click",disappearing);
}