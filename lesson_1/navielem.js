// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
console.log(document.body.children);

// for (let val of document.body.children) {
//     console.log(val.localName === 'div' ? "Это DIV" : "Это не DIV");
// }

for (let val of document.body.childNodes) {
    console.dir(val.nodeType);
};

for (let val of document.body.childNodes) {
    console.dir(val.nodeValue);
};

// https://dom.spec.whatwg.org/#node