import React from "react";
import { useState, useRef, useEffect } from "react";
import { postAPI } from "../Axios/apis";

type Props = {
  setIsLoading: (isLoading: boolean) => void;
};
function CreateTodo({ setIsLoading }: Props) {
  const [todo, setTodo] = useState("");
  const ref = useRef<HTMLInputElement>(null!);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTodo("");
    const payload = JSON.stringify({ todo });

    postAPI("/todos", payload).then(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form>
      <input
        data-testid="new-todo-input"
        placeholder="todo"
        onChange={handleChange}
        value={todo}
        name="todo"
        ref={ref}
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        onClick={handleSubmit}
      >
        추가
      </button>
    </form>
  );
}

export default CreateTodo;
