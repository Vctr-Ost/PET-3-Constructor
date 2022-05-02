import { model } from './class/Model'
import { templates } from './class/Templates'
import './styles/style.css'

const site = document.querySelector('#site');

model.forEach(block => {
	const html = templates[block.type](block);
	if (html) {
		site.insertAdjacentHTML("beforeend", html);
	}
})