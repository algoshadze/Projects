import React from 'react';

class ReviewForm extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
                <form>
                    <label>
                        <input type="text" placeholder="Ваше имя" style={{ marginTop: 20, width: 200, marginRight: 15 }} />
                    </label>
                    <label>
                        <input type="number" placeholder="Ваш возраст" style={{ width: 200, marginLeft: 15 }} />
                        <br />
                    </label>
                <label style={{ marginTop: 20}}>
                    <input type="email" placeholder="Ваше сообщение" style={{ marginTop: 20, width: 440, height: 350 }} />
                </label>
                <br />
                <button style={{ marginTop: 20}} className="button-formeview" onClick={this.props.closePopup}>Отправить</button>
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