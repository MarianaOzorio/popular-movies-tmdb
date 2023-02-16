import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 12vh;
    margin-bottom: 2rem;           
    background-color: #AE8CFA;  
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 3rem;
    h1 {
        font-size: 3rem;
        margin-right: 2rem;        
    }
    p {
        font-size: 1.5rem;
    }
    @media screen and (max-width: 780px) {
        p {
            font-size: 1.2rem;
            line-height: 100%;
            text-align: right;
        }
    }
`

export const MovieList = styled.ul`
    padding: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`

export const MovieCard = styled.li`
    width: 200px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    img {
        width: 190px;
        border-radius: 1rem;
        margin-bottom: 1rem;
        transition: all 0.3s;
    }
    img:hover {
        transform: scale(1.1);
    }
    a {
        font-weight: bold;
        font-size: 1.3rem;
        color: #FFF;
        text-decoration: none;
    }
    a:hover {
        color: #AE8CFA;
    } 
`