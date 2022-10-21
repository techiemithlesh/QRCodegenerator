let qrBtnGen = document.querySelector('.qrgenerate_btn');
let userInput = document.querySelector('.user_input');
let qrCodeContainer = document.querySelector('.qr_code_container');


qrBtnGen.addEventListener('click', () => {
    if(userInput.value !=""){
        if(qrCodeContainer.childElementCount == 0) {
            generateQr(userInput);
        } else{
            qrCodeContainer.innerHTML = "";
            generateQr(userInput);
        }
    }else{
        console.log("not valid input");
    }
});

function generateQr (user_input) {
   var qrcode = new QRCode(document.querySelector('.qr_code_container'), {
    text: `${user_input.value}`,
    width: 120,
    height: 120,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
   })
   
   let downloadBtn = document.createElement("button");
   qrCodeContainer.appendChild(downloadBtn);
   downloadBtn.className="qrdownloader";
   let downloadLink = document.createElement('a');
   downloadLink.setAttribute('download', "qr_code_linq.png");
   downloadLink.innerText="Download";
   downloadBtn.appendChild(downloadLink);


   if(document.querySelector(".qr_code_container img").getAttribute("src") == null){
    setTimeout(() => {
        downloadLink.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }, 300);
 } 
    else {
    setTimeout(() => {
        downloadLink.setAttribute("href", `${document.querySelector(".qr_code_container img").getAttribute("src")}`);
    }, 300);
}
}