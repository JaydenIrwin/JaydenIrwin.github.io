function convert() {
	let input = document.getElementById("input");
	let exp = document.getElementById("exp");
	let output = document.getElementById("output");
	let warnings = 0;
	let errors = 0;

	output.value = "";
	let lineArray = input.value.split(/\r?\n|\r/);
	for (let line of lineArray) {
		let components = line.split(/,/);
		let missingComponents = 4 - components.length;
		if (missingComponents == 1) {
			warnings += 1;
		} else if (1 < missingComponents) {
			errors += 1;
			continue;
		}
		let resultLine = exp.value.replace(/\{0\}/, components[0]).replace(/\{1\}/, components[1]).replace(/\{2\}/, components[2]).replace(/\{3\}/, components[3]);
		output.value = output.value + resultLine + "\r\n";
	}
	document.getElementById("warnings").textContent = (0 < warnings) ? "\u26a0" + warnings : "";
	document.getElementById("errors").textContent = (0 < errors) ? "\uD83D\uDED1" + errors : "";
}