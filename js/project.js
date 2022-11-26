

async function card1Data2() {
    const res = await fetch('https://api.punkapi.com/v2/beers');
    const finalRes = await res.json();
    console.log(finalRes)

    /*Card 1 - Home*/

    const card1Title = document.getElementById("card4-title")
    card1Title.innerText = finalRes[0].name

    const card1Tagline = document.getElementById("card4-tagline")
    card1Tagline.innerText = finalRes[0].tagline

    const card1Image= document.getElementById("card4-img")
    card1Image.src = finalRes[0].image_url

    /*Card 2 - Home*/

    const card2Title = document.getElementById("card5-title")
    card2Title.innerText = finalRes[1].name
    
    const card2Tagline = document.getElementById("card5-tagline")
    card2Tagline.innerText = finalRes[1].tagline

    const card2Image= document.getElementById("card5-img")
    card2Image.src = finalRes[0].image_url

    /*Card 3 - Home*/

    const card3Title = document.getElementById("card6-title")
    card3Title.innerText = finalRes[3].name

    const card3Tagline = document.getElementById("card6-tagline")
    card3Tagline.innerText = finalRes[3].tagline

    const card3Image= document.getElementById("card6-img")
    card3Image.src = finalRes[0].image_url
}

card1Data2()