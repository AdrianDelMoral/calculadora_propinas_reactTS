import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    /* const [total, setTotal] = useState<number>(0) // Es redundante si ya el valor inicial lo indica, se llama generic de number si se lo indicamos
       const [auth, setAuth] = useState<boolean>(false) // Es redundante si ya el valor inicial lo indica, se llama generic de boolean  si se lo indicamos
    */

    const addItem = (item : MenuItem) => {
        
        const itemExist = order.find(orderITem => orderITem.id === item.id) // buscar elemento en base a condicion
        if (itemExist) {
            // Encontrar el repetido, y añadirle uno a la cantidad
            const updatedOrder = order.map(orderItem => orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem
            )

            setOrder(updatedOrder)
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])            
        }        

    }
    console.log(order);
    
    

    return {
        addItem
    }
}
