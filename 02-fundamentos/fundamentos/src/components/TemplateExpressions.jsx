const TemplateExpressions = () => {

    const name = "Helder"
    const data = {
        age: 33,
        job: "dev",
    }

    return (
        <div>
            <h1>Olá, {name} tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    )
}

export default TemplateExpressions