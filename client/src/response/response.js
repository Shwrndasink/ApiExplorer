import React from 'react';

// use the component in your app!

export default function Response(props) {
        return (
            <div className={`response`}>
                <pre>{JSON.stringify(props.response, null, 2)}</pre>
            </div>
        )
}
