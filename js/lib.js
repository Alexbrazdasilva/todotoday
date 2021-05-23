class NoImplementation extends Error {
	constructor (error) {
		super(error)
	}
}
const document = window.document || self.document || this.document;

class myLibQuery {
	constructor(target) {
		this.element = document.querySelector(target);
	}
	text(text) {
		this.element.innerText = text
	}
	html(html, increment = true) {
		increment
		? this.element.innerHTML += html
		: this.element.innerHTML = html
	}
	val(value) {
		if(value || value == '') this.element.value = value
		else return this.element.value;
	}
	attr(attribute, value) {
		this.element.setAttribute(attribute, value)
	}
	// EventListeners 
	on(event, callback) {
		if(!this.element) {
			throw new NoImplementation("Target is undefined or null")
			return;
		} 
		
		this.element.addEventListener(event, callback)
	}
	click(fn) {
		this.on('click', fn)
	}
	focus(fn) {
		this.on('focus', fn)
	}
	unFocus(fn){
		this.on('blur', fn)
	}
	change(fn) {
		this.on('change', fn)
	}
	newComponent(component, increment = true) {
		this.html(component, increment)
	}
}
export const $ = element => new myLibQuery(element);