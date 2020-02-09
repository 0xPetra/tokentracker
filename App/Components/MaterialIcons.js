import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


class MaterialIcons extends React.Component {
    render() {
        const {name, style} = this.props;
        const size = this.props.size;
        const color = this.props.color;

        return (
            <Icon
                name={name}
                size={size}
                style={style}
                color={color}
            />
        );
    }
}

export default MaterialIcons;