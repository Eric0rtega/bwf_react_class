import React from 'react';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';

import { CustomModalFooter, CustomModal } from './styled';

export const ModalComponent = ({show, onClose, children}) => {
    return (
            // <div className="modal fade show" id="exampleModal" tabIndex="-1" style={{display: 'block'}}>
            //     <div className="modal-dialog modal-lg modal-dialog-scrollable">
            //         <div className="modal-content p-0">
            //             <div className="modal-header">
            //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => onClose()}></button>
            //             </div>
            //             <div className="modal-body">
            //                 {children}
            //             </div>
            //             <div className="modal-footer">
            //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onClose()}>Close</button>
            //             </div>
            //         </div>
            //     </div>
            // </div>

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