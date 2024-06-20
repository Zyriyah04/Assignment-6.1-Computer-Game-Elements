function submitForm() {
    var username = document.getElementById('username').value;
    var weapons = document.getElementById('weapons').value;
    var health = document.getElementById('health').value;
    var points = document.getElementById('points').value;

    //create the output html
    var output = `
        <p><strong>User Name:</strong> ${username}</p>
        <p><strong>Weapons:</strong> ${weapons}</p>
        <p><strong>Health/Damage:</strong> ${health}</p>
        <p><strong>Point Total:</strong> ${points}</p>
    `;

    document.getElementById('output').innerHTML = output;
}

function resetForm() {
    // clear values of the input fields
    document.getElementById('username').value = '';
    document.getElementById('weapons').value = '';
    document.getElementById('health').value = '';
    document.getElementById('points').value = '';
    document.getElementById('output').innerHTML = ''; //clear output dev
}
