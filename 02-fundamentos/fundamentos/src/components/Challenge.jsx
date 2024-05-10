const Challenge = () => {

    const a = 2
    const b = 3

    const handleSum = () => {
        const soma = a + b
        console.log(soma)
    }

    return (
        <div>
            <h1>Desafio 2</h1>
            <p>Primeiro número é: {a}</p>
            <p>Segundo número é: {b}</p>
            <div>
                <button onClick={handleSum}>Soma dos valores</button>
            </div>
        </div>
    )
}

export default Challenge