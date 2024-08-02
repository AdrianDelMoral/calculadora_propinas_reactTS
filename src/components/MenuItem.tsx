import { formatCurrency } from "../helpers"
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item : MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
    return (
        <button
            className="border-2 border-cyan-400 w-full p-3 flex justify-between rounded-lg hover:bg-gray-300 hover:transition-colors"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">{formatCurrency(item.price)}</p>
        </button>
    ) 
}
