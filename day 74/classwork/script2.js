
const btn = document.querySelector('.btn')

btn.addEventListener('click', (event) =>{
    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const password = document.querySelector('.password');
    event.preventDefault();
    document.body.innerHTML += `
        <table>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>password</th>
            </tr>
            <tr>
                <th>${name.value}</th>
                <th>${email.value}</th>
                <th>${password.value}</th>
            </tr>
        </table>
    `
})