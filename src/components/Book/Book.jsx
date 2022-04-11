import React from 'react'

const book = (props) => {

    const { _id, name, author, description, price, available, image  } = props.book;
    // console.log(author)
    return (
        <div className='book_first_div'>
            <img src={image} alt={name} />
            <article>
                by {author}
            </article>
            <h3>{name}</h3>
            <p>{description}</p>
            <h2>{price}</h2>
            <button>update</button>
            <button>delete</button>
        </div>
    )
}

export default book