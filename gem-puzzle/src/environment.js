export default function createEnvironment() {

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
                        <li class="menu__item close--menu">   <span class="btn__close">
                        <span class="close__line close-line--vert"></span>
                        <span class="close__line close-line--horiz"></span>
                    </span></li>
                 
                    </ul>
                    </span>
                    <audio class="audio" src="assets/sounds/move.mp3"></audio>`;
                    wrapper.prepend(header);
}
