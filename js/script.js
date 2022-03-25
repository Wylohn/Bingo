const clear = document.querySelector('.clear')

const shuffleArray = (array) =>
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const finalPhrases = (phrasesList, limit) =>
{
    const phrases = [...phrasesList]
    return shuffleArray(phrases).slice(0,limit)
}

console.log(finalPhrases(phrases, 25))


finalPhrases(phrases,25).forEach(element => {
    var selectContainer = document.querySelector('#grid');

    var createDiv = document.createElement('div');
    createDiv.id = 'id-' + element.id;
    createDiv.className = 'case'

    selectContainer.appendChild(createDiv);

    createDiv.innerHTML +=
        element.phrase 
    
    createDiv.addEventListener('click', () => {
        createDiv.classList.toggle('check');
    })
});

const clearCheckBox = () =>
{
    var casesChecked = document.querySelectorAll('.check');
    for(i = casesChecked.length -1 ; i >= 0; i --) {
        casesChecked[i].classList.remove('check');
    }
}

clear.addEventListener('click', clearCheckBox)


function getDimension() {
    var format_width = 880;
    var format_height = 880;
    var aspect_ratio = format_width / format_height;

    if ((window.innerWidth / window.innerHeight) <= aspect_ratio ) {
        //dimensions basée sur la hauteur
        document.getElementById("grid").classList.add("landscape");
    }
    else {
        //dimensions basée sur la largeur
        document.getElementById("grid").classList.remove("landscape");
    }
}

window.addEventListener('resize', function(){
    getDimension()
});

window.addEventListener('load', function() { 
    getDimension();
});

