/* eslint-disable linebreak-style */
export default class Storage {
  constructor() {
    this.resultsSet = new Set();
  }

  createResultsSet() {
    let j = 1;
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if (key.match(/result/)) {
        this.resultsSet.add(localStorage.getItem(`result${j}`));
        j += 1;
      }
    }
    return this.resultsSet;
  }

  saveResult(currencyResult) {
    localStorage.setItem(`result${this.resultsSet.size + 1}`, currencyResult);
    this.resultsSet.add(currencyResult);
    return this.resultsSet;
  }

  saveGame(arrPosition) {
    localStorage.setItem('savedgame', arrPosition);
  }
}
