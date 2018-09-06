import { createStackNavigator } from 'react-navigation';
import Login from './components/login/Login';
import TypeFood from './components/type-food/TypeFood';
import Food from './components/food/Food';
import Product from './components/product/Product';
import Calculator from './components/calculator/Calculator';

export default App = createStackNavigator({
  Login: { screen: Login },
  TypeFood: { screen: TypeFood },
  Food: { screen: Food },
  Product: { screen: Product },
  Calculator: { screen: Calculator },
  headerMode: 'none'
});