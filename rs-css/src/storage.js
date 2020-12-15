/* eslint-disable linebreak-style */

export function saveLevelInStorage(level) {
  localStorage.setItem('selectorLevel', level);
}

export function saveLevelStatusInStorage(level, status) {
  localStorage.setItem(`lvl-${level}`, status);
}

export function getLevelStatusFromStorage(level) {
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key.match(/lvl/)) {
      document.querySelector(`[data-id="${key}"]`).firstChild.className = `${localStorage.getItem(key)}`;
    }
    localStorage.getItem(`${level}`);
  }
}

export function loadLevelFromStorage() {
  return localStorage.getItem('selectorLevel');
}
