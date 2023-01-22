export function addToLocalStorage(key, value) {
    let data = localStorage.getItem(key);
    if (!data) {
        data = [];
    } else {
        data = JSON.parse(data);
    }
    data.push(value);
    localStorage.setItem(key, JSON.stringify(data));
}

export function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}
