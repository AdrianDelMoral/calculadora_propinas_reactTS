import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: () => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
    return (
        <button
            className="border-2 border-cyan-400 w-full p-3 flex justify-between rounded-lg hover:bg-gray-300 hover:transition-colors"
            onClick={() => addItem()}
        >
            <p>{item.name}</p>
            <p className="font-black">{item.price} €</p>
        </button>
    ) 
}
