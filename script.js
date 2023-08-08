let turn="X";
let boxes=document.getElementsByClassName("box");
let arr=Array.from(boxes)
let check=(turn)=>{
    let win=[[0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]]
    win.forEach((e)=>{
        if(arr[e[0]].innerText!=="" && arr[e[0]].innerText===arr[e[1]].innerText && arr[e[0]].innerText===arr[e[2]].innerText){
            document.getElementById("win").innerText=`${turn}-WON`; 
            document.getElementById("turn").innerHTML="Match Ended";
            document.querySelector(".game").classList.add("none");
        }
    })

}
arr.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        e.preventDefault();
        if(box.innerText === ""){
            box.innerText=turn;
            check(turn);
            if(turn==="X"){ 
                turn="0";
            }
            else{
                turn="X";
            }
        }
        

        document.getElementById("X-0").textContent=turn;
    })
})

document.getElementById("reset").addEventListener("click",()=>{
    arr.forEach((e)=>{
        e.textContent=""
    })
    // document.getElementById("X-0").textContent="X";
    document.getElementById("win").innerText="";
    document.getElementById("turn").innerHTML=`Turn For <span id="X-0">X`;
    turn="X";
    document.querySelector(".game").classList.remove("none");
})

document.getElementsByClassName("down")[0].addEventListener("click",()=>{
    document.getElementsByClassName("drop")[0].style.height="100%";
    document.getElementsByClassName("down")[0].style.zindex="0";
    document.getElementsByClassName("down")[0].style.visibility="hidden";
    document.getElementsByClassName("up")[0].style.zindex="1";
    document.getElementsByClassName("up")[0].style.visibility="visible";

})
document.getElementsByClassName("up")[0].addEventListener("click",()=>{
    document.getElementsByClassName("drop")[0].style.height="0";
    document.getElementsByClassName("down")[0].style.zindex="1";
    document.getElementsByClassName("down")[0].style.visibility="visible";
    document.getElementsByClassName("up")[0].style.zindex="0";
    document.getElementsByClassName("up")[0].style.visibility="hidden";

})
