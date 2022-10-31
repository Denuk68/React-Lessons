const saveUser = ({ userername, email }) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST', //save
        body: JSON.stringify({ userername, email }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

export { saveUser };