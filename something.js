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