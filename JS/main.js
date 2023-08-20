


var tablinks = document.getElementsByClassName('tab-links');
var tabcontants = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-links");
    }
    for(let tabcontant of tabcontants){
        tabcontant.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}


// var sidemenu = document.getElementById("sidemenu");
// function openmenu(){
//     sidemenu.style.right = "0";
// }
// function closemenu(){
//     sidemenu.style.right = "-200px";
// }



const scriptURL = 'https://script.google.com/macros/s/AKfycbyDxGpi3dzbqd7-ey8ZPrv1ymT7C4pPrKgyg18Ia706fGibXj_MgDUgyy49niCut3w3xA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('hello',response);
        msg.innerHTML = "Messae Sent Successfully"
        setTimeout(function(){
        }, 2000)
    })
    form.reset()
    .catch(error => console.error('Error!', error.message))
})


