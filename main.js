const username = document.getElementById("un"); //email
const password = document.getElementById("pw"); //password
const button = document.getElementById("button");
const form = document.getElementById("form");

//regex for email validation
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//changing styles of input fields
form.addEventListener("input", () => {
    if(password.value.length <= 6 || password.value.length >= 20)
    {
        password.id = "input_err";
    }
    else
    {
        password.id = "input";
    }
    if(password.value.length === 0)
    {
        password.id = "input";
    }

    if(username.value.match(re)) //if it matches the regex
    {
        username.id = "un";
    }
    else
    {
        username.id = "un_err";
    }

    if(username.value.length === 0)
    {
        username.id = "un";
    }
})

//displaying error messages
form.addEventListener("submit", (e) => {

    let messages = []; //we store all error messages in an array

    if(username.value === "" || username.value == null)
    {
        messages.push("E-mail is required!");
    }

    if(!username.value.match(re) && username.value !== "")
    {
        messages.push("Invalid E-mail adress!");
    }

    if(password.value.length === 0)
    {
        messages.push("Password is required!");
    }

    if(password.value.length <= 6 && password.value.length !== 0)
    {
        messages.push("Password must be longer than 6 characters!");
    }

    if(password.value.length >= 20)
    {
        messages.push("Password must be less than 20 characters!");
    }

    if(password.value === "password")
    {
        messages.push("The word 'password' can not be your password!");
    }

    if(messages.length > 0)
    {
        e.preventDefault();
        alert(messages.join(", ")); //if there is more than one error message, they are joined together
    }
});


