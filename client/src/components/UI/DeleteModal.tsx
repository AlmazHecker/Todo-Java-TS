import React from "react";
import styled from "@emotion/styled";
import { Modal } from "@mui/material";
import Button from "./Button";

interface DeleteModalProps {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
  open: boolean;
}

const DeleteModal = ({
  title,
  onConfirm,
  onCancel,
  open,
}: DeleteModalProps) => {
  return (
    <Modal open={open} onClose={onCancel}>
      <Container>
        <Title>{title}</Title>
        <Actions>
          <Button onClick={onCancel}>Cancel</Button>
          <Button color="error" onClick={onConfirm}>
            Confirm
          </Button>
        </Actions>
      </Container>
    </Modal>
  );
};

export default DeleteModal;

const Container = styled("div")`
  width: 300px;
  background: #ffffff;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  text-align: center;
  padding: 20px;
`;

const Actions = styled("div")`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  justify-content: center;
  gap: 10px;
`;

const Title = styled("h2")`
  font-size: 20px;
`;
