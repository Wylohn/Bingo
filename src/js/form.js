let newPropositions = [];
let propLol = [];
let propValo = [];
let propRL = [];
let propCustom = [];
let countProp = 0;
let proposition = document.getElementById('proposition')
const submit = document.getElementById('submit')

const addNewPropostion = (e, countProp, newPropositions) =>
{
    e.preventDefault()
    var choiceSelect = document.querySelector('select').value;
    var containerProp = document.querySelector('.container_new_propositions');
    var createDiv = document.createElement('div');

    createDiv.id = 'id-' + countProp;
    createDiv.className = 'case';

    containerProp.appendChild(createDiv);

    createDiv.innerHTML +=
        choiceSelect + " : " + proposition.value

    if (choiceSelect === 'LoL') {
        propLol.push({"id": countProp, "phrase": proposition.value })
    }
    if (choiceSelect === 'Valo') {
        propValo.push({"id": countProp, "phrase": proposition.value })
    }
    if (choiceSelect === 'RL') {
        propRL.push({"id": countProp, "phrase": proposition.value })
    }
    if (choiceSelect === 'Custom') {
        propCustom.push({"id": countProp, "phrase": proposition.value })
    }
    console.log(propLol, 'Lol');
    console.log(propValo, 'Valo');
    console.log(propRL, 'RL');
    console.log(propCustom, 'Custom');

    newPropositions.push({"id": countProp, "phrase": proposition.value })
    countProp += 1;
}

submit.addEventListener('click', (e) => {
    addNewPropostion(e, countProp, newPropositions)})
    