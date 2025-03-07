let input = document.querySelector("#input");
let btns = document.querySelectorAll("button");


let string="";
let arr = Array.from(btns);
// arr.forEach((btn)=>{
//     btn.addEventListener("click",(e)=>{
//         console.log(e.target.innerHTML);
//     })
// })

arr.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
       
        if(e.target.innerHTML==="="){
        try{
            string = eval(string);
            input.value=string;
        }
        catch(err){
         input.value="ERROR";
         string="";

        }
        }
        else if(e.target.innerHTML ==="AC"){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML ==="DEL"){
            string = string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string += e.target.innerHTML;
            input.value=string;
        }
     
    })
    
});