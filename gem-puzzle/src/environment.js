export default function createEnvironment() {
    let header = document.createElement('div');
    header.className = "header";
    header.innerHTML = `<span class="header__wrapper"> 
                    <h1 class="game__name">#Gem<br> Puzzle</h1>
                    <span class="status">
                    <span class="status__item moves">Moves: 0</span>
                    <span class="status__item time">Time: 00:00</span>       
                    <span class="status__item menu__btn">Menu</span>
                    <ul class="menu">
                        <li class="menu__item item--new_game">New game</li>
                        <li class="menu__item item--save_game">Save game</li>
                        <li class="menu__item item--scores">Best scores</li>
                        <li class="menu__item item--settings">Settings</li>
                        <li class="menu__item item--rules">Rules</li>
                    </ul>
                    </span>`;
    document.body.prepend(header);


//     let rules = document.createElement('div');
//     rules.classList.add('rules inactive');
//     rules.innerHTML = 
//         `<span class="corner">
//             <span class="line line--horizontal"></span>
//             <span class="line line--vertical"></span>
//         </span>
//         <h2>Rules</h2>
//          <p>The object of the puzzle is to place the tiles in order<br>
//             by making sliding moves that use the empty space.<br>
//             <br>
//             You can save your game and load it later.<br>
//             Or you can just use pause button.<br>
//             Also you can choose game field size of color in Settings</p>
//         <span class="btn__close">
//             <span class="close__line close-line--vert"></span>
//             <span class="close__line close-line--horiz"></span>
//         </span>`;
//     header.after(rules);

//     document.querySelector('.menu__btn').addEventListener('click', () => {
//         console.log('click menu');
//         rules.classList.remove('inactive');
//     });

 }
//moves = `Moves: ${countMoves}`;