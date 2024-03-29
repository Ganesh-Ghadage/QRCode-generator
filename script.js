let imgbox = document.querySelector("#imgbox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    if(qrText.value.length > 0){
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrText.value}`;
        qrImg.classList.add("show");
    }else{
        qrText.classList.add("error");
        setInterval(()=>{
            qrText.classList.remove("error");
        }, 1000);
    }
});

