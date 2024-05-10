const Events = () => {

    const handleMyEvent = () => {

        console.log("Evento ativado!")

    }

    const renderSomenthing = (x) => {

        if (x) {
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

    return (
        <div>
            <div>
                {/* evento de clique simples */}
                <button onClick={handleMyEvent}>Clique aqui!</button>
            </div>
            <div>
                {/* função no evento de clique */}
                <button onClick={() => console.log("Clicou!")}>Clique aqui também!</button>
            </div>
            <div>
                {/* função no evento de clique fora do padrão nesse caso é recomendado que seja feita uma função
                com a declaração de nome como no caso de handleMyEvent */}
                <button onClick={() => {
                    if (true) {
                        console.log("Isso não deveria existir!")
                    }
                }}>Clique aqui por favor.</button>
            </div>
            {renderSomenthing(true)}
            {renderSomenthing(false)}
        </div>
    )
}

export default Events