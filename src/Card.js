const Card = (props) => {
    const { card, isHomePage } = props;
    console.log('prop', card)
    return (
        <article className='person'>
            <span>{isHomePage ? 'Home' : 'About' }</span>
            <img src={card.image} alt="img" />
            <div>
                <h4>{card.name}</h4>
                <p>{card.age} years</p>
            </div>
        </article>
    )
}

export default Card;