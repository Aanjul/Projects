import React, {Fragment} from 'react';
import CustomCard from './CustomCard';

const App = () => {
    let firstImage = {
        uri: 'https://testtrouble.com'
    };
    let secondImage = {
        uri: 'https://test.com'
    };
    return (
        <Fragment>
            <CustomCard url={firstImage} title={'First Title'}/>
            <CustomCard url={secondImage} title={'Second Title'}/>
        </Fragment>
    );
};

export default App;
