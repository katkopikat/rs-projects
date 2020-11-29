/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */

export default class Game {
  constructor(container, width, size, mode, storage) {
    this.parentConteiner = container;
    this.width = width;
    this.size = size;
    this.mode = mode;
    this.storage = storage;
    this.arrPosition = [];
    this.countMoves = 0;
    this.limitLeft = [];
    this.limitRight = [];
    this.allowBtnForClick = [];
    this.emptyPos = null;
    this.timerId = null;
    this.isAutoClick = false;
    this.gameIsPaused = false;
    this.audioOn = true;

    this.scoresIsOpen = false;
    this.rulesIsOpen = false;
    this.settingsIsOpen = false;

    this.saveGame();
    this.openMenu();
    this.storage.createResultsSet();
  }

  init() {
    this.container = this.createWrapper();
    this.parentConteiner.appendChild(this.container);
    this.arrPosition.splice(0, this.arrPosition.length);
  }

  createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.className = 'puzzle';
    wrapper.style.position = 'relative';
    wrapper.style.margin = '2rem auto';
    wrapper.style.width = `${this.width}rem`;
    document.querySelector('.wrapper').append(wrapper);

    return wrapper;
  }

  // set limites for moves
  setLimite() {
    for (let i = 1; i <= this.size * this.size; i += this.size) { // Ограничение слева
      this.limitLeft.push(i);
    }
    for (let i = this.size; i <= this.size * this.size; i += this.size) { // Ограничение справа
      this.limitRight.push(i);
    }
  }

  // get position empty elements
  getEmptyPosition() {
    this.emptyPos = document.querySelector('.empty').style.order;
    return this.emptyPos;
  }

  // make clickable items near empty item
  addClickable() {
    this.emptyPos = +this.getEmptyPosition();
    let tempTop; let tempBottom; let tempLeft; let
      tempRight;

    // top
    if ((this.emptyPos - this.size) >= 1) {
      tempTop = document.querySelector(`[data-pos="${this.emptyPos - this.size}"]`);
      tempTop.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos - this.size);
    }
    // bottom
    if (this.emptyPos + this.size <= this.size * this.size) {
      tempBottom = document.querySelector(`[data-pos="${this.emptyPos + this.size}"]`);
      tempBottom.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos + this.size);
    }
    // left
    if (!this.limitLeft.includes(this.emptyPos)) {
      tempLeft = document.querySelector(`[data-pos="${this.emptyPos - 1}"]`);
      tempLeft.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos - 1);
    }
    // right
    if (!this.limitRight.includes(this.emptyPos)) {
      tempRight = document.querySelector(`[data-pos="${this.emptyPos + 1}"]`);
      tempRight.classList.add('clickable');
      this.allowBtnForClick.push(this.emptyPos + 1);
    }
    return this.allowBtnForClick;
  }

  // delete clickable property
  deleteClickable() {
    this.allowBtnForClick = [];
    document.querySelectorAll('.clickable').forEach((item) => {
      item.classList.remove('clickable');
    });
    return this.allowBtnForClick;
  }

  // ADD EVENT LISTENER FOR ITEM, MOVE ITEMS AND ANIMATION
  clickItems() {
    const empty = document.querySelector('.empty');
    const grid = document.querySelectorAll('.cell');
    const audio = document.querySelector('.audio');

    grid.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        item.style.setProperty('transition', 'all 0.3s ease-in-out');
        const margin = 0.6;
        const distanse = parseInt(item.style.width, 10) + margin;
        // animation
        if (!this.isAutoClick) {
          if (this.audioOn) {
            audio.play();
          }
          if (e.target.style.order === `${this.emptyPos + 1}`) {
            item.style.transform = `translateX(-${distanse}rem)`;
          } else if (e.target.style.order === `${this.emptyPos - 1}`) {
            item.style.transform = `translateX(${distanse}rem)`;
          } else if (e.target.style.order === `${this.emptyPos + this.size}`) {
            item.style.transform = `translateY(-${distanse}rem)`;
          } else if (e.target.style.order === `${this.emptyPos - this.size}`) {
            item.style.transform = `translateY(${distanse}rem)`;
          }

          // chahge flex:order
          setTimeout(() => {
            item.style.setProperty('transition', 'none');
            item.style.setProperty('transform', 'none');

            const curPos = item.style.order;
            item.style.order = this.emptyPos;
            item.dataset.pos = this.emptyPos;
            empty.style.order = curPos;
            empty.dataset.pos = curPos;
            this.arrPosition.push(`${index + 1},${curPos},${this.emptyPos}`);
            this.countMoves += 1;
            this.updateMoves();
            this.gameIsSolved();
            this.deleteClickable();
            this.addClickable();
            if (this.countMoves === 1) {
              this.startTimer();
            }
          }, 350);
        } else {
          const curPos = item.style.order;
          item.style.order = this.emptyPos;
          item.dataset.pos = this.emptyPos;
          document.querySelector('.empty').style.order = curPos;
          document.querySelector('.empty').dataset.pos = curPos;
          this.arrPosition.push(`${index + 1},${curPos},${this.emptyPos}`);
          this.deleteClickable();
          this.addClickable();
          if (this.countMoves === 1) {
            this.startTimer();
          }
        }
      });
    });
  }

  // RANDOM ITEM:
  // get random number
  static getRandomInt(min, max) {
    const minNum = Math.ceil(min);
    const maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }

  // make n-random autoclick for randomize items on the field
  randomizeItem() {
    let randomNumb;
    if (this.size === 3) randomNumb = Game.getRandomInt(40, 80);
    if (this.size === 4) randomNumb = Game.getRandomInt(100, 150);
    if (this.size === 5 || this.size === 6 || this.size === 7) {
      randomNumb = Game.getRandomInt(150, 200);
    }
    if (this.size === 8) randomNumb = Game.getRandomInt(200, 250);

    for (let i = 0; i < randomNumb; i += 1) {
      this.isAutoClick = true;
      this.autoClickItems();
    }
    this.updateAfterAutoClick();
    return this.countMoves;
  }

  // autoclick, when we push on random allow item
  autoClickItems() {
    const RandomNumbBtn = this.allowBtnForClick[Game.getRandomInt(0, this.allowBtnForClick.length)];
    const randomBtn = document.querySelector(`[data-pos="${RandomNumbBtn}"]`);
    randomBtn.click(this.clickItems);
  }

  // remove autoclick-flag
  updateAfterAutoClick() {
    this.isAutoClick = false;
    return this.isAutoClick;
  }

  // update moves
  updateMoves() {
    document.querySelector('.moves').innerText = `Moves: ${this.countMoves}`;
  }

  // remove back and forth steps
  removeDuplicateSteps() {
    const arr = [...this.arrPosition].reverse();

    for (let j = 0; j < 3; j += 1) {
      for (let i = 0; i < arr.length - 1; i += 1) {
        const arrOneStep = arr[i].split(',');
        const arrOneStepback = arr[i + 1].split(',');

        if (arrOneStep[0] === arrOneStepback[0]
         && arrOneStep[1] === arrOneStepback[2]
         && arrOneStep[2] === arrOneStepback[1]) {
          arr.splice(i, 2);
        }
      }
    }
    this.arrPosition = this.arrPosition.splice(0, this.arrPosition.length);
    this.arrPosition = [...arr];
    return this.arrPosition;
  }

  // solve animation (reverse animation)
  reverseHistory() {
    this.removeDuplicateSteps();
    const history = [...this.arrPosition];

    const makeStep = (hist, i = 0) => {
      const arrOneStep = hist[i].split(',');
      const tempEmpty = document.querySelector('.empty');
      const temp = document.querySelector(`[data-id="${arrOneStep[0]}"]`);

      temp.style.order = `${arrOneStep[1]}`;
      tempEmpty.style.order = `${arrOneStep[2]}`;

      if (i === hist.length - 1) {
        return;
      }
      setTimeout(() => {
        makeStep(hist, i + 1);
      }, 500);
    };
    makeStep(history);
  }

  showSolve() {
    document.querySelector('.item--solution').addEventListener('click', () => {
      this.reverseHistory();
    });
  }

  startTimer() {
    let timeMinute = 0;
    let seconds = 0;
    let minutes = 0;
    this.timerId = setInterval(() => {
      seconds = timeMinute % 60;
      minutes = Math.trunc((timeMinute / 60) % 60);

      const secText = seconds > 9 ? `${seconds}` : `0${seconds}`;
      const minText = minutes > 9 ? `${minutes}` : `0${minutes}`;

      document.querySelector('.time').innerText = `Time: ${minText}:${secText}`;
      timeMinute += 1;
    }, 1000);
  }

  clearTimer() {
    setTimeout(() => {
      clearInterval(this.timerId);
    }, 0);
  }

  gameIsSolved() {
    for (let i = 1; i <= this.size * this.size; i += 1) {
      const { pos } = document.querySelector(`[data-pos="${i}"]`).dataset;
      const { id } = document.querySelector(`[data-pos="${i}"]`).dataset;
      if (pos === id && i === this.size * this.size) {
        this.showWinMessage();
        this.clearTimer();
      } else if (pos !== id) {
        break;
      }
    }
  }

  openMenu() {
    const listMenu = ['new_game', 'save_game', 'scores', 'settings', 'rules', 'solution'];
    document.querySelector('.menu__btn').addEventListener('click', () => {
      document.querySelector('.menu').classList.remove('inactive');
      listMenu.forEach((item) => {
        document.querySelector(`.item--${item}`).classList.add(`item--${item}--open`);
      });
    });

    Game.showRules();
    this.showScore();
    Game.closeMenu();
    return this.gameIsPaused;
  }

  static closeMenu() {
    document.querySelector('.close--menu').addEventListener('click', () => {
      document.querySelector('.menu').classList.add('inactive');
    });
  }

  showWinMessage() {
    const win = document.createElement('div');
    win.classList.add('win');
    const time = document.querySelector('.time').innerText.replace('Time:', '');
    win.innerHTML = `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>You won!</h2>
            <p class="winText">You won in ${time} and ${this.countMoves} moves!</p>
            <span class="btn__close btn__close--win">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;

    document.querySelector('.header').after(win);
    setTimeout(() => {
      document.querySelector('.btn__close--win').addEventListener('click', () => {
        win.remove();
      });
    }, 500);
    this.saveResult();
  }

  static showRules() {
    document.querySelector('.item--rules').addEventListener('click', () => {
      const rules = document.createElement('div');
      rules.classList.add('rules');

      rules.innerHTML = `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Rules</h2>
             <p>The object of the puzzle is to place the tiles in order<br>
                by making sliding moves that use the empty space.<br>
                <br>
                You can save your game and load it later.<br>
                Or you can just use pause button.<br>
                Also you can choose game field size and mode (picture or number),<br>
                and turn on or tutn off sounds in Settings.<br>
                Have a nice game!</p>
            <span class="btn__close btn__close--rules">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
      document.querySelector('.menu_content').appendChild(rules);

      setTimeout(() => {
        document.querySelector('.btn__close--rules').addEventListener('click', () => {
          rules.remove();
          document.querySelector('.menu').classList.add('inactive');
        });
      }, 1000);
    });
  }

  saveGame() {
    document.querySelector('.item--save_game').addEventListener('click', () => {
      this.storage.saveGame(this.arrPosition);
    });
  }

  saveResult() {
    const time = document.querySelector('.time').innerText.replace('Time:', '');
    const currencyResult = `${this.countMoves}_________${time}_______${this.size}_______${this.mode}`;
    this.storage.saveResult(currencyResult);
  }

  showScore() {
    if (!this.scoresIsOpen) {
      this.scoresIsOpen = true;
      document.querySelector('.item--scores').addEventListener('click', () => {
        const score = document.createElement('div');
        score.classList.add('score');

        score.innerHTML = `<span class="corner">
                <span class="line line--horizontal"></span>
                <span class="line line--vertical"></span>
            </span>
            <h2>Best scores</h2>
         <ul class="scores__list">
         <li class="score_position position_heading">#_______Steps_______Time_______Field_______Mode</li>
         </ul>
            <span class="btn__close btn__close--score">
                <span class="close__line close-line--vert"></span>
                <span class="close__line close-line--horiz"></span>
            </span>`;
        document.querySelector('.menu_content').appendChild(score);

        const historyArr = Array.from(this.storage.createResultsSet());
        if (historyArr.length > 1) {
          const sortArrayByDigits = (array) => {
            const reg = /\D/g;
            array.sort((a, b) => (parseInt(a.replace(reg, ''), 10) - parseInt(b.replace(reg, ''), 10)));
          };
          sortArrayByDigits(historyArr);
        }

        for (let i = 0; i < historyArr.length; i += 1) {
          if (i < 10) {
            const scoreLi = document.createElement('li');
            scoreLi.classList.add('score_position');
            scoreLi.classList.add(`position${i + 1}`);

            const curPos = document.querySelector('.scores__list').lastChild;
            curPos.after(scoreLi);
            scoreLi.innerText = `${i + 1}_________${historyArr[i]}`;
          }
        }

        setTimeout(() => {
          document.querySelector('.btn__close--score').addEventListener('click', () => {
            score.remove();
            document.querySelector('.menu').classList.add('inactive');
            this.scoresIsOpen = false;
          });
        }, 1000);
      });
    }
    return this.scoresIsOpen;
  }
}
