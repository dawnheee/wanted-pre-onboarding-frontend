import React, { useState } from "react";
import { Todo, UpdateBody } from "../types";
import { putAPI, deleteAPI } from "../Axios/apis";
import EditTodo from "./EditTodo";
import styled from "@emotion/styled";

type Props = {
  item: Todo;
  setIsLoading: (isLoading: boolean) => void;
};

function ItemTodo({ item, setIsLoading }: Props) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(item.isCompleted);
  const [todoText, setTodoText] = useState(item.todo);

  const inputChecked = () => {
    setIsChecked(!isChecked);
    const updatedTodo = {
      todo: item.todo,
      isCompleted: !isChecked,
    };
    putTodoItem(updatedTodo);
  };

  const putTodoItem = (todo: UpdateBody) => {
    setIsLoading(true);
    putAPI(`/todos/${item.id}`, todo).then(() => {
      setIsLoading(false);
    });
  };

  const deleteTodoItem = async () => {
    setIsLoading(true);
    await deleteAPI(`/todos/${item.id}`).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <>
      {!isEditMode ? (
        <>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={inputChecked}
              name="todocheckbox"
            />
            <span>{todoText}</span>
          </label>
          <button
            data-testid="modify-button"
            onClick={() => setIsEditMode(true)}
          >
            수정
          </button>
          <button data-testid="delete-button" onClick={deleteTodoItem}>
            삭제
          </button>
        </>
      ) : (
        <EditTodo
          item={item}
          setIsEditMode={setIsEditMode}
          setNewText={setTodoText}
          originText={todoText}
        />
      )}
    </>
  );
}

export default ItemTodo;
