import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import productReducer from './store/reducers/products'
import ShopNavigator from './navigation/ShopNavigator';

const rootReducer = combineReducers({
  products : productReducer
})
const store = createStore(rootReducer)

export default function App() {
  return (
    
    <Provider store={store}>
      <StatusBar />
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
