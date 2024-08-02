import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    /* const [total, setTotal] = useState<number>(0) // Es redundante si ya el valor inicial lo indica, se llama generic de number si se lo indicamos
       const [auth, setAuth] = useState<boolean>(false) // Es redundante si ya el valor inicial lo indica, se llama generic de boolean  si se lo indicamos
    */

    const addItem = (item : MenuItem) => {
        console.log(item)
    }

    return {
        addItem
    }
}
