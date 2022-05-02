import image from '../img/widthImg.jpg'
import {Block} from './Block'

export const model = [
	{type: 'title', value: 'Site constructor on JavaScript', options: {
		tag: `h1`,
		cssClass: 'title',
	}},
	{type: 'text', value: 'Сайт - конструктор на чистому JS<br>Без додаткових бібліотек та фреймворків', options: {
		tag: `h3`,
		cssClass: 'subtitle',
	}},
	{type: 'column', value: [
		'JavaScript - це легко !!!',
		'JavaScript - це цікаво !!!',
		'JavaScript - це круто !!!',
	],
	options: {
		cssClass: 'flexClass',
	}
	},
	{type: 'image', value: image, options: {
		tag: `h2`,
		cssClass: 'imageClass',
	}},
];