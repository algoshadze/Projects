import React from 'react';
const reviews = require('../../reducer/review-data').reviews

class ReviewForm extends React.Component {
  addComment(){
        
    let name = document.getElementById('newcommentname').value
    let age = document.getElementById('newcommentage').value
    let text = document.getElementById('newcommentage').text
    if(name != null || age !=null || text !=null)
    {
        alert(name+","+age)
        reviews.push({id: reviews.length+1 ,name: name, age: age})
    }
    else{
      alert('Заполните пожалуйста форму!')
    }
  }
    render() {
      
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
                <form>
                    <label>
                        <input id='newcommentname' type="text" placeholder="Ваше имя" style={{ marginTop: 20, width: 200, marginRight: 15 }} />
                    </label>
                    <label>
                        <input id='newcommentage' type="number" placeholder="Ваш возраст" style={{ width: 200, marginLeft: 15 }} />
                        <br />
                    </label>
                <label style={{ marginTop: 20}}>
                    <input type="email" placeholder="Ваше сообщение" style={{ marginTop: 20, width: 440, height: 350 }} />
                </label>
                <br />
                <button onClick={this.addComment()} style={{ marginTop: 20}} id="SendComment" className="button-formeview">Отправить</button>
                <button className="button-formeview" onClick={this.props.closePopup}>Закрыть</button>
                </form>
            </div >
          
          </div>

      );
    }
  }
  class AddReview extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='app'>
          <button className='button-review' onClick={this.togglePopup.bind(this)}><span>Оставьте свой отзыв</span></button>
        
          {this.state.showPopup ? 
            <ReviewForm
              text='Ваш отзыв'
              closePopup={this.togglePopup.bind(this)}
            />
            
            : null
          }
          
        </div>
      );
    }
  };
  export default AddReview
