import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';

class ReviewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrlArray: [
                ["/img/1.jpeg", "Анна", 23, new Date('2019-10-7T03:14:00'), 'Обратилась к Сергею, потому что нервы уже были на пределе.Ситуация казалась мне безвыходной – несмотря на то, что я работаю и учусь.Сама не заметила, как избавилась от огромного кома.Наконец-то увидела выход из сложившейся ситуации и теперь есть надежда... Большое спасибо Сергею.'],
                ["/img/2.jpg", "Людмила", 30, new Date('2012-12-17T03:24:00'), 'Большое спасибо Сергею.'],
                ["/img/3.jpg", "Анатолий", 33, new Date('2015-12-0T03:4:00'), 'Огромное спасибо Сергею.']
            ],
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
        const useStyles = makeStyles({
            root: {
                paddingTop: 10,
                display: 'flex',
                alignitems: 'center',
                justifycontent: 'center',
                width: 900,
                margin: 'auto',
                paddingRight: 900
            },
        });
        const classes = useStyles;

        let imageUrlArray = this.state.imageUrlArray
        function Transpose(a) {

            // Calculate the width and height of the Array
            var w = a.length || 0;
            var h = a[0] instanceof Array ? a[0].length : 0;

            // In case it is a zero matrix, no transpose routine needed.
            if (h === 0 || w === 0) { return []; }

            /**
             * @var {Number} i Counter
             * @var {Number} j Counter
             * @var {Array} t Transposed data is stored in this array.
             */
            var i, j, t = [];

            // Loop through every item in the outer array (height)
            for (i = 0; i < h; i++) {

                // Insert a new row (array)
                t[i] = [];

                // Loop through every item per item in outer array (width)
                for (j = 0; j < w; j++) {

                    // Save transposed data.
                    t[i][j] = a[j][i];
                }
            }

            return t;
        }

        const reviews = Transpose(imageUrlArray)[0].map((url,index) => {
            return (
                <div>
                {/* <img
                    className="image-review"
                    src={url}
                    key={index}
                />
                <div>
                    <p className="Card-text">
                        <h2>{name},{age}</h2>
                        {text}
                    </p>
                </div>  */}
                </div>
            )
        })
        return (
            <div className={classes.root}>{reviews}</div>
        )
    }
}

export default ReviewCard