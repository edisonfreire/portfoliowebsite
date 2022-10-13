function recaptchaCallback() {
  const btnSubmit = document.getElementById("button");

  if (btnSubmit.classList.contains("none")) {
    btnSubmit.classList.toggle('button')
  }
}


const form = document.getElementById("contact-form");
const tag = document.getElementById('success-alert');
const tag2 = document.getElementById('failure-alert');
const button = document.querySelector('button');
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_zzuvhx8";
    const templateID = "template_dyuf6l8";

    // send the email here
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("SUCCESS!");
        tag.classList.toggle('success-alert');
        form.reset();
      },
      (error) => {
        console.log("FAILED...", error);
        alert("FAILED...", error);
        tag2.classList.toggle('failure-alert');
      }
    );
  });