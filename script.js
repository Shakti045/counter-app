let v=document.getElementById("value");

let arr=document.querySelectorAll("button");
for(let b=0;b<arr.length;b++){
    if(b!=1){
        arr[b].addEventListener("click",function(){
            update(arr[b].innerText);
        })
    }
}


let curr=0;
function update(x){
    if(x=="Increament by 1"){
        if(curr>=10){
            alert("greater then 10 not allowed");
        }else{
            curr++;
        v.innerText=curr;
        }
        
    }else if(x=="Decreament by 1"){
        if(curr<=0){
            alert("negative values not allowed");
        }else{
            curr--;
        v.innerText=curr;
        }
    }else{
        curr=0;
        v.innerText=curr;
    }
}
