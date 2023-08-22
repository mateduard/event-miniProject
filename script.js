// EDIT EXISTING ITEMS METHOD

/* const body = document.querySelector('body');
body.addEventListener('keydown', (e) => {

    const key = document.querySelector('#key');
    const keycode = document.querySelector('#keycode');
    const code = document.querySelector('#code');

    key.textContent = e.key === ' ' ? 'Key: space' : `Key: ${e.key}`;
    // key.textContent = `Key: ${e.key}`;
    code.textContent = `Code: ${e.code}`;
    keycode.textContent = `KeyCode: ${e.keyCode}`;

}); */

// METHOD NO 2 - CREATE NEW ITEMS METHOD

function getKeyCode(e) {

    const eventObject = {
        key: e.key === ' ' ? 'Key: Space' : `Key: ${e.key}`,
        keyCode: `KeyCode: ${e.keyCode}`,
        code: `Code: ${e.code}`,
    };

    const insert = document.querySelector('#insert');
    insert.innerHTML = '';      // DELETE PREVIOUS ITEMS

    for (let index in eventObject) {

        const div = document.createElement('div');

        div.className = 'key';
        div.appendChild(document.createTextNode(eventObject[index]));

        insert.appendChild(div);
    };

}

document.querySelector('body').addEventListener('keydown', getKeyCode);