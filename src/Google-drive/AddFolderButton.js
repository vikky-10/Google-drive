import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import { database } from "../firebase";
// import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { useAuth } from "../context/Authcontex";
function AddFolderButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { currentUser } = useAuth();
  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // if (currentFolder == null) return;
    // // Create a folder in the database
    database.folders.add({
      name: name,
      //   parentId: currentFolder.id,
      userId: currentUser.uid,

      createdAt: database.getCurrentTimestamp(),
    });
    setName("");
    closeModal();
  }
  return (
    <>
      <Button onClick={openModal} variant="outline-success" size="sm">
        <CreateNewFolderIcon />
      </Button>
      <Modal
        show={open}
        onHide={closeModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Folder Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="success" type="submit">
              Add Folder
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddFolderButton;
