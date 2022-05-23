import React from 'react'
import { Container } from './style';

const Button = ({
    children,
    onClick,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt
}) => {
    return (
        <Container
        mt={mt}        
        mr={mr}        
        mb={mb}        
        ml={ml}        
        type={type}
        width={width}
        height={height}        
        onClick={onClick}
        >
            {children}
        </Container>
    )
}

export { Button };
