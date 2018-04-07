/*Library Developed by roundCube Labs
	https://www.facebook.com/roundCubeLabs
	https://github.com/roundCubeLabs/form-validation-library
*/


$(document).ready(function(){

	//Selects all fields on which validation is enabled
	var inputFields=document.querySelectorAll('[data-valtype]')
	
	//Add Change Listener to all fields with validation enabled
	for(i=0;i<inputFields.length;i++){
		
		$(inputFields[i]).change(function() {
			performValidation(this);
		});
		
		
		$(inputFields[i]).keyup(function() {
			performValidation(this);
		});
		
	}
});

function performValidation(field){
	
	var validationType=$(field).attr("data-valtype");
	if(validationType == "name"){
		validateName(field);
	}
	else if(validationType == "email"){
		validateEmail(field);
	}
	else if(validationType == "number"){
		validateNumber(field);
	}
	else if(validationType == "date"){
		validateDate(field);
	}
	else if(validationType == "password"){
		validatePassword(field);
	}
	else if(validationType == "month"){
		validateMonth(field);
	}
	else if(validationType == "contact"){
		validateContactNumber(field);
	}
	else if(validationType == "website"){
		validateWebsite(field);
	}
	else if(validationType == "creditcard"){
		validateCreditCard(field);
	}
	
	else if(validationType.charAt(0)=='|' && (validationType.charAt(validationType.length-1)=='|')){
		validationType=validationType.substring(1, validationType.length-1);
		validateField(field,validationType);
		
	}
	
}

//Validates Name
function validateName(field){
	var inputValue=field.value;

	var re = /^[A-Za-z\s]{1,}[\.]{0,1}['A-Za-z\s]{0,}$/i;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
	
}


//Validates Email Address
function validateEmail(field){
	var inputValue=field.value;

	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	var validationResult=re.test(String(inputValue).toLowerCase());
	modifyField(field,validationResult);
	
}

//Validates only numbers
function validateNumber(field){
	var inputValue=field.value;

	var re = /^[0-9]+$/i;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}

//Validates dates
function validateDate(field){
	var inputValue=field.value;

	var re = /^[0-9]{1,2}(-|\/)[0-9]{1,2}(-|\/)([0-9]{2}|[0-9]{4})$/i;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}



//Validates password
    // at least one number, one lowercase and one uppercase letter
    // at least six characters
function validatePassword(field){
	var inputValue=field.value;

	var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}

//Validates Months
function validateMonth(field){
	var inputValue=field.value;
	

var re = /^(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|sept|september|oct|october|nov|november|dec|december)$/i;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}



//Validates website
function validateWebsite(field){
	var inputValue=field.value;

	var re = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}


//Validates Contact Number
function validateContactNumber(field){
	var inputValue=field.value;

	var re = /^[0-9][0-9-]*[0-9]$/i;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}


//Validates Credit Cards
function validateCreditCard(field){
	var inputValue=field.value;

	var re = /^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([-\s]?)\d{4}\1\d{4}\1\d{3,4}$/;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}







//Feel free to modify these

//Do whatever you want to do when validation is successful
function validationCorrectCase(field){
	$( field ).css( "border-color", "green" );
}

//Do whatever you want to do when validation is unsuccessful
function validationIncorrectCase(field){
	$( field ).css( "border-color", "red" );
}







//DONOT MODIFY PORTION BELOW THIS UNTIL AND UNLESS YOU KNOW WHAT YOU ARE DOING
function modifyField(field,validationResult){
	if(validationResult==true){
		validationCorrectCase(field);
	}
	else{	
		validationIncorrectCase(field);
	}
}

function validateField(field,regex){
	
	var inputValue=field.value;
	
	var re=new RegExp(regex);
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
	
	
}
