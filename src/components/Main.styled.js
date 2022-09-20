import styled from 'styled-components'

export const Wrapper = styled.div`
    // height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
`;

export const MainTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    color: grey;
    dsplay: block;
`;

export const Button = styled.button`
    display: block;
    margin-top: 20px;
    width: 120px;
    font-size: 16px;
    color: black;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    border: 1px solid rgba(75, 163, 191, 0.3);
    border-radius: 3px;
    cursor: pointer;
        &:focus {
            border: 1px solid rgba(75, 163, 191, 0.7);
        }
`;

export const Section = styled.div`
    width: 500px;
`;

export const Container = styled.div`
    width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    li {
        list-style-type: none;
    };

    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
`;

export const Label = styled.label`
    line-height: 147.6%;
    color: grey;
    transition: top .2s;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 0.125rem solid #50decd;
    width: 300px;
    height: 2rem;
    font-size: 1.0625rem;
    padding-left: 0.875rem;
    line-height: 147.6%;
    padding-top: 0.825rem;
    padding-bottom: 0.5rem;
        &:focus {
            outline: none;
            border-bottom: 0.125rem solid #decb50;
        }
`;