const inputs = document.getElementsByTagName('input');

for(let input of inputs)
{
    input.addEventListener('input', e =>
    {
        let parent = e.target.parentElement;
        if(e.target.value == '')
        {
            e.target.setCustomValidity("This field is required!");
            e.target.classList.add('invalid');
            let errorMessage = document.createElement('p');
            errorMessage.textContent = "This field is required!";
            errorMessage.classList.add("error");
            if(parent.lastElementChild.className == 'error')
                parent.replaceChild(parent.lastElementChild, errorMessage);
            else
                parent.appendChild(errorMessage);
        }
        else
        {
            e.target.setCustomValidity('');
            if(parent.lastElementChild.className == 'error')
            {
                parent.removeChild(parent.lastElementChild);
            }
        }
    });
}

const confirmPassword = document.querySelector('#confirm-password');
const mainPassword = document.querySelector("#main-password");
let message = document.createElement('p');
message.textContent = "Passwords don't match!";
message.classList.add('error');
confirmPassword.addEventListener('input', e =>
{
    if(mainPassword.value != '' && (mainPassword.value == confirmPassword.value))
    {
        mainPassword.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    }
    else
    {
        mainPassword.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        mainPassword.setCustomValidity("Passwords don't match");
        confirmPassword.setCustomValidity("Passwords don't match");
        let parent = confirmPassword.parentElement;
        if(parent.lastElementChild.className == 'error')
            parent.replaceChild(parent.lastElementChild, message);
        else
            parent.appendChild(message);
    }
});

mainPassword.addEventListener('input', e =>
{
    if(confirmPassword.value != '' && (mainPassword.value == confirmPassword.value))
    {
        mainPassword.setCustomValidity('');
        confirmPassword.setCustomValidity('');
    }
    else
    {
        mainPassword.classList.add('invalid');
        confirmPassword.classList.add('invalid');
        mainPassword.setCustomValidity("Passwords don't match");
        confirmPassword.setCustomValidity("Passwords don't match");
        let parent = mainPassword.parentElement;
        if(parent.lastElementChild.className == 'error')
            parent.replaceChild(parent.lastElementChild, message);
        else
            parent.appendChild(message);
    }
});