import React from 'react'
import { View, Text ,Image , StyleSheet, Button, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;
    
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
       <TouchableCmp onPress={props.onViewDetail}>
            <View style={styles.product}>
                <Image style={styles.image}source={{uri : props.image}}/>
                <View style={styles.detail}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>Rs {props.price}</Text>
                </View>
                
                <View style={styles.actions}>
                    <Button title="View Details" onPress={props.onViewDetail}/>
                    <Button title="To Cart" onPress={props.onAddToCart}/>
                </View>
            </View>
       </TouchableCmp>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    product :{
        elevation : 5,
        backgroundColor : 'white',
        borderRadius : 10,
        height: 300,
        margin: 20,
    },
    image :{
        width: '100%',
        height: '60%',
    },
    title :{
        fontSize : 28,
        marginVertical : 4,
    },
    price :{
        fontSize : 20,
        color:'#888',
    },
    actions : {
        flexDirection:'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        height: '25%',
        padding: 10
    },
    detail : {
        alignItems : 'center',
        height: '20%',
        padding: 10,
    }
})