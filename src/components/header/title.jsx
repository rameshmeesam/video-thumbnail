import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function HeaderTitle(props) {
    const {title} = props;
    return <Typography variant='h4'>{title}</Typography>;
}