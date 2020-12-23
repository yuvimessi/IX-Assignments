function validation() {

    var passwd = document.getElementById("passwd").value;
    var cpasswd = document.getElementById("cpasswd").value;

    
    if (passwd.length > 5) {


        if (passwd == cpasswd) {

            alert("You have been successfuly registered!!");
            location.reload();

        }

        else {
            
            document.getElementById("msg").innerHTML = "<p class='text-center text-danger'>Passwords doesn't match.</p>";
        }

    }
    else {
        document.getElementById("msg").innerHTML = "<p class='text-center text-danger'>Password length should be more than 5 characters.</p>";
    }
}