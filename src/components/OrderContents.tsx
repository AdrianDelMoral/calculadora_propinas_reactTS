import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
order: OrderItem[]
}

export default function OrderContents({order} : OrderContentsProps) {
    return (
        <div>
            <h2 className="text-center text-4xl font-black">CONSUMICIÓN</h2>

            <div className="mt-10 space-y-3">
                {order.length === 0 ?
                    <p className="text-center">No hay nada añadido el pedido</p>
                : (
                    order.map(item => (
                        <div key={item.id}
                            className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
                        >
                            <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.quantity)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            
                            <button 
                                className="bg-red-600 h-8 w-8 rounded-xl text-white hover:bg-red-800 transition-all"
                            >
                                X
                            </button>
                        </div>

                    ))
                )
                }
            </div>
        </div>
    )
}
