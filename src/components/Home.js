import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import ApiData from './ApiData'


class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      apiData :[],
      showData: false
    }
  }

  componentDidMount = async () => {
    const req = await axios.get('http://localhost:3050/crypto');
    this.setState({apiData:req.data , showData:true})
  };

  addToFav = async(idx) => {
    const req = await axios.post('http://localhost:3050/crypto/fav');
  }

  render() {
    return (
      <>
        <h1>Crypto List</h1>
        {this.state.showData && 
        <ApiData 
        apiData={this.state.apiData}
        addToFav={this.addToFav} />
        }
      </>
    )
  }
}

export default Home;
