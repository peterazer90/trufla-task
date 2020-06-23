import styled from "styled-components";

export const Container = styled.main`
    width: 1000px;
    min-height: 400px;
    height: 100%;
    background: #f4f4f4;
    padding:15px;
    margin:auto;
    `;

export const Typography = styled.h2(props => ({

    color: '#484848',
    textAlign: 'left',
    margin: '15px 0',
    textDecoration: props.decoration
}))

export const Flex = styled.div(props => ({
    justifyContent: props.justifyContent,
    display: 'flex',
    flexWrap: 'wrap'
}));

export const Col = styled.div(props => ({
    flex: props.flex,
    padding: props.padding
}));

export const FormInput = styled.select`
    padding: 0 15px;
    border: 2px solid #ccc;
    height: 40px;
    background: #fff;
    margin-bottom: 5px;
    width: 100%;
    border-radius: 5px;
    `;

export const ProductItem = styled(FormInput)`
    border: none;
    height: 100%;
    padding: 15px;
    `;
export const Badge = styled.li(props => ({
    background: props.background,
    textAlign: 'center !important',
    listStyle: 'none',
    cursor: 'pointer',
    width: '30px',
    height: '25px',
    padding: '0 10px',
    borderRadius: '3px'
}))