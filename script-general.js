function takeScreenshot() {
	html2canvas(document.body).then(function (canvas) {
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

