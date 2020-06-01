import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import './Images.css'
import Popup from './Popup.js'

class Diploms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: '',
            imageUrlArray: [
                "/img/Diploma1.jpg",
                "/img/Diploma2.jpg",
                "/img/Diploma3.jpg",
                "/img/Diploma4.jpg",
                "/img/Diploma5.jpg",
                "/img/Diploma6.jpg"
            ],
            showModal: false,
            popImageUrl: ""
        }
    }
    handleLinkChange = (e) => {
        e.preventDefault()
        this.setState({
            imageUrl: !this.state.showModal
            
        })
    }
    handlePopup = (url) => {

        this.setState({
            showModal: !this.state.showModal,
            popImageUrl: url
        })
    }
    render() {
        let imageUrlArray = this.state.imageUrlArray
        const images = imageUrlArray.map((url, index) => {
            return (
                <img
                    className="singleImage"
                    src={url}
                    key={index}
                    onClick={()=>this.handlePopup(url)}
                />
            )
        })
        return (
            <div className="Images">

                {images}
                {this.state.showModal?(
                <Popup 
                popImageUrl={this.state.popImageUrl}
                closePopup={this.handlePopup}
                />
                ):null}
                <br />
            </div>
        )
    }
}


export default Diploms