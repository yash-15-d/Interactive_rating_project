const rating=document.querySelectorAll('.btn');
let rate=null;
const submit=document.querySelector(".sbtn");


const active_state=document.querySelector(".active");
const submit_state=document.querySelector(".submit_section");


const rate_val=document.getElementById("rate");
rating.forEach((rate_us)=>{
    rate_us.addEventListener("click",(e)=>{
        const active=document.querySelector(".checked")
        if(active){
            active.classList.remove("checked")
        }
        const card=e.target;
        card.classList.add("checked");
        rate=e.target.innerText;
        
    })
})

submit.addEventListener("click",()=>{
    if(rate){
        rate_val.innerText = rate;
        active_state.classList.add("hidden");
        submit_state.classList.remove("hidden");
    }
})
