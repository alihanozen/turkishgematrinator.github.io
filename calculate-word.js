function calculateOrdinal() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishOrdinal_alphabet[char]) {
			result += turkishOrdinal_alphabet[char];
		}
	}
	document.getElementById('result-ordinal').innerHTML = result;
}

function calculateOrdinalReverse() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishOrdinalReverse_alphabet[char]) {
			result += turkishOrdinalReverse_alphabet[char];
		}
	}
	document.getElementById('result-ordinal-reverse').innerHTML = result;
}

function calculateOrdinalV2() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishOrdinalV2_alphabet[char]) {
			result += turkishOrdinalV2_alphabet[char];
		}
	}
	document.getElementById('result-ordinal-v2').innerHTML = result;
}

function calculateOrdinalReverseV2() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishOrdinalV2Reverse_alphabet[char]) {
			result += turkishOrdinalV2Reverse_alphabet[char];
		}
	}
	document.getElementById('result-ordinal-v2-reverse').innerHTML = result;
}

function calculateReduction() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishReduction_alphabet[char]) {
			result += turkishReduction_alphabet[char];
		}
	}
	document.getElementById('result-reduction').innerHTML = result;
}

function calculateReductionReverse() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishReductionReverse_alphabet[char]) {
			result += turkishReductionReverse_alphabet[char];
		}
	}
	document.getElementById('result-reduction-reverse').innerHTML = result;
}

function calculateSumerian() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishSumerian_alphabet[char]) {
			result += turkishSumerian_alphabet[char];
		}
	}
	document.getElementById('result-sumerian').innerHTML = result;
}

function calculateSumerianReverse() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishSumerianReverse_alphabet[char]) {
			result += turkishSumerianReverse_alphabet[char];
		}
	}
	document.getElementById('result-sumerian-reverse').innerHTML = result;
}

function calculateSatanic() {
	var word = document.getElementById('word-general').value.toUpperCase();
	var result = 0;

	for (var i = 0; i < word.length; i++) {
		var char = word[i];
		if (turkishSatanic_alphabet[char]) {
			result += turkishSatanic_alphabet[char];
		}
	}
	document.getElementById('result-satanic').innerHTML = result;
}