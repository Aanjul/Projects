import React, {Component} from  'react';
import {
    Image,
    View,
    Button,
    Text
}from 'react-native';

class  CustomCard extends Component {
    constructor(props){
        super(props)
        this.state = {isHidden : false} 
    }
    showHideText = () => {
        this.setState ({ isHidden : !this.state.isHidden})
    }
    render (){
        return(
            <View>
                {!this.state.isHidden && <Text>
                    {this.props.title}
                </Text>}
                <Image source=  {this.props.url} style = {{width: 300, height: 200 }}/>
                <Button title="Click Me" onPress={this.showHideText}/>
            </View>
        );
    }
}

export default CustomCard;