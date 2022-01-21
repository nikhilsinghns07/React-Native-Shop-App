import React from 'react'
import { View, Text , StyleSheet, ScrollView, Button ,Image} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useSelector,useDispatch } from 'react-redux'
import * as cartActions from '../../store/actions/cart'

const ProductDetailsScreen = (props) => {
    const productId = props.navigation.getParam('productId')
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod=> prod.id === productId))
    const dispatch = useDispatch()
    
    return (
        <ScrollView>
            <Image style={styles.image}source={{uri:selectedProduct.imageUrl }}/>
            <Button title="Add To Cart" onPress={()=> {
                dispatch(cartActions.addToCart(selectedProduct))
            }}/>
            <Text style={styles.price}> Rs. {selectedProduct.price}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>
        </ScrollView>
    )
}

ProductDetailsScreen.navigationOption = navData => {
    return {
        headerTitle : navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
    },
    price : {
        fontSize : 20,
        color: '#888',
        textAlign : 'center',
        marginVertical : 20
    },
    description:{
        fontSize : 14,
        textAlign : 'center',
        marginHorizontal : 10,
    }
})
export default ProductDetailsScreen
