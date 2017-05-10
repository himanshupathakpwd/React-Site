export default class ToDoApi {
  constructor() {
    this.localStoragePrefix = 'react_site_';
  }

  getItem(key) {
    // console.log('getting item ', key);
    return localStorage.getItem(this.localStoragePrefix + key);
  }

  setItem(key, value) {
    // console.log('setting item, ', key, ' to ', value);
    localStorage.setItem(this.localStoragePrefix + key, value);
  }
}
