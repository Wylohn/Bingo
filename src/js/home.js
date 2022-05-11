let bingoSelected = [];

const selectBingo = () => 
{
    if (choiceSelect === 'LoL') {
    bingoSelected = propLoL;
    }
    else if (choiceSelect === 'Valo') {
    bingoSelected = propValo;
    }
    else if (choiceSelect === 'RL') {
    bingoSelected = propRL;
    }
    else if (choiceSelect === 'Custom') {
    bingoSelected = propCustom;
    }
}

