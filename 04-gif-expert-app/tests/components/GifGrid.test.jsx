import { render, screen } from "react-dom";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid.jsx/>', () => {
    const category = 'Sant Seiya';

    test('debe de mostrar el loading inicialmente ', () => {
    
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category   }/>)
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
    
    });

    test('debe de mostrar la imagen cuando se carga las imagenes usefetchGifs', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Serena',
                ulr: 'https://localhost/serena.jpg'
            },
            {
                id: '123',
                title: 'Rey',
                ulr: 'https://localhost/rey.jpg'
            }

        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        }); 

        render( <GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length);
    })
    

    
})
