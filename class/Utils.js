export function row(text, cssClass = '') {
	return `<div class="row ${cssClass}">${text}</div>`;
}
export function col(text) {
	return `<div class="col-sm">${text}</div>`;
}