var registrationDom = {
    createRegistrationElements : function(){
        dom.delete_table_and_pagination();
        dom.delete_header();
        let registerContainer = document.createElement('div');
        registerContainer.setAttribute('class', 'register-container');
        registerContainer.setAttribute('id', 'register-container');
        document.body.appendChild(registerContainer);
        document.getElementById('register-container').innerHTML = 
            '<div class="form-group">'
                +'<label for="username">Username:</label>'
                +'<input type="text" class="form-control" id="username" placeholder="Enter username" name="username">'
            +'</div>'
            +'<div class="form-group">'
                +'<label for="password">Password:</label>'
                +'<input type="password" class="form-control" id="password" placeholder="Enter password" name="password">'
            +'</div>'
            +'<button  class="btn btn-primary">Register</button>' 
    }


}