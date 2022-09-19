import React from "react";
import styled from "@emotion/styled";
import { Delete, Edit } from "@mui/icons-material";
import Icon from "./UI/Icon";
import Checkbox from "./UI/Checkbox";

interface TodoItemProps {
  createdAt: string;
  updatedAt: string;
  content: string;
  isDone?: boolean;
  id: number;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  changeStatus: (id: number) => void;
}

const TodoItem = ({
  createdAt,
  updatedAt,
  content,
  isDone,
  onDelete,
  onEdit,
  id,
  changeStatus,
}: TodoItemProps) => {
  return (
    <Container>
      <InnerContainer>
        <Checkbox checked={isDone} onClick={() => changeStatus(id)} />

        <Divider />

        <Content>{content}</Content>

        <Time>created at:{createdAt}</Time>
        <Time>updated at:{updatedAt}</Time>

        <Divider />

        <Icon Icon={Edit} onClick={() => onEdit(id)} />

        <Divider />

        <Icon Icon={Delete} onClick={() => onDelete(id)} />
      </InnerContainer>
    </Container>
  );
};

export default TodoItem;

const Container = styled("div")`
  background-color: rgb(30, 30, 30);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 1px;
`;

const InnerContainer = styled("div")`
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: auto 10px 1fr auto auto 10px auto 10px auto;

  background-color: white;
`;

const Content = styled("div")`
  font-size: 20px;
  margin-left: 10px;
`;

const Divider = styled("div")`
  height: 100%;
  background-color: rgb(30, 30, 30);
`;

const Time = styled("div")`
  font-size: 14px;
  align-self: flex-end;
  margin-left: 10px;
`;
