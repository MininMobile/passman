document.addEventListener("click", () => dialog.showOpenDialog({ title: "Select Passfile" }, validate));

function validate(path) {
	path ? (() => {
		// owo
	})() : error("No file path specified");
}
