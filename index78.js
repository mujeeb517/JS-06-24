function fn() {
    const fName = document.getElementById('fname');
    alert('hello ' + fName.value);
    fName.value = '';
}

function onAdd() {
    const parent = document.getElementById('div1');
    const headingTag = document.createElement('h2');
    headingTag.innerText = "Heading 2";

    parent.appendChild(headingTag);
}

document.getElementById('btnAdd')
    .addEventListener('click', onAdd);

console.log('hello world', new Date());