export default function createEnvironment() {

    // const menuBtn = document.querySelector('.menu__btn');
        // newGameBtn = document.querySelector('.item--new_game'),
        // saveGameBtn = document.querySelector('.item--save_game'),
        // scoresBtn = document.querySelector('.item--scores'),
        // settingsBtn = document.querySelector('.item--settings'),
        // rulesBtn = document.querySelector('.item--rules');

    let header = document.createElement('div');
    let wrapper = document.querySelector('.wrapper')
    header.className = "header";
    header.innerHTML = `<span class="header__wrapper"> 
                    <h1 class="game__name">#Gem<br> Puzzle</h1>
                    <span class="status">
                    <span class="status__item menu__btn">Menu</span>
                    <span class="status__item moves">Moves: 0</span>
                    <span class="status__item time">Time: 00:00</span>       
                    <ul class="menu inactive">
                        <li class="menu__item item--new_game">New game</li>
                        <li class="menu__item item--save_game">Save game</li>
                        <li class="menu__item item--scores">Best scores</li>
                        <li class="menu__item item--settings">Settings</li>
                        <li class="menu__item item--solution">Solution</li>
                        <li class="menu__item item--rules">Rules</li>
                 
                    </ul>
                    </span>
                    <audio class="audio" src="assets/sounds/move.mp3"></audio>`;
                    wrapper.prepend(header);
}
//     let settings = document.createElement('div');
//     settings.classList.add('rules inactive');
//     settings.innerHTML = 
//             `<span class="corner">
//                 <span class="line line--horizontal"></span>
//                 <span class="line line--vertical"></span>
//             </span>
//             <h2>Settings</h2>

//             <span class="mode">Mode:</span>
//             <span class="mode__number settings--on">numbers</span>
//             <span class="mode__pictures">pictures</span>

//             <span class="sound">Sound:</span>
//             <span class="sound__on settings--on">Sound:</span>
//             <span class="sound__off">Sound:</span>

//             <span class="size">Size:</span>
//             <span class="size__3">3*3</span>
//             <span class="size__4 settings--on">4*4</span>
//             <span class="size__5">5*5</span>
//             <span class="size__6">6*6</span>
//             <span class="size__7">7*7</span>
//             <span class="size__8">8*8</span>

//             <span class="btn__close">
//                 <span class="close__line close-line--vert"></span>
//                 <span class="close__line close-line--horiz"></span>
//             </span>`;
//         header.after(settings);
//   };

   


//moves = `Moves: ${countMoves}`;