function calc() {
	let a = parseFloat(document.getElementById("a").value);
	let b = parseFloat(document.getElementById("b").value);
	let c = parseFloat(document.getElementById("c").value);
	let d = document.getElementById("d");
	d.value = c * ( b / a );
}