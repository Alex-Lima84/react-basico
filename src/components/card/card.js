const cardText = 'Texto colorido e com letras maiúsculas'
const cardTextUppercase = cardText.toUpperCase()
const textColor = 'blue'

const Card = () => {
   
    return (
        <div className='card'>
            <p style={{color: textColor}}>{cardTextUppercase}</p>
        </div>
    )
}

export default Card