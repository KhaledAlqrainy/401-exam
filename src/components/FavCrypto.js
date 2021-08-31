import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FavCards from './FavCards'
import ModalForm from './ModalForm'



class FavCrypto extends React.Component {

  constructor(props){
    super(props);
    this.state={
      crudData:[],
      showCrud:false,
      updateData:{},
      showModal:false
    }
  }

  componentDidMount = async () => {
    const req = await axios.get('http://localhost:3050/crypto/fav');
    this.setState({crudData:req.data , showCrud:true})
  };

  deleteFav = async (id) => {
    await axios.delete(`http://localhost:3050/crypto/fav/${id}`);
    const items = this.state.crudData.filter(i => i._id !== id);
    this.setState({crudData:items})
  };

  handleModal = (item) => {
    this.setState({showModal:true, updateData:item})
  };

  updateFav = async(e) => {
    const id = this.state.updateData._id;
    const body = {
      title : e.target.title.value,
      description : e.target.description.value,
      toUSD : e.target.toUSD.value,
      image_url : e.target.image_url.value
    }
    const req = await axios.put(`http://localhost:3050/crypto/fav/${id}`, body);
    const newItem = this.state.crudData.map(obj => {
      if (obj._id === id){
        obj.title = req.data.title
        obj.description = req.data.description
        obj.toUSD = req.data.toUSD
        obj.image_url = req.data.image_url

        return obj
      }
      return obj
    })
    this.setState({crudData:newItem})
    this.handleModal({});
    this.setState({showModal:false})

  };

  close = () => {
    this.setState({showModal:false})
  }

  render() {
    return(
      <>
          {this.state.showCrud && 
          <FavCards 
        crudData={this.state.crudData}
        deleteFav={this.deleteFav}
      handleModal={this.handleModal} />
      }

      {this.state.showModal && 
          <ModalForm 
        updateData={this.state.updateData}
        updateFav={this.updateFav}
        showModal={this.state.showModal}
      close={this.close} />
      }

      </>
    )
  }
}

export default FavCrypto;
