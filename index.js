const btnE1=document.querySelector(".btn");
const inputEl=document.getElementById("input");
const copyEl=document.querySelector(".copy")
const alertCONTAINER=document.querySelector(".alert-container")

btnE1.addEventListener("click",()=>{

    createPassword()
})

copyEl.addEventListener("click",()=>{
    copyPassword()

 if(inputEl.value){

     alertCONTAINER.classList.remove("active")
    
    setTimeout(()=>{
     alertCONTAINER.classList.add("active")
    
    },2000)
 }

})


function createPassword(){
const chars="#@%^&&^fsokldkshsj#@%$^bdkSBgskhigh@^%&IDHOISJKFBIUE@$!SGBbeub";
const passwordLength=14;
let password="";
for(let i=0;i<passwordLength;i++){
let randoom=Math.floor(Math.random()*chars.length);
let randomChar=chars.substring(randoom,randoom+1);
password=password+randomChar;
}
inputEl.value=password;
alertCONTAINER.innerText=password + " copied!";
}


function copyclip(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  }



function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
   copyclip(inputEl.value)
 

}



