import React from "react";
import { useSearchParams } from "../utils/hooks/useSearchParams";
import DeleteTodo from "./DeleteTodo";
import UpdateTodo from "./UpdateTodo";

export default function TodoModals() {
  const [params, setParams] = useSearchParams();

  const onCloseModal = () => setParams({});

  switch (params?.modal) {
    case "EDIT":
      return <UpdateTodo todoId={params?.todoId} open onClose={onCloseModal} />;
    case "DELETE":
      return <DeleteTodo todoId={params?.todoId} open onClose={onCloseModal} />;
    default:
      return null;
  }
}
