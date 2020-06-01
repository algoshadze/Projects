import React from 'react'

import { connect } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom'

class Blog extends React.Component {
  createListItems() {
    return this.props.blogs.map((blog) => {
      const useStyles = {
        marginTop: 40,
        fontSize: 20, 
        maxWidth: 1000, 
        alignitems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        paddingTop: 25,

        }
      return (
        <div style={useStyles} key={blog.key}>
          <img src={blog.image} className="image-review"></img>
          <div>
            <p className="Card-text">
              <h2>{blog.title}</h2>
              {blog.description}
              <NavLink to={blog.link} className="read-more" exact >
                <p>Читать далее...</p>
              </NavLink>
            </p>
          </div>
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        {this.createListItems()}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {
    blogs: state.blogs
  }
}
export default connect(mapStateToProps)(Blog)