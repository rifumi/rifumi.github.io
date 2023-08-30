/**
 * アンエスケープ文字列を返す
 * @param {string} text - エスケープ文字を含む文字列
 * @returns {string}
 */
function decode(text) {
    elm = document.createElement('div')
    elm.innerHTML = text;
    return elm.textContent || elm.innerText;
}
