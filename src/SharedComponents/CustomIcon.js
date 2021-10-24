import React from 'react'
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';

export default function CustomIcon(props) {
    React.useEffect(() => {
        const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );

        return () => {
            node.parentNode.removeChild(node);
        };
    }, []);
    return (
        <Icon className={props.name} fontSize="small"  style={{width:"100%"}}/>
    )
}
