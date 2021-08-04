import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';
//import CustomModalFooter from 'react-bootstrap/CustomModalFooter';

export const PaginationContainer = styled.div`
    background: dark-grey;
    width: 100%;
    height: auto;
    display: block;
    position: fixed;
    bottom: 0;
    margin-top: 100px;
`;

export const PaginationButton = styled(Button)`
    border: 5px dotted blue;
`;

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MovieDetailsContainer = styled.div`
    
`;

export const MovieDetails = styled.div`

`;

export const TitleRatingContainer = styled.div`
`;

export const MovieCard = styled(Card)`
    
`;

export const StyledMovieCard = styled(Card)`
    font-size: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 15px 0;
`;

export const MovieImage = styled(Image)`
    height: auto;
    width: 100%;
    padding: 2px;
    border-radius: 5px;
`;

export const MovieListPageContainer = styled.div`
    display: inline-flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
`;

export const SearchBarContainer = styled.div`
    display: inline-flex;
    position: absolute;
    right: 11%;
    top: 3.1%;
`;

export const CustomModal = styled(Modal)`

`;

export const modalBody = styled(ModalBody)`

`;

export const modalFooter = styled(ModalFooter)`

`;

export const CustomModalFooter = styled.div`

`;

//Styles for User Movie List Page
export const MovieListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;