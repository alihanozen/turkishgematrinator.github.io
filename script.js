function calculate() {
	var alphabet = {
		'A': document.getElementById('A').value,
		'B': document.getElementById('B').value,
		'C': document.getElementById('C').value,
		'Ç': document.getElementById('Ç').value,
		'D': document.getElementById('D').value,
		'E': document.getElementById('E').value,
		'F': document.getElementById('F').value,
		'G': document.getElementById('G').value,
		'Ğ': document.getElementById('Ğ').value,
		'H': document.getElementById('H').value,
		'İ': document.getElementById('İ').value,
		'I': document.getElementById('I').value,
		'J': document.getElementById('J').value,
		'K': document.getElementById('K').value,
		'L': document.getElementById('L').value,
		'M': document.getElementById('M').value,
		'N': document.getElementById('N').value,
		'O': document.getElementById('O').value,
		'Ö': document.getElementById('Ö').value,
		'P': document.getElementById('P').value,
		'R': document.getElementById('R').value,
		'S': document.getElementById('S').value,
		'Ş': document.getElementById('Ş').value,
		'T': document.getElementById('T').value,
		'U': document.getElementById('U').value,
		'Ü': document.getElementById('Ü').value,
		'V': document.getElementById('V').value,
		'Y': document.getElementById('Y').value,
		'Z': document.getElementById('Z').value
	};

	var word = document.getElementById('word').value.toUpperCase();
	var sum = 0;
	var resultTable = document.getElementById("result-calculate");
	resultTable.innerHTML = "";

	for (var i = 0; i < word.length; i++) {
		var char = word.charAt(i);
		if (alphabet[char]) {
			var row = resultTable.insertRow();
			var charCell = row.insertCell();
			var numCell = row.insertCell();
			charCell.innerHTML = word[i];
			numCell.innerHTML = parseInt(alphabet[char]);
			sum += parseInt(alphabet[char]);
		}
	}

	document.getElementById('result').innerHTML = sum;
}

function convertUppercase() {
	var input = document.getElementById("word");
	var text = input.value;
	text = text.replace(/ı/g, "I").replace(/i/g, "İ");
	text = text.toUpperCase();
	input.value = text;
}

function convertTable_ordinal() {
	for (var char in turkishOrdinal_alphabet) {
		document.getElementById(char).value = turkishOrdinal_alphabet[char];
	}
}

function convertTable_ordinalReverse() {
	for (var char in turkishOrdinalReverse_alphabet) {
		document.getElementById(char).value = turkishOrdinalReverse_alphabet[char];
	}
}

function convertTable_reduction() {
	for (var char in turkishReduction_alphabet) {
		document.getElementById(char).value = turkishReduction_alphabet[char];
	}
}

function convertTable_reductionReverse() {
	for (var char in turkishReductionReverse_alphabet) {
		document.getElementById(char).value = turkishReductionReverse_alphabet[char];
	}
}

function convertTable_ordinal_v2() {
	for (var char in turkishOrdinalV2_alphabet) {
		document.getElementById(char).value = turkishOrdinalV2_alphabet[char];
	}
}

function convertTable_ordinalReverse_v2() {
	for (var char in turkishOrdinalV2Reverse_alphabet) {
		document.getElementById(char).value = turkishOrdinalV2Reverse_alphabet[char];
	}
}

function convertTable_sumerian() {
	for (var char in turkishSumerian_alphabet) {
		document.getElementById(char).value = turkishSumerian_alphabet[char];
	}
}

function convertTable_sumerian_reverse() {
	for (var char in turkishSumerianReverse_alphabet) {
		document.getElementById(char).value = turkishSumerianReverse_alphabet[char];
	}
}

function convertTable_satanic() {
	for (var char in turkishSatanic_alphabet) {
		document.getElementById(char).value = turkishSatanic_alphabet[char];
	}
}