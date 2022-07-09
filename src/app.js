// Get current year and display on htn e footer
document.querySelector('.current-year').innerText = new Date().getFullYear();

// Function display menu
const button = document.getElementById('button');
const displayMenu = () =>{
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

button.addEventListener('click', displayMenu);

// Remove menu when we click on each buttons
const menuBtn = [...document.querySelectorAll('.menu-btn')];
menuBtn.forEach(btn =>{
    btn.addEventListener('click', displayMenu);
});

// Function fetch data ang get quote
const getUserData = async () =>{
    const message = document.getElementById('message');
    const author = document.getElementById('author');

    const response = await fetch("http://quotes.stormconsultancy.co.uk/random.json");
    const data = await response.json();

    message.innerText = data.quote;
    author.innerText = data.author;
}

getUserData();