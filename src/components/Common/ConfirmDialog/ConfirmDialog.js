import {Modal,Button} from 'react-bootstrap';

export default function ConfirmDialog({show,onClose,onDelete}){

    return(

        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete The Album?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Are you sure you want to permenantly delete this Album?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>No</Button>
                <Button variant="primary" onClick={onDelete}>Yes</Button>
            </Modal.Footer>
        </Modal>

    );

}