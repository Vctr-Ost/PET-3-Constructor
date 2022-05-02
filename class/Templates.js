import {row, col} from './Utils'


function title(block) {
	const tag = block.options.tag;
	const cssClass = block.options.cssClass;
	return row(col(`<${tag}>${block.value}</${tag}>`), cssClass);
}
function text(block) {
	const tag = block.options.tag;
	const cssClass = block.options.cssClass;
	return row(col(`<${tag}>${block.value}</${tag}>`), cssClass);
}
function column(block) {
	let res = block.value.map(text => col(text));
	const cssClass = block.options.cssClass;
	return row(res.join(''), cssClass);
}
function image(block) {
	const cssClass = block.options.cssClass;
	return row(`<img src="${block.value}" alt="Image">`, cssClass);
}

export const templates = {
	title, text, column, image,
}