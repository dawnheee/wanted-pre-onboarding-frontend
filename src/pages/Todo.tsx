import React from "react";
import { useEffect, useState } from "react";
import { useCheckToken } from "../hooks/useCheckToken";
import CreateTodo from "components/CreateTodo";
import { getAPI } from "../Axios/apis";
import { TodoArr, Todo } from "types";
import ItemTodo from "components/ItemTodo";
import styled from "@emotion/styled";

function TodoPage() {
  useCheckToken("/signin");
  const [isLoading, setIsLoading] = useState(false);
  const [todoArr, setTodoArr] = useState<TodoArr>([]);

  useEffect(() => {
    getAPI("/todos").then((res) => {
      setTodoArr(res);
    });
  }, [isLoading]);

  return (
    <>
      <div className="pageName">Todo List</div>
      <section className="contents">
        <CreateTodo setIsLoading={setIsLoading} />
        <TodoUl>
          {todoArr.length >= 1 &&
            todoArr.map((item: Todo) => (
              <li key={item.id}>
                <ItemTodo item={item} setIsLoading={setIsLoading} />
              </li>
            ))}
        </TodoUl>
      </section>
    </>
  );
}

export default TodoPage;

const TodoUl = styled("ul")`
  min-height: 70%;
`;
