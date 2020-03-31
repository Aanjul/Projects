import React, { Component} from 'react';

class Address extends Component {
    render (){
        return(
            <div>
            <img src= {this.props.imgUrl}/>
            <h4>{this.props.streetLineOne}</h4>
            <h4>{this.props.streetLineTwo}</h4>
            <h4>{this.props.state}</h4>
            <h4>{this.props.zip}</h4>
            </div>
        );
    }
}

Address.defaultProps = {
    imgUrl: './images/icon',
    streetLineOne: '1234 the way street',
    streetLineTwo: 'Apt 1',
    state: 'CA',
    zip: 90323
}

export default Address