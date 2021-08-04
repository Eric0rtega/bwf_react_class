import React from 'react';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';

import { CustomModalFooter, CustomModal } from './styled';

export const ModalComponent = ({show, onClose, children}) => {
    return (
            <CustomModal show={show}>
                <ModalBody>
                    { children }
                </ModalBody>
                <ModalFooter>
                    <Button type="button" variant="danger" onClick={onClose}>Close</Button>
                </ModalFooter>
            </CustomModal>
        );
}

// MovieDetails component nested inside the modal.
// Add event handlers on the MovieCard(s) so that clicking
// on a MovieCard will fetch detailed data about a selected
// movie. Updates the props passed to the MovieDetails component
// nested inside the modal with new data, and shows the modal.

// The modal should have a close button with an event handler
// that calls the OonClose prop passed in to hide the modal.