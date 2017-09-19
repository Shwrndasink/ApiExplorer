import React from 'react';

export default function RequestType(props) {
    return (
        <div className="requesttype">
            <h3>Reguest Type:</h3>
            <select value={props.value} name="requesttypes" onChange={props.updateMethod}>
                <option value="POST">Post</option>
                <option value="GET">Get</option>
                <option value="PUT">Put</option>
                <option value="DELETE">Delete</option>
            </select>
            <h3>URL:</h3>
            <input type="text" value="https://myservice.com/users" readOnly/>
        </div>
    )
}