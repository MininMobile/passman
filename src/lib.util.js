const { dialog } = require("electron").remote;

function error(message, detail = undefined) {
	dialog.showMessageBox({
		type: "error",
		title: "Passman - Error",
		message: message,
		detail: detail ? detail : undefined
	});
}