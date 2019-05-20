import { expect } from 'chai';
import { Pokemon } from "./pokemon";

describe('Pokemon tests', function() {
        it('Pokemon name is correctly set', function() {
            const name = 'Pickachu';
            const newPokemonInstance = new Pokemon(name);
            expect(newPokemonInstance.Name).to.equal(name);
        });
});