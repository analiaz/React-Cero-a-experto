import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
  
    test('getHeroeById debe retornar un heroe por id ', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({id: 1, name: 'Batman', owner: 'DC'})
    
    })
    
    test('getHeroesByOwner debe regresar heroes de DC ', () => {
        
        const owner = 'DC'
        const Heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(    [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);

        //mejor
        //expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
    });
    

})
