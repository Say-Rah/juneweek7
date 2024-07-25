document.body.style.background = 'skyblue'

// Use JavaScript to insert text into the third ordered list
const ready = document.getElementById('ready').innerText = 'PaperLine'

// Use querySelector to select the first <ol> within the parent container
const first = document.querySelector('ol>:nth-child(1)').innerText = 'Frontend'

// Use querySelector to select the first <li> within the parent container
const eight = document.querySelector('li.chocolatey:nth-child(8)')

const nine = eight.nextElementSibling.innerText = 'Fullstack'

// Use querySelector to select the first <ol li> within the parent container
const ten = document.querySelectorAll('ol li')

// Gradient background
ten[9].style.backgroundImage = 'linear-gradient(to right, plum, white)';
ten[9].style.fontsize = 'bold'
ten[9].style.color = 'white'


// Get all elements with the class 'myClass'
const five = document.getElementsByClassName('chocolatey')

five[2].style.backgroundColor = 'black'

const seven = document.getElementsByClassName('chocolatey')

seven[4].style.backgroundColor = 'purple'
seven[4].style.padding = '5px'
seven[4].style.border = '1px solid black'
seven[4].style.margin = '5px'

const four = document.getElementsByTagName('li')
four[3].textContent = 'Favourite'






