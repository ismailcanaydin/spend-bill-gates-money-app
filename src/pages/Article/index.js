import React from 'react'
import Masonry from 'react-masonry-css'

function Article() {
    return (
        <div className='row mt-2'>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">asd
                {/* {characters.map((character) => (

                    <div key={character.char_id}>
                        <Link to={`/char/${character.char_id}`}>
                            <img alt={character.name} src={character.img} className='character' />

                            <div className='char_name'>{character.name} - <b>{character.nickname}</b></div>
                        </Link>
                    </div>
                ))} */}
            </Masonry >
        </div>
    )
}

export default Article