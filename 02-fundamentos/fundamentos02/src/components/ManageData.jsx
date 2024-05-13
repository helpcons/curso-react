import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number, setNumber] = useState(15)

    return (
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar valor</button>
            <div>
                <p>Valor: {number}</p>
                <button onClick={() => setNumber(25)}>Mudar valor da variável</button>
            </div>
        </div>
    )
}

export default ManageData