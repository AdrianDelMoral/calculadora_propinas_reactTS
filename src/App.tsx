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
      <header className="bg-sky-700 py-6">
        <h1 className="text-center text-4xl font-black text-teal-100">Calculadora de Propinas y Consumición</h1>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-5 space-y-8 h-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-teal-100">
              Menú
            </h2>

            <div className="space-y-4">
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
            <div className="border border-cyan-900 p-5 space-y-10">
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
            <div className="flex justify-center items-center border border-cyan-900 p-5 rounded-lg space-y-10">
              <p className="text-2xl md:text-4xl font-black text-center text-teal-100">No hay nada añadido el pedido</p>
            </div>
          }

        </div>
      </main>
    </>
  )
}

export default App
