function historyDelete(ctl) {
	$(ctl).parents("tr").remove();
}

function deleteAllRows(tableSelector) {
	$(tableSelector + " tr:not(:first)").each(function () {
		$(this).remove();
	});
}

function historyAddToTable() {
	if ($("#historyTable tbody").length == 0) {
		$("#historyTable").append("<tbody></tbody>");
	}

	$("#historyTable tbody").append("<tr>" +
		"<th>" + '<i class="fa fa-calculator"></i>' + "</th>" +
		"<th>" + $("#word").val() + "</th>" +
		"<th>" + $("#result").html() + "</th>" +
		"<th>" + '<button id="delete-row" class="btn btn-outline-light" onclick="historyDelete(this);"><i class="fa fa-trash"></i></button>' + "</th>" +
		"</tr>");
}

function historyUpdate() {
	if ($("#word").val() != null && $("#word").val() != '') {
		historyAddToTable();

		$("#word").focus();
	}
}
