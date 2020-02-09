import React from 'react';
import {View, Image} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Helpers, Images } from 'App/Theme'

const Background = (props) => {
    return (
        <View
            style={{flex: 1}}
            onPress={props.onPress}
        >
            <Image 
            style={{ position: 'absolute', marginTop: hp('25%') }} 
            source={Images.background} resizeMode={'contain'} />        
            {props.children}
        </View>
    );
};

export default Background;
