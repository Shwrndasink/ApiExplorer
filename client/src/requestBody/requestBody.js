import React from 'react';

export default function RequestBody(props){
        return (
            <div className="requestbody">
                <h3>Body:</h3>
                <div>
                    <label>Id</label>
                    <input type="text" id="id" placeholder="userid" onChange={props.id}/>
                </div>
                <div>
                    <label>First</label>
                    <input type="text" name="first" placeholder="firstname" onChange={props.first}/>
                </div>
                <div>
                    <label>Last</label>
                    <input type="text" placeholder="lastname" onChange={props.last}/>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" placeholder="800-555-5555" onChange={props.phone}/>
                </div>
            </div>
        )
}