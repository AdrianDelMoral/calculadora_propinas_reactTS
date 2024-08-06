import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-cyan-400 py-4">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumición</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-center text-4xl font-black">MENÚ</h2>
          
          <div className="mt-10 space-y-3">
              {menuItems.map(item =>(
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
          </div>
        </div>
        
        <div className="border border-dashed border-cyan-300 p-5 rounded-lg space-y-10">
          <OrderContents 
            order={order}
            removeItem={removeItem}
          />

          <TipPercentageForm
          
          />

          <OrderTotals
            order={order}
          />

        </div>
      </main>
    </>
  )
}

export default App
