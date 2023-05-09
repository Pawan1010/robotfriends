import React from 'react';

const Card = (props) => {
    const {name, email, id} = props;
    return (
    <div className='tc bg-light-blue dib br4 pa2 ma2 grow bw4 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    </div>
    );
}

export default Card