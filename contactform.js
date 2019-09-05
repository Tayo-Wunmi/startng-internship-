
const name = document.getElementById("name")
const name = document.getElementById("email")
const name = document.getElementById("title")
const name = document.getElementById("user_m")
const form = document.getElementById("form")
const errorElement = documentElementById("error")


form.addEventListener('submit',(e) => {
    let message =[]
    if (name.value === "" || name.value == null) {
        message.push("Name is required")
    }

    if (name.value.lenght <= 4) {
        message.push("Name is too short")
    }

    if (email.value == ""){                                    
        message.push("Please enter a valid e-mail address.");
    } 

   if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0) {                
        message.push("Please enter a valid e-mail address."); 
   } 

    if (title.value === "") {
        message.push("Enter the title of your message")
    } 

    if (user_m.value.lenght <= 20) {
        message.push("Type more than 20 words....")
    }


    if (message.lenght > 0) {
        e.preventDefault() 
        errorElement.innerText = message.join(",")
    }

    
})

