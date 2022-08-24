let navbar = document.querySelector('.navbar');

const imageArray = ['../images/Home1.jpg',
    '../images/home-img.jpeg',
    '../images/home-5.jpg',
    '../images/blog-7.jpg'
]
var count = 0;
if(document.getElementById('home'))
{
    document.getElementById('home').style.backgroundImage = `url(${imageArray[count]})`;
    setInterval(()=> {
        document.getElementById('home').style.backgroundImage = `url(${imageArray[count++]})`;
        document.getElementById('home').style.transition = 'background-position 5000ms ease-in-out'
        if(count == 4){
            count = 0;
        }
    }, 2000)
}

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let images = document.getElementsByClassName('thumbnail-image')
for(let i = 0; i< images.length; i++) {
    images[i].onclick = ()=> {
        console.log("clicked")
        const imageModal = document.querySelector('.modal-image');
        imageModal.src = images[i].src;
        document.getElementById("modal").style.display = "block"
        document.querySelector('.gallery-container').style.filter = "blur(50px)"         
    }
}

document.querySelector('.modal').onclick = ()=> {
    document.getElementById("modal").style.display = "none";
    document.querySelector('.gallery-container').style.filter = "none";

}

function validateForm(){
    var nameInput = document.querySelector("#name");
    var email = document.querySelector("#email");
    var number = document.querySelector("#phone");
    var success = document.querySelector("#success");
    var errorNodes = document.getElementsByClassName("error");
    clearMessages(nameInput, email, number, success, errorNodes);
    errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank!";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email Address!";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if(number.value.length < 10){
        errorNodes[2].innerText = "Inavlid Phone Number!";
        number.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Success!!"
    }
}

function clearMessages(nameInput, email, number, success, errorNodes){
    for(let i=0; i< errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    number.classList.remove("error-border");
}

function emailIsValid(email){
    console.log(email)
    var pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}


