import { createStackNavigator } from 'react-navigation-stack';
import DetalhesDoContatoTela from '../telas/DetalhesDoContatoTela';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import MapaTela from '../telas/MapaTela';
import NovoContatoTela from '../telas/NovoContatoTela';
import { createAppContainer } from 'react-navigation';


const ContatosNavigator = createStackNavigator({
    ListaDeContatos: ListaDeContatosTela,
    DetalhesDoContato: DetalhesDoContatoTela,
    NovoContato: NovoContatoTela,
    Mapa: MapaTela
});

export default createAppContainer(ContatosNavigator);
