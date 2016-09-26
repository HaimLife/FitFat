/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
}
function getBmr(kg, fat) {
    return kg * (1 -(fat / 100)) * 33.5;
}