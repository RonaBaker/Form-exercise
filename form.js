let input = document.querySelectorAll(".submition-form__input");

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("keypress", checkEnterEvent);
}

function checkEnterEvent(event) {
    if (event.keyCode === 13) { //Enter key pressed
           validateForm();
    }
}

function validateForm() {
    let name = document.querySelector("#name").value;
    let address = document.querySelector("#address").value;
    if (name.length <= 5 && address.length > 10) {
            document.querySelector("#nameError").innerHTML = "Name must be at least 6-characters long";
            document.querySelector("#addressError").innerHTML = "Address must be at most 10-characters long";
            return false;
    }
    else if (name.length <= 5) {
            document.querySelector("#nameError").innerHTML = "Name must be at least 6-characters long";
            document.querySelector("#addressError").innerHTML = "";

            return false;
    }
    else if (address.length > 10) {
          document.querySelector("#nameError").innerHTML = "";
           document.querySelector("#addressError").innerHTML = "Address must be at most 10-characters long";
           return false;
    }
    else {
            alert("Form was successfully submitted");
            document.querySelector("form").submit();
    }
}

