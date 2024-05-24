import './Card.css'

function Card (props) {
    return (
        <div className={`${props.className} Card`}>
            {props.children}
        </div>
    )
}

export default Card;