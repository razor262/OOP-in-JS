console.log('power_on');

class Button { constructor(width, height, background, value) { 
    this.width = width; 
    this.height = height; 
    this.background = background; 
    this.value = value; 
}

render() {
        const button = document.createElement('button');
    button.style.width = this.width + 'px';
    button.style.height = this.height + 'px';
    button.style.background = this.background;
    button.textContent = this.value;
    return button;
}

}

const myButton = new Button(100, 40, '#ff0000', 'Click me'); let buttonElement = myButton.render();

document.body.appendChild(buttonElement);

class ModernButton extends Button { 
constructor(width, height, background, value, borderRadius) { 
super(width, height, background, value); 
    this.borderRadius = borderRadius; 
}

render() {
        const button = super.render();
    button.style.borderRadius = this.borderRadius + 'px';
    return button;
}

}

const myButton1 = new ModernButton(100, 40, '#ff0000', 'Click me', 6); 
let buttonElement1 = myButton1.render();

document.body.appendChild(buttonElement1);
