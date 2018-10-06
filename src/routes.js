import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
        Main
    }, {
        navigationOptions: {

            headerStyle: {
                backgroundColor: '#28ff2e'
            },
            headerTintColor: '#fff'
        }
    }
)