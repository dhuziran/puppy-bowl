// fetching the API

async function fetchData() {
    try {
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
        let data = await response.json()
        let players = data.data.players
        return players
    } catch (error) {
        console.log(error)
    }
}


async function renderData(){
    let playersList = await fetchData() 
    console.log(playersList)

    let puppyContainer = document.getElementById('puppy-container')
    let teamContrainer = document.getElementById('team')

    for(let i = 0; i < playersList.length; i++){
        let newElement = document.createElement('div')
        let newContainer= document.createElement('div')
        let button = document.createElement('button')

        newElement.classList.add('info-container')

        newElement.innerText = `${playersList[i].name}`
        newElement.style.border = '2px solid #373F51'
        newElement.style.backgroundColor = '#373F51'
        newElement.style.color = 'white'
        newElement.style.textAlign = 'center'
        newElement.style.marginTop = '0.5rem'
        newElement.style.marginRight = '0.8rem'
        newElement.style.marginLeft = '0.8rem'
        newElement.style.padding = '0.35rem'
        newElement.style.fontSize = '3em'
        newElement.style.borderRadius = '1rem'
        newElement.style.boxShadow = '0 0 12px -2px black' 
        
        button.innerText = 'See Details'
        button.style.backgroundColor = '#373F51'
        button.style.color = 'white'
        button.style.borderRadius = '1rem'

        button.addEventListener('click', () => {
            localStorage.setItem('name', playersList[i].name)
            localStorage.setItem('breed', playersList[i].breed)
            localStorage.setItem('image', playersList[i].imageUrl)
            localStorage.setItem('status', playersList[i].status)
            window.location.href = 'puppy-details.html'
        })

        newElement.addEventListener('click', () => {
            
            if(teamContrainer.childElementCount <= 5){
                teamContrainer.appendChild(newElement)
                button.remove()
            }

        })

        newElement.addEventListener('dblclick', () => {
            newContainer.appendChild(newElement)
            newContainer.appendChild(button)
        })

        puppyContainer.appendChild(newContainer)
        newContainer.appendChild(newElement)
        newContainer.appendChild(button)
    }
}

renderData()