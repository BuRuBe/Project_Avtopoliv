function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    var phone =  document.getElementById('email').value;
    if (phone == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } 
    
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();
  
    }