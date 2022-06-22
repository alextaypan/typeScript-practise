var age = 50;
var title = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) { return 100 + a; };
// -------------------------------------//
var anything = -20;
anything = 'Text';
anything = {};
// -------------------------------------//
var some;
some = 'Text';
var str;
if (typeof some === 'string') {
    str = some;
}
// -----------------------------------//
var person;
person = ['Max', 21];
// ----------------------------------//
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
var page = {
    load: Load.LOADING
};
if (page.load === Load.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Load.READY) {
    console.log('Страница загружена');
}
// ---------------------------//
var animal;
var service;
// --------------------------//
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
