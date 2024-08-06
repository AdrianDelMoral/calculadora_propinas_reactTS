import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipPercentageFormProps = {
    /* setTip: React.Dispatch<React.SetStateAction<number>> */
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip} : TipPercentageFormProps) {
    return (
        <div className="space-y-3">
            <h3 className="font-black text-2xl">Propina</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id} className="flex gap-2">
                        <label htmlFor={tipOption.id}>{tipOption.label}</label>
                        <input 
                            id={tipOption.id}
                            type="radio"
                            name="tip"
                            value={tipOption.value}
                            //* el "+" lo convierte a number, para asi no de problemas, pero valueAsNumber en muchos casos sirve, pero en tipo radio no funciona
                            onChange={e => setTip(+e.target.value)} 
                            checked={tipOption.value === tip} // En caso de que sean iguales tipOption y tip se habilitará
                        />
                    </div>
                ))}
            </form>
        </div>
    )
}
