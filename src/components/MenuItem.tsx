import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item : MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
    return (
        <button
            className="border border-cyan-900 w-full p-3 flex justify-between hover:bg-green-950 hover:transition-colors items-center"
            onClick={() => addItem(item)}
        >
            <div className="">
                <p className="text-start font-bold mb-2 text-teal-100">{item.name}</p>
                <p className="text-start text-sm text-teal-100">{item.description}</p>
            </div>
            <p className="font-black text-sky-800">{formatCurrency(item.price)}</p>
        </button>
    ) 
}
