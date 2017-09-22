import React from 'react';

export default function Response(props) {
     // const { httpResponse } = props.httpResponse;
        return (
            <div className={`response`}>
                 {props.response}
            </div>
        )
}
