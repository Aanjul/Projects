import React, {Componenet} from 'react';
import { Image, View, Text,} from 'react-native';

class CustomCard extends Component {
    render() {
        return (
            <View>
                <Text>
                    {this.props.title}
                </Text>
                <Image  source={this.props.url} style= {{width: 300, height: 250}}/>

            </View>
        );
    }
}

export default CustomCard;