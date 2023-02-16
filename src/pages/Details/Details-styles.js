import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
text-align: center;
margin: 2rem 0rem;
h1 {
    margin: 2rem 0rem;
}
.movie {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
img {
    width: 200px;
    border-radius: 1rem;
}
button {
    background-color: #AE8CFA;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #FFF;
    padding: 0.4rem 2rem;
    margin-top: 2rem;
    font-size: 1rem;
    transition: all 0.3s;
}
button:hover {
    background-color: #D8C7FF;
    color: #000;
}
span {
    line-height: 130%;
    font-size: 1.2rem;
}
label {
    color: #AE8CFA;
    font-weight: bold;
}
`