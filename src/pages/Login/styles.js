import styled from 'styled-components'

export const Container = styled.div`
    background: #00897B;
    max-width: 700px;    
    margin: 80px auto;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: #fff;
    }
`;

export const Form = styled.form`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        background: #B71C1C;
        padding: 5px 10px;
        color: #fff;
        font-size: 16px;
        border-radius: 4px;
    }

    input {
        font-size: 16px;
        background: #fff;
        margin-top: 10px;
        padding: 10px 15px;
        border: ${props => props.error ? '1px solid red' : 0 };
        border-radius: 4px;
        width: 40%;
    }

    button {
        border: none;
        color: #fff;
        background: #1A237E;
        margin-top: 14px;
        border-radius: 4px;
        padding: 10px 15px;
        font-size: 20px;
        font-weight: bold;
        width: 40%;
    }
`;
