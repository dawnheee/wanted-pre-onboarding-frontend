import React from "react";
import { Todo, UpdateBody } from "../types";
import { useState } from "react";
import { putAPI } from "../Axios/apis";

interface Props {
  setIsEditMode: (isEditMode: boolean) => void;
  setNewText: React.Dispatch<React.SetStateAction<string>>;
  item: Todo;
  originText: string;
}

function EditTodo({ setIsEditMode, item, setNewText, originText }: Props) {
  const [updateTodo, setUpdateTodo] = useState<string>(originText);

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUpdateTodo(e.target.value);
  };

  const submitHandler = () => {
    const body = {
      isCompleted: item.isCompleted,
      todo: updateTodo,
    };
    putTodoItem(body).then((res) => {
      setNewText(updateTodo);
      setIsEditMode(false);
    });
  };

  const putTodoItem = (body: UpdateBody) => {
    return putAPI(`/todos/${item.id}`, body);
  };

  return (
    <>
      <input
        data-testid="modify-input"
        value={updateTodo}
        onChange={onChangeHandler}
        name="modify"
      />
      <button data-testid="submit-button" onClick={submitHandler}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={() => setIsEditMode(false)}>
        취소
      </button>
    </>
  );
}

export default EditTodo;
