import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TrackModal = ({ show, handleClose, title, desc, color }) => {
	return (
		<Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title className="text-center" style={{ fontFamily: 'Blockletter' }}>
					{title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-center">{desc}</Modal.Body>
			<Modal.Footer>
				<Button style={{ background: color }} onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default TrackModal;
