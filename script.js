const links = {
    'TRUTH':'https://api.truthordarebot.xyz/v1/truth',
    'DARE':'https://api.truthordarebot.xyz/api/dare',
    'NEVER HAVE I EVER':'https://api.truthordarebot.xyz/api/nhie',
    'PARANOIA':'https://api.truthordarebot.xyz/api/paranoia',
    'WOULD YOU RATHER':'https://api.truthordarebot.xyz/api/wyr'
}

async function runGame(){

    let gameType = document.getElementById('data-list').value

    if(gameType==='ALL')
        await showData(randomProperty(links))
    else
        await showData(links[gameType])


}

function randomProperty(obj) {
    let keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]]
}


async function showData(link){

    
    let data = await getData(link)
    
    let myDiv = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${data.type}</h5>
            <p class="card-text">${data.question}</p>
            </div>
        </div>
    `

    let divReference = document.getElementById('response-div')

    divReference.innerHTML = myDiv
}

async function getData(link){
    try{
        let response = await fetch(link) 
        let data = await response.json()
        return data
    }catch(e){  
        return {
            'type':'ERROR',
            'question':e.toString()

        }
    }
}

showData(randomProperty(links))
