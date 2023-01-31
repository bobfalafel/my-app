import React from 'react';

function About(props: { logged: boolean }) {
    return (
        <div className="About">
            {props.logged ?
                <div className='positive'> Pos</div> :
                <div className='negative'> Neg</div>}
        </div>
    );
}

export default About;
