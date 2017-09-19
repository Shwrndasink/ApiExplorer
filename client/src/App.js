import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import RequestType from './requestType/requestType';
import RequestHeaders from './requestHeaders/requestHeaders';
import RequestBody from './requestBody/requestBody';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'https://myservice.com/users',
      method: 'POST',
      headers: {
        Authorization: 'AUTHCODE',
        ContentType: 'application/json'
      },
      body: [
        {
          name: 'first',
          type: 'text'
        },
        {
          name: 'last',
          type: 'text'
        },
        {
          name: 'phone',
          type: 'tel'
        }
      ],
      httpResponse: ''
    }
    this.updateHTTPMethod = this.updateHTTPMethod.bind(this);
    this.sendHTTPReq = this.sendHTTPReq.bind(this);
  }

  updateHTTPMethod(e) {
    this.setState({method: e.target.value});
  }

  sendHTTPReq(username, reponame){
    return fetch(`https://api.github.com/repos/${username}/${reponame}`)
    .then(res => res.json())
    .then(data => this.setState({httpResponse: data}))
    .catch(()=> `Oops something went wrong`)
    .finally(console.log('finally'));
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <p>Welcome to the Api Explorer. You can update the values of your request and see what the updated response will be.</p>
          <div>
            <RequestType updateMethod={this.updateHTTPMethod} value={this.state.method} />
            <RequestHeaders Authorization={['Authorization', this.state.headers.Authorization]} ContentType={['ContentType', this.state.headers.ContentType]}/>
            <RequestBody />
          </div>
        </div>
      </div>
    );
  }
}

export default App;