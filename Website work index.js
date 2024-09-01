const navbarItems = document.querySelectorAll('.navbar-item1')

navbarItems.forEach((item, index) => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        alert("please login to your account or register")
    })
})