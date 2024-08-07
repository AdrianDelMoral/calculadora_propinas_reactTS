import { formatCurrency } from "../helpers"
import { MenuItem, OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void // utilizamos void para indicar que no devolvemos ningún valor, pero indicamos en id que recibe y de que type
}

export default function OrderContents({order, removeItem} : OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-2xl md:text-4xl text-teal-100">Productos Seleccionados</h2>

            <div className="mt-10 space-y-3">
                {
                    order.map(item => (
                        <div key={item.id}
                            className="flex justify-between items-center border-b border-cyan-900 py-5 space-x-8"
                        >
                            <div className="grid grid-cols-2 items-center w-full">
                                <div className="flex justify-between space-x-8items-center w-full">
                                    <p className="text-lg text-teal-100">
                                        {item.name}
                                    </p>
                                    <p className="text-lg text-teal-100">
                                        {item.quantity}
                                    </p>
                                </div>
                                <p className="font-black text-teal-100 text-end">
                                    {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>
                            
                            <button 
                                className="bg-red-600 h-8 w-8 rounded-lg text-white hover:bg-red-800 transition-all "
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
