export default function createEnvironment() {

    // const menuBtn = document.querySelector('.menu__btn');
        // newGameBtn = document.querySelector('.item--new_game'),
        // saveGameBtn = document.querySelector('.item--save_game'),
        // scoresBtn = document.querySelector('.item--scores'),
        // settingsBtn = document.querySelector('.item--settings'),
        // rulesBtn = document.querySelector('.item--rules');

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

    document.querySelector('.menu__btn').addEventListener('click', () => {
        console.log('click');
        document.querySelector('.item--new_game').classList.add('item--new--open');
        document.querySelector('.item--save_game').classList.add('item--save--open');
        document.querySelector('.item--scores').classList.add('item--scores--open');
        document.querySelector('.item--settings').classList.add('item--settings--open');
        document.querySelector('.item--rules').classList.add('item--rules--open');

    });

    // document.querySelector('.item--rules').addEventListener('click', () => {
    //     console.log('rules');
    //     let rules = document.createElement('div');
    //     rules.classList.add('rules');
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
    //         document.querySelector('.header').after(rules);
    // });

 
    // document.querySelector('.btn__close').addEventListener('click', () => {
    //     console.log('close');
    //    // document.querySelector('.item--rules').classList.add('inactive');
    // });
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