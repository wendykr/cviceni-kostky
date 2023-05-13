import { Dice } from './Dice/index.js';

const diceRowElm = document.querySelector('#dice-row');
diceRowElm.append(Dice({side: 1}), Dice({side: 5}), Dice({side: 3}), Dice({side: 2}));