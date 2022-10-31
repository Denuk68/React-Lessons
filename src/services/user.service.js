const saveUser = ({ name, email }) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST', //save
        body: JSON.stringify({ name, email }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export { saveUser };