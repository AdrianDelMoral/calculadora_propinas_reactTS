import { MenuItem } from "./components/MenuItem"
import { menuItems } from "./data/db"

function App() {

  return (
    <>
      <header className="bg-cyan-400 py-4">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumición</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-center text-2xl font-semibold">Menú</h2>

          {menuItems.map(item =>(
            <MenuItem
              key={item.id}
            />
          ))}
        </div>
        
        <div>
          <h2 className="text-center text-2xl font-semibold">Consumición</h2>

        </div>
      </main>
    </>
  )
}

export default App
