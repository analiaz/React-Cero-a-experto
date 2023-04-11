import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Prueba en <FristApp />', () => {
  
    test('debe de hacer match von el snapshot', () => {

        const title = 'Hola, Soy Goku';
        const {container} = render( <FirstApp title={ title } />);

        expect( container).toMatchSnapshot();

    });

})
