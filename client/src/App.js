import React, { Component } from 'react';
import axios from 'axios';
// import JSONFormatter from 'json-formatter-js';
import './App.css';
import Header from './header/header';
import RequestType from './requestType/requestType';
import RequestHeaders from './requestHeaders/requestHeaders';
import RequestBody from './requestBody/requestBody';
import Response from './response/response';
import SendRequestBtn from './sendReqBtn/sendReqBtn';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: 'https://localhost:4000/users',
      method: 'POST',
      headers: {
        Authorization: 'AUTHCODE',
        ContentType: 'application/json'
      },
      httpResponse: '',
      body: [
        {
          id: "1",
          type: "text"

        },
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
      ]
    }
    this.updateHTTPMethod = this.updateHTTPMethod.bind(this);
    this.sendHTTPReq = this.sendHTTPReq.bind(this);
  }

  updateHTTPMethod(e) {
    this.setState({method: e.target.value});
  }

  sendHTTPReq(username, reponame){
    console.log(this.state.url);
    let that = this;
    axios({
      method: this.state.method.toUpperCase(),
      url: this.state.url,
      ContentType: 'application/json',
      data: {
        id: this.state.body[0].id,
        firstName: this.state.body[1].name,
        lastName: this.state.body[2].name,
        phone: this.state.body[3].name
      }
    }).then(function(response){
      let responseString = JSON.stringify(response);
      console.log(responseString);
      that.setState({httpResponse: response })
    });
  }
  componentDidMount(){
    const that = this;
    axios({
      method: 'get',
      url: 'http://localhost:4000/users/',
      ContentType: 'application/json'
    }).then(function(response){
      console.log(response);
      let responseString = JSON.stringify(response);
      console.log(responseString);
      that.setState({httpResponse: response })
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <p>Welcome to the Api Explorer. You can enter new user values and HTPP Request type and see what the updated response will be.</p>
          <div>
            <RequestType updateMethod={this.updateHTTPMethod} value={this.state.method} url={this.state.url} />
            <RequestHeaders Authorization={['Authorization', this.state.headers.Authorization]} ContentType={['ContentType', this.state.headers.ContentType]}/>
            <RequestBody />
            <SendRequestBtn request={this.sendHTTPReq}/>
            <Response response={this.state.httpResponse} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
