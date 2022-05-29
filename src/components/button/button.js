const labelBotao = (label) => {
    alert(`A label desse botão é: ${label.label}`)
}

const Button = (label) => {
    return (
        <button
            onClick={() => { labelBotao(label) }}>
                Clique aqui
        </button>
    )
}

export default Button