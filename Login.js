let login = document.querySelector("#login")
login.addEventListener("submit", (e) => {
    e.preventDefault()

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let users = JSON.parse(localStorage.users)
    let check = false
    for(let i=0; i < users.length; i++){
        if( users[i].email === email && users[i].password === password){
            check = true
            sessionStorage.setItem('isLogin', true)
            sessionStorage.setItem('email', email)
            window.location.href = 'Website work .html'
            break
        }
    }
    if (check === false){
        alert("wrong register detail")
    }
})