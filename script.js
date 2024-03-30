let imgbox = document.querySelector("#imgbox");
let qrImg = document.querySelector("#qrImg");
let qrText = document.querySelector("#qrText");
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    if(qrText.value.length > 0){
        fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${qrText.value}`)   
            .then(response => response.blob())
            .then( (blob) => {
                const imgURL = URL.createObjectURL(blob);
                qrImg.src = imgURL;
                qrImg.classList.add("show");
            })
            .catch((error) => console.error(error));
    }else{
        qrText.classList.add("error");
        setInterval(()=>{
            qrText.classList.remove("error");
        }, 1000);
    }
});

