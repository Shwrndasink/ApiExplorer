import React, { Component } from 'react';

export default class RequestBody extends Component {
    render(){
        return (
            <div className="requestbody">
                <h3>Body:</h3>
                <div>
                    <label>First</label>
                    <input type="text" name="first" placeholder="firstname"/>
                </div>
                <div>
                    <label>Last</label>
                    <input type="text" placeholder="lastname"/>
                </div>
                <div>
                    <label>Phone</label>
                    <input type="text" placeholder="800-555-5555"/>
                </div>
            </div>
        )
    }
}