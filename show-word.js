function showOrdinal() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishOrdinal_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishOrdinal_alphabet[char]);
		}
	}
}

function showOrdinalReverse() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishOrdinalReverse_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishOrdinalReverse_alphabet[char]);
		}
	}
}

function showOrdinalV2() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishOrdinalV2_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishOrdinalV2_alphabet[char]);
		}
	}
}

function showOrdinalReverseV2() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishOrdinalV2Reverse_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishOrdinalV2Reverse_alphabet[char]);
		}
	}
}

function showReduction() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishReduction_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishReduction_alphabet[char]);
		}
	}
}

function showReductionReverse() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishReductionReverse_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishReductionReverse_alphabet[char]);
		}
	}
}

function showSumerian() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishSumerian_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishSumerian_alphabet[char]);
		}
	}
}

function showSumerianReverse() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishSumerianReverse_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishSumerianReverse_alphabet[char]);
		}
	}
}

function showSatanic() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var resultTable = document.getElementById("result-gematrinator");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (turkishSatanic_alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(turkishSatanic_alphabet[char]);
		}
	}
}