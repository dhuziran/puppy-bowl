window.onload = function () {
    let puppyName = localStorage.getItem('name')
    let puppyBreed = localStorage.getItem('breed')
    let puppyImg = localStorage.getItem('image')
    let puppyStatus = localStorage.getItem('status')

    let container = document.getElementById('container')

    let button = document.createElement('button')

    let newElement = document.createElement('div')

    let img = document.createElement('img')
    img.src = puppyImg
    img.style.width = '25vw'
    img.style.height = '50vh'

    newElement.innerText = `Name: ${puppyName}
    Breed: ${puppyBreed}
    Status: ${puppyStatus}`
    newElement.style.fontSize = '5em'
    newElement.style.textAlign = 'center'

    container.style.backgroundColor = '#A9BCD0'

    button.innerText = 'Return Back'
    button.style.fontSize = '2.5em'
    button.style.borderRadius = '1rem'
    button.style.backgroundColor = '#373F51'
    button.style.color = 'white'

    container.appendChild(newElement)
    container.appendChild(img)
    container.appendChild(button)

    button.addEventListener('click', () => {
        window.location.href = 'index.html'
    })


}