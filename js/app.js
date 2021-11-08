let matricMarksInput = document.getElementById('matricMarks');
let interMarksInput = document.getElementById('interMarks');
let resultDiv = document.getElementById('resultDiv');
let result = document.getElementById('result');

let yes = document.getElementById('yes');
let no = document.getElementById('no');


function calculateAggregate() {
	let matricMarks = parseInt(matricMarksInput.value);
	let interMarks = parseInt(interMarksInput.value);
	if(matricMarks >= 0 && matricMarks <= 1100 && matricMarks != "" &&
	interMarks >= 0 && interMarks <= 1100 && interMarks != "") {
		let percentage;
		if(yes.checked == true) {
			percentage = (((matricMarks / 4) + interMarks + 20) / 1375) * 100;
		} else {
			percentage = (((matricMarks / 4) + interMarks) / 1375) * 100;
		}
		resultDiv.classList.remove('d_none');
		result.innerHTML = `${percentage.toFixed(2)}%`
	} else {
		alert('Marks should be between 0 and 1100');
	}
}

let crossIcon = document.getElementById('crossIcon');
crossIcon.addEventListener('click', () => {
	resultDiv.classList.add('d_none');
	matricMarksInput.value = '';
	interMarksInput.value = '';
});