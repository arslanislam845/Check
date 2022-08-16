const form = document.querySelector('form');
const pipeline = document.querySelector('#pipeline');
const project = document.querySelector('#project');
const bucket = document.querySelector('#bucket');
// const storage = document.querySelector('#storage');
// const credentials = document.querySelector('#credentials');
// const run_every = document.querySelector('#run_every');


// function showError(input, message) {
// 	const targetDiv = input.parentElement;
// 	targetDiv.className = 'form-control error';

// 	const small = input.nextElementSibling;
// 	small.innerText = message;
// }

// function showSuccess(input) {
// 	const targetDiv = input.parentElement;
// 	targetDiv.className = 'form-control success';
// }


// function isSpecialChar(input) {
// 	var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
// 	for (var i = 0; i < input.value.length; i++) {
// 		if (iChars.indexOf(input.value.charAt(i)) != -1) {
// 			showError(input, "Special characters are not allowed.");
// 		}
// 		else {
// 			showSuccess(input);
// 			// check the first letter ( - , _ , + )
// 			firstLetter(pipeline)
// 			firstLetter(project)
// 			firstLetter(bucket)
// 			// firstLetter(storage)
// 			// firstLetter(credentials)
// 			// firstLetter(run_every)
	
// 		}
// 	}


// }

// function firstLetter(input) {
// 	let start = input.value;
// 	if (start.charAt(0) === '_' || start.charAt(0) === '-' || start.charAt(0) === '+') {
// 		showError(input, 'First character must be a letter.');
// 		// showError(input, "Cannot start from ( - , _ , + ).");
// 	}
// 	else {
// 		showSuccess(input);
		

// 	// check the special characters
// 	isSpecialChar(pipeline)
// 	isSpecialChar(project)
// 	isSpecialChar(bucket)
// 	// isSpecialChar(storage)
// 	// isSpecialChar(credentials)
// 	// isSpecialChar(run_every)


		
// 	}
// }

// function checkLength(input, min) {

// 	if (input.value.length < min) {
// 		showError(input, 'Length must be at least 5 characters long.');
// 	} 
	
// 	else {
// 		showSuccess(input);
// 			// check the first letter ( - , _ , + )
// 			firstLetter(pipeline)
// 			firstLetter(project)
// 			firstLetter(bucket)
// 			// firstLetter(storage)
// 			// firstLetter(credentials)
// 			// firstLetter(run_every)
// 	}
// }




// form.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	// check the length of the input
// 	checkLength(pipeline, 5)
// 	checkLength(project, 5)
// 	checkLength(bucket, 5)
// 	// checkLength(storage, 5)
// 	// checkLength(credentials, 5)
// 	// checkLength(run_every, 5)
// });


function validation(value,e){
	e.preventDefault();
	// if (pipeline.value.length < 5) {
	// 	showError(pipeline, 'Length must be at least 5 characters long.');
	// } 
	

	console.log(value)

}