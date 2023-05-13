export const Dice = (props) => {

    const {side} = props;

    const element = document.createElement('div');
    element.classList.add('dice');

    element.innerHTML = `
        <div class="dice__side dice__side--${side}"></div>
        <button class="btn btn--small roll-btn">hodit</button>
    `;

    const roll = () => {
        return Math.floor(Math.random() * 6) + 1;
    };

    const buttonElm = element.querySelector('button');
    buttonElm.addEventListener('click', () => {
        element.replaceWith(Dice({
            side: roll(),
        }
        ));
    });

    return element;
}


  