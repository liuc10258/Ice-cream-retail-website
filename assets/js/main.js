/*==================== BASKET ====================*/
var basketTotal = 0.00;

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}

document.getElementById('add_coco').addEventListener("click", function (){
    addToBasket('coco_size', 'coco_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('coco_size').value * document.getElementById('coco_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Chocolate - ${document.getElementById('coco_size').options[document.getElementById('coco_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('coco_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_mint').addEventListener("click", function (){
    addToBasket('mint_size', 'mint_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('mint_size').value * document.getElementById('mint_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Mint - ${document.getElementById('mint_size').options[document.getElementById('mint_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('mint_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_honey').addEventListener("click", function (){
    addToBasket('honey_size', 'honey_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('honey_size').value * document.getElementById('honey_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Honeycomb - ${document.getElementById('honey_size').options[document.getElementById('honey_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('honey_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_rum').addEventListener("click", function (){
    addToBasket('rum_size', 'rum_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('rum_size').value * document.getElementById('rum_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Rum and Raisin - ${document.getElementById('rum_size').options[document.getElementById('rum_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('rum_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_vanilla').addEventListener("click", function (){
    addToBasket('vanilla_size', 'vanilla_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('vanilla_size').value * document.getElementById('vanilla_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Vanilla - ${document.getElementById('vanilla_size').options[document.getElementById('vanilla_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('vanilla_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_straw').addEventListener("click", function (){
    addToBasket('straw_size', 'straw_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('straw_size').value * document.getElementById('straw_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Strawberry - ${document.getElementById('straw_size').options[document.getElementById('straw_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('straw_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_cherry').addEventListener("click", function (){
    addToBasket('cherry_size', 'cherry_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('cherry_size').value * document.getElementById('cherry_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Cherry - ${document.getElementById('cherry_size').options[document.getElementById('cherry_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('cherry_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});
document.getElementById('add_cara').addEventListener("click", function (){
    addToBasket('cara_size', 'cara_qty')
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    cartRow.classList.add('cart-row')
    var price = document.getElementById('cara_size').value * document.getElementById('cara_qty').value;
    var cartRowContents = `
        <div class="cart-item cart-column">
            <span class=menu__name>Salted Caramel - ${document.getElementById('cara_size').options[document.getElementById('cara_size').selectedIndex].text}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <span class="cart-price cart-column">${document.getElementById('cara_qty').value}</span>
            <a href="#basket" class="button btn-danger">Remove</a>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function (){
        basketTotal = basketTotal-price;
        document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
        document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
    })
});


function addToBasket(size, qty){
    var tub = document.getElementById(size).value;
    var quantity = document.getElementById(qty).value;
    var priceToAdd = tub * quantity;
    basketTotal = basketTotal + priceToAdd;

    document.getElementById('basket__total').innerHTML = "Basket Total: " + basketTotal;
    document.getElementById('order__total').innerHTML = "Order Total: " + basketTotal;
}
/*==================== BG-Model ====================*/
document.getElementById("sign").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = 'flex';
});

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".bg-modal").style.display = 'none';
});

/*==================== RG-Model ====================*/
document.getElementById("order__button").addEventListener("click", function () {
    document.querySelector(".order__content").style.display = 'block';
    document.querySelector(".menu").style.display = 'none';
});

document.getElementById("cancel").addEventListener("click", function () {
    document.querySelector(".order__content").style.display = 'none';
    document.querySelector(".menu").style.display = 'block';
    document.querySelector(".msg").style.display = 'none';
});

/*==================== ORDER SHOW ====================*/

document.getElementById("reg").addEventListener("click", function () {
    document.querySelector(".rg-modal").style.display = 'flex';
    document.querySelector(".footer__content").style.display = 'none';
});

document.getElementById("shut").addEventListener("click", function () {
    document.querySelector(".rg-modal").style.display = 'none';
    document.querySelector(".footer__content").style.display = 'flex';
});

/*==================== PAYMENT ====================*/
document.getElementById("pay").addEventListener("click", geocode);
/*==================== DISTANCE CALCULATING ====================*/



function geocode(e) {
    var location = document.getElementById('address').value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params:{
            address: location,
            key: 'AIzaSyALJT6zZhAHUjezm1lQp3GmF4G61Kgqaq8'
        }
    })
        .then(function (response) {
            console.log(response);
            var map;

            var later = response.data.results[0].geometry.location.lat;
            var long = response.data.results[0].geometry.location.lng;

            const center = {lat: 55.073206, lng: -1.525291};
            const options = {zoom: 15, scaleControl: true, center: center};
            map = new google.maps.Map(
                document.getElementById('map'), options);

            const cavallo = {lat: 55.073206, lng: -1.525291};
            var address = {lat: later, lng: long};

            var mk1 = new google.maps.Marker({position: cavallo, map: map});
            var mk2 = new google.maps.Marker({position: address, map: map});

            var distance = haversine_distance(mk1, mk2);
            var inMiles = distance.toFixed(2)
            if (inMiles>5){
                alert('We are sorry to say that we do not deliver to areas that are more than 5 miles away from our location')
            } else {
                //implement horsepay api
            }

        })

function haversine_distance(mk1, mk2) {
    var R = 3958.8; // Radius of the Earth in miles
    var rlat1 = mk1.position.lat() * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.position.lat() * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.position.lng()-mk1.position.lng()) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})}
