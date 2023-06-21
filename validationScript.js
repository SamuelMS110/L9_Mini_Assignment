  // JavaScript code for form validation
	

          
      // Grabs form 
      let myForm =  document.getElementById("myForm");

      // Add event listener to the form
      myForm.addEventListener("submit",function(event){


      // Retrieve the input field value
      let user_input = document.getElementById("inputField").value;
      let regEX = /^[a-zA-Z0-9]+$/;

      // Invalid input: display error message
      // Prevent form from submitting
      if(!user_input.match(regEX)){
        alert("ALPHANUMERIC VALUES ONLY!");
        event.preventDefault();

      }
      // Valid input: display confirmation and submit the form
      else{
        confirm("Valid Input, Thanks!");
        
      }      
                
      });

        
