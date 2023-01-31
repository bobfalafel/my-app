import React from 'react';

function Homepage(props: { logged: boolean }) {
    return (
        <div className="Homepage">
            {props.logged ?
                <div className='positive'> Pos</div> :
                <div className='negative'> Neg</div>}
        </div>
    );
}

export default Homepage;
