import React from 'react'
import { Container, Icon, Wrapper } from './style';

const Input = ({
    children,
    // onClick,
    height,
    width,
    type,
    mr,
    ml,
    mb,
    mt,
    pl,
    onClick,
    onChange,
    placecholder,
    defaultValue,

}) => {
    return (
        <Wrapper mr={mr} ml={ml} mt={mt} mb={mb}>
            <Icon>
                {children}
            </Icon>
            <Container
            onChange={onChange}
            onClick={onClick}
            defaultValue={defaultValue}
            placeholder={placecholder}
            pl={pl}
            type={type}
            width={width}
            height={height}
            />
        </Wrapper>
    )
}

export { Input };
