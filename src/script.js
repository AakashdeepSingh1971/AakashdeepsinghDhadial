console.log(' Its working ')
function validate() {
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");
  
    sendBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if(name.value == "" || email.value == "" || msg.value == ""){
        emptyerror();
      } else{
        sendmail(name.value, email.value, msg.value);
        success();
      }
    })
  }
  
  validate();
  
  function sendmail(name, mail, msg){
    emailjs.send("service_6ahjo7s","template_v0nbon9",{
        from_name:mail,
        to_name: name,
        message: msg,
        });
  
  }
  
  function emptyerror() {
    swal({
      title: "Oh no..",
      text: "Fields cannot be empty!",
      icon: "error",
    });
  }
  
  function success() {
    swal({
      title: "Email sent successfully",
      text: "We try to reply in 24 hours",
      icon: "success",
    });
  }
let theme = localStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('option clicked ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'src/style.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'src/blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'src/green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'src/purple.css'
    }

    localStorage.setItem('theme', mode)
}

document.getElementById("videos").disabled=true;


