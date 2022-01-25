import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

const OrdersScreen = (props) => {
    const order = useSelector(state => state.orders.orders)
    return (
        <FlatList 
            data={orders}
            keyExtractor={item => item.id}
            renderItem={ itemData => <Text> {itemData.item.totalAmount} </Text> }     
        />
        )
}

OrdersScreen.navigationOptions = {
    headerTitle : "Your Orders"
}

export default OrdersScreen