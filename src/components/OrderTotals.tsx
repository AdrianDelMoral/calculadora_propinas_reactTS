import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    // Se ejecutará cuando cambie subtotalAmount o cuando cambie order
    const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip])
    
    // Se ejecutará cuando cambie subtotalAmount o cuando cambie tipAmount
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl text-teal-100">Total y Propina:</h2>
                <p className="flex justify-between text-teal-100 py-3 border-b">Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
                </p>
                
                <p className="flex justify-between text-teal-100 py-3 border-b">Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                
                <p className="flex justify-between text-teal-100 py-3">Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-sky-950 rounded-lg cursor-pointer p-3 uppercase text-teal-100 font-bold mt-10 hover:bg-green-950 transition-all"
                onClick={placeOrder}
            >
                Guardar Pedido
            </button>
        </>
    )
}
