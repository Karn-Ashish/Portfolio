const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Switch to Light';
    } else {
        toggleButton.textContent = 'Switch to Dark';
    }
});






const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}
var forms = document.getElementsByTagName("form");
for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your custom form submission logic here
    // For example, you can use AJAX to submit the form without refreshing the page
  });
}