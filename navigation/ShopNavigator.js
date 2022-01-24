import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import Colors from '../constants/Colors'
import ProductDetailsScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'

const ProductsNavigator = createStackNavigator(
    {
    ProductsOverview:ProductsOverviewScreen,
    ProductDetail : ProductDetailsScreen,
    Cart : CartScreen
    },

    {
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: 'orange'
            }, 
          }
    }

)
export default createAppContainer(ProductsNavigator)
