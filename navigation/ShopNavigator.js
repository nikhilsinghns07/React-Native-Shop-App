import {createAppContainer,} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import OrdersScreen from '../screens/shop/OrdersScreen';
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: 'orange'
  }, 
}

const ProductsNavigator = createStackNavigator(
    {
    ProductsOverview:ProductsOverviewScreen,
    ProductDetail : ProductDetailsScreen,
    Cart : CartScreen
    },
    {defaultNavigationOptions: defaultNavOptions}
)

const OrdersNavigator = createStackNavigator({
  Orders : OrdersScreen
},{defaultNavigationOptions : defaultNavOptions}
)

// const ShopNavigator = createDrawerNavigator({
//   Products : ProductsNavigator,
//   Orders : OrdersNavigator
// } , {
//   contentOptions :{
//     activeTintColor : Colors.primary
//   }
// })

export default createAppContainer(ProductsNavigator)
