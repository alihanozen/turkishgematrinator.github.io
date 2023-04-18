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

function ordinalReverseHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[1];

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

function ordinalV2HistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[2];

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

function ordinalReverseV2HistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[3];

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

function reductionHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[8];

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

function reductionReverseHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[9];

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

function sumerianHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[10];

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

function sumerianReverseHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[11];

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

function satanicHistoryAddToTable() {
	if ($("#gematrinatorHistoryTable tbody").length == 0) {
		$("#gematrinatorHistoryTable").append("<tbody></tbody>");
	}
	var table = document.getElementById('gematrinatorTable');
	var header = table.getElementsByTagName('th')[16];

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