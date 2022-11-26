
/* Cards in Projects page */

async function getDataProjects() {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const finalRes = await res.json();
    console.log(finalRes)

    /*Main - Projects*/

    const projectTitle = document.getElementById("project-title")
    projectTitle.innerText = finalRes[0].name

    const projectTagline = document.getElementById("project-tagline")
    projectTagline.innerText = finalRes[0].tagline

    const projectTips = document.getElementById("project-tips")
    projectTips.innerText = finalRes[0].brewers_tips

    const projectDescription = document.getElementById("project-description")
    projectDescription.innerText = finalRes[0].description


    /*Card 1 - Projects*/

    const card1Title = document.getElementById("card1-title")
    card1Title.innerText = finalRes[0].name

    const card1Tagline = document.getElementById("card1-tagline")
    card1Tagline.innerText = finalRes[0].tagline

    const card1Image= document.getElementById("card1-img")
    card1Image.src = finalRes[0].image_url

    /*Card 2 - Projects*/

    const card2Title = document.getElementById("card2-title")
    card2Title.innerText = finalRes[1].name
    
    const card2Tagline = document.getElementById("card2-tagline")
    card2Tagline.innerText = finalRes[1].tagline

    const card2Image= document.getElementById("card2-img")
    card2Image.src = finalRes[0].image_url

    /*Card 3 - Projects*/

    const card3Title = document.getElementById("card3-title")
    card3Title.innerText = finalRes[3].name

    const card3Tagline = document.getElementById("card3-tagline")
    card3Tagline.innerText = finalRes[3].tagline

    const card3Image= document.getElementById("card3-img")
    card3Image.src = finalRes[0].image_url
}

getDataProjects()


/* Date in Projects Page */

function dateToday() {
}

dateToday()