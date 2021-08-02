import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalBody from 'react-bootstrap/ModalBody';
//import CustomModalFooter from 'react-bootstrap/CustomModalFooter';

export const PaginationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const PaginationButton = styled(Button)`
    border: 1px dotted blue;
`;

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MovieDetailsContainer = styled.div`
`;

export const TitleRatingContainer = styled.div`
`;

export const MovieCard = styled(Card)`
    h5 {
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const StyledMovieCard = styled(Card)`
    h5 {
        font-size: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
    }
`;

export const MovieImage = styled(Image)`
    height: 100%;
    width: 100%;
`;

export const MovieListPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const MovieListContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    padding: 20px;
`;

export const CustomModal = styled(Modal)`

`;

export const modalBody = styled(ModalBody)`

`;

export const modalFooter = styled(ModalFooter)`

`;

export const CustomModalFooter = styled.div`

`;