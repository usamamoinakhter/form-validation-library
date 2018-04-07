
# Form Validation Library
Let's you perform form validation with just one line of code.

## Installation and Usage

### Step 1
Download our library & include it in  your project
```
<script src="dist/validation.js"></script>  
```
### Step 2
```
<input type="text" class="form-control" id="name" data-valtype="put validation type here" >
```

Replace the data-valtype attribute value by one of the validation types mentioned below

----------


#### Compatible Validation Types

| Type | 	data-valtype | 
|--|--|
|Names	 | name |
|Email Addresses	 | email |
|Numbers   |  number |
|Date	 | date |
|Password	 | password|
|Contact Number	 | contact|
|Month	 | month|
|Credit Card	 | creditcard|
----------

Or you can create your own validator by passing on your own regular expression to data-valtype **surrounded by |**.
For example

    <input type="text" class="form-control" id="contact" data-valtype="|^[0-9]{1,2}(-|\/)[0-9]{1,2}(-|\/)([0-9]{2}|[0-9]{4})$|"  >

The above code performs date validation.

### Step 3
```
//Do whatever you want to do when validation is successful
function validationCorrectCase(field){
	$( field ).css( "border-color", "green" );
}

//Do whatever you want to do when validation is unsuccessful
function validationIncorrectCase(field){
	$( field ).css( "border-color", "red" );
}
```
Modify this part in validation.js to modify the behavior on successful and unsuccessful validation.

 ### Step 4
 You are done.
 Deploy your amazing web application.


## How To Contribute?

> It is the ultimate luxury to combine passion and contribution. It's also a very clear path to happiness.   -Sheryl Sandberg  



1.  Fork the repository on GitHub
2.  Clone the project into your own machine
3.  Work on the forked project
    1.  Make your changes and additions
    2.  Add changes to [README.md](https://github.com/roundCubeLabs/form-validation-library/blob/master/README.md) if needed
4.  Commit changes to your own branch
5.  Push your work back up to your fork
6.  Submit a Pull request so that we can review your changes



##### Developed by **roundCube Labs**
Follow us on [facebook](https://www.facebook.com/roundCubeLabs).

Thank you :)
