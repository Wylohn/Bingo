let newPropositions = [];
let countProp = 0;
let proposition = document.getElementById('proposition')
const submit = document.getElementById('submit')

const addNewPropostion = (e, countProp, newPropositions) =>
{
    e.preveventDefault()
    var containerProp = document.querySelector('.container_new_propositions')

    createDiv.id = 'id-' + countProp;
    createDiv.className = 'case';

    containerProp.appendChild(createDiv);

    createDiv.innerHTML +=
        proposition.value

    newPropositions.push({"id": countProp, "phrase": proposition.value })
    countProp += 1;
}

submit.addEventListener('click', (e) => {
    console.log(e);
    addNewPropostion(e, countProp, newPropositions)})