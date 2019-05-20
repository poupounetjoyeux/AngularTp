import {Move} from "./app/shared/models/move/move";
import {Pokemon} from "./app/shared/models/pokemon/pokemon";
import {Battle} from "./app/shared/models/battle/battle";

const megaPuchMove = new Move("Mega Punch", "Mega Punch Description", 85, 20);
const rollingStonesMove = new Move("Rolling Stones", "Rolling Stones Description", 80, 10);
const canonAOMove = new Move("Canon O", "Canon O Description", 10, 2);
const pikachu = new Pokemon('Pikachu', 90, [megaPuchMove]);
const carapuce = new Pokemon('Carapuce', 43, [rollingStonesMove, canonAOMove]);

const battle = new Battle(carapuce, pikachu);
while(!battle.isBattleEnded()) {
    const carapuceMove = Math.floor(Math.random() * (carapuce.Moves.length + 1));
    const pikachuMove = Math.floor(Math.random() * (pikachu.Moves.length + 1));
    const carapuceMoveName = carapuceMove == carapuce.Moves.length ? '' : carapuce.Moves[carapuceMove].Name;
    const pikachuMoveName = pikachuMove == pikachu.Moves.length ? '' : pikachu.Moves[pikachuMove].Name;
    var firstRandomAccuracy = Math.floor(Math.random() * 101);
    var secondRandomAccuracy = Math.floor(Math.random() * 101);
    battle.launchTurn(carapuceMoveName, pikachuMoveName, firstRandomAccuracy, secondRandomAccuracy);
}