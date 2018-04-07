$(document).ready(function(){
	
	//console.log($("[data-valtype]").);
	

	//Selects all fields on which validation is enabled
	var inputFields=document.querySelectorAll('[data-valtype]')
	//console.log(inputFields);
	
	//Add Change Listener to all fields with validation enabled
	for(i=0;i<inputFields.length;i++){
		console.log(inputFields[i]);
		console.log(($(inputFields[i]).attr("data-valtype")));
		
		$(inputFields[i]).change(function() {
			performValidation(this);
		});
		
		
		$(inputFields[i]).keyup(function() {
			performValidation(this);
		});
		
	}
});

function performValidation(field){
	
	var validationType=$(field).attr("data-valtype").toLowerCase();
	
	console.log(validationType);
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
	console.log(inputValue);

	var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	
	var validationResult=re.test(String(inputValue).toLowerCase());
	//var validationResult=re.test(inputValue);
	console.log("valid res="+validationResult);
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

	var re = /^[0-9]{1,2}-[0-9]{1,2}-([0-9]{2}|[0-9]{4})$/i;
	
	var validationResult=re.test(inputValue);

	modifyField(field,validationResult);
}






//DONOT MODIFY THIS
function modifyField(field,validationResult){
	if(validationResult==true){
		validationCorrectCase(field);
	}
	else{	
		validationIncorrectCase(field);
	}
}


//Feel free to modify these
function validationCorrectCase(field){
	$( field ).css( "border-color", "green" );
}

function validationIncorrectCase(field){
	$( field ).css( "border-color", "red" );
}