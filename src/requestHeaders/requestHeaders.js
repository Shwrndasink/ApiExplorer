import React from 'react';

export default function RequestHeaders(props) {
    return (
        <div className="requestheaders">
        <h3>Headers:</h3>
           <table>
               <tbody>
               <tr>
                   <td>{props.Authorization[0]}</td>
                   <td>{props.Authorization[1]}</td>
               </tr>
               <tr>
                   <td>{props.ContentType[0]}</td>
                   <td>{props.ContentType[1]}</td>
               </tr>
               </tbody>
           </table>
        </div>
    )
}