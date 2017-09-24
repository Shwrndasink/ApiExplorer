import React from 'react';

// use the component in your app!

export default function SendRequest(props) {
        return (
            <div className='sendRequest'>
                <button onClick={props.request}>Send Request</button>
            </div>
        )
}