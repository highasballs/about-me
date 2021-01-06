import React, { Component } from "react";
import PropTypes from "prop-types";


class CommentsPage extends Component {
    render() {
        const {title,email,date} = this.props;

        return (
            <div className="Comments__me">
            <div className="Cards">
                <div className="Comments_1"></div>
                <ul>
                    <li> {title} </li>
                    <li> {email} </li>
                    <li> {date} </li>
                </ul>
            
            
            </div>     
       </div>
        )
    }
}

CommentsPage.defaultProps = {
    title : "İsim Soyisim",
    email : "....@gmail.com",
    date :  "12.12.2012"
}

CommentsPage.propTypes = {
    title : PropTypes.string.isRequired,
    email : PropTypes.string.isRequired,
    date :  PropTypes.string.isRequired

}


export default CommentsPage