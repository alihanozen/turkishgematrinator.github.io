function takeScreenshot() {
	html2canvas(document.body).then(function(canvas) {
		var link = document.createElement('a');
		link.download = "screenshot.png";
		link.href = canvas.toDataURL();
		link.click();
	});
}

function convertUppercaseGeneral() {
	var input = document.getElementById("word-general");
	var text = input.value;
	text = text.replace(/ı/g, "I").replace(/i/g, "İ");
	text = text.toUpperCase();
	input.value = text;
}

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

function ordinalHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[0];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-ordinal").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function ordinalHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		ordinalHistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function ordinalReverseHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[3];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-ordinal-reverse").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function ordinalReverseHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		ordinalReverseHistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function ordinalV2HistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[6];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-ordinal-v2").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function ordinalV2HistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		ordinalV2HistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function ordinalReverseV2HistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[9];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-ordinal-v2-reverse").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function ordinalReverseV2HistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		ordinalReverseV2HistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function reductionHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[12];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-reduction").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function reductionHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		reductionHistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function reductionReverseHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[15];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-reduction-reverse").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function reductionReverseHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		reductionReverseHistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function sumerianHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[18];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-sumerian").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function sumerianHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		sumerianHistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function sumerianReverseHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[21];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-sumerian-reverse").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function sumerianReverseHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		sumerianReverseHistoryAddToTable();

		formClear();

		$("#word-general").focus();
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

function satanicHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[24];

	$("#gematrinatorHistoryTable tbody").append("<tr>" +
		"<th>" + $("#word-general").val() + "</th>" +
		"<th>" + $(header).text() + "</th>" +
		"<th>" + $("#result-satanic").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function satanicHistoryUpdate() {
	if ($("#word-general").val() != null && $("#word-general").val() != '') {
		satanicHistoryAddToTable();

		formClear();

		$("#word-general").focus();
	}
}