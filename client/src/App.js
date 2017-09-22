import React, { Component } from 'react';
import axios from 'axios';
// import JSONFormatter from 'json-formatter-js';
import './App.css';
import Header from './header/header';
import RequestType from './requestType/requestType';
import RequestHeaders from './requestHeaders/requestHeaders';
import RequestBody from './requestBody/requestBody';
import Response from './response/response';

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
    axios({
      method: 'post',
      url: 'http;//localhost:4000/users/',
      ContentType: 'application/json',
      data: {
        id: "1",
        firstName: 'Fred',
        lastName: 'Flintstone',
        phone: 'whatever'
      }
    }).then(function(response){
      console.log(response);
    });
  }
  componentDidMount(){
    const that = this;
    axios({
      method: 'get',
      url: 'http://localhost:4000/users/',
      ContentType: 'application/json',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
        phone: 'whatever'
      }
    }).then(function(response){
      debugger;
      console.log(response);
      // let responseString = new JSONFormatter(response).render();
      let responseString = JSON.stringify(response);
      // console.log(typeof responseString);
      console.log(responseString);
      that.setState({httpResponse: response })
    })

    // axios.post('http://localhost:4000/users', {
    //   firstName: 'Fred',
    //   lastName: 'Flintstone',
    //   phone: 'what'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
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
            <Response response={this.state.httpResponse} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
