import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
      <header className="bg-cyan-400 py-4">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumición</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-center text-4xl font-black">MENÚ</h2>

          <div className="mt-10 space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

          {order.length > 0 ? (
            <div className="border border-dashed border-cyan-300 p-5 rounded-lg space-y-10">
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />
            </div>
          ) :
            <div className="flex justify-center items-center border border-dashed border-cyan-300 p-5 rounded-lg space-y-10">
              <p className="text-4xl font-black text-center">No hay nada añadido el pedido</p>
            </div>
          }
      </main>
    </>
  )
}

export default App
