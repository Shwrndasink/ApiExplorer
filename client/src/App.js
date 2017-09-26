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
      url: 'http://localhost:4000/users',
      method: 'POST',
      headers: {
        Authorization: 'AUTHCODE',
        ContentType: 'application/json'
      },
      httpResponse: '',
      body: {
        id: {
          id: "",
          type: "text"
        },
        first: {
          name: '',
          type: 'text'
        },
        last: {
          name: '',
          type: 'text'
        },
        phone: {
          name: '',
          type: 'tel'
        }
      }
    }
    this.updateHTTPMethod = this.updateHTTPMethod.bind(this);
    this.sendHTTPReq = this.sendHTTPReq.bind(this);
    this.updateId = this.updateId.bind(this);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
  }
  updateId = (e) => {
    this.state.body.id.id = e.target.value;
  }
  updateFirstName(e){
    this.state.body.first.name = e.target.value;
  }
  updateLastName(e){
    this.state.body.last.name = e.target.value;
  }
  updatePhoneNumber(e){
    this.state.body.phone.name = e.target.value;
  }

  updateHTTPMethod(e) {
    this.setState({method: e.target.value});
    if(e.target.value === 'PUT' || e.target.value === 'DELETE'){
      this.setState({ url: `${this.state.url}/${this.state.body.id.id}`});
    } else {
      this.setState({ url: `http://localhost:4000/users`});
    }
  }

  sendHTTPReq(){
    console.log(this.state.url);
    let _this = this;
    axios({
      method: this.state.method.toUpperCase(),
      url: this.state.url,
      ContentType: 'application/json',
      data: {
        id: _this.state.body.id.id,
        firstName: _this.state.body.first.name,
        lastName: _this.state.body.last.name,
        phone: _this.state.body.phone.name
      }
    }).then(function(response){
      let responseString = JSON.stringify(response);
      console.log(responseString);
      _this.setState({httpResponse: response })
    });
  }
  componentDidMount(){
    const _this = this;
    axios({
      method: 'get',
      url: 'http://localhost:4000/users/',
      ContentType: 'application/json'
    }).then(function(response){
      console.log(response);
      let responseString = JSON.stringify(response);
      console.log(responseString);

      _this.setState({httpResponse: response })
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
            <RequestBody id={this.updateId} first={this.updateFirstName} last={this.updateLastName} phone={this.updatePhoneNumber} />
            <SendRequestBtn request={this.sendHTTPReq}/>
            <Response response={this.state.httpResponse} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
