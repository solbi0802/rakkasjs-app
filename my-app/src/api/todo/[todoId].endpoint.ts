import { RakkasRequest, RakkasResponse } from "rakkasjs";
import { deleteTodo, updateTodo } from "./crud";

/** Delete a todo item */
export function del({ params }: RakkasRequest): RakkasResponse {
  // In a real app you should validate all user input
  deleteTodo(Number(params.todoId));

  return {
    body: null,
  };
}

/** Update a todo item  */
export function patch({ params, body }: RakkasRequest): RakkasResponse {
  // In a real app you should validate all user input!
  const updated = updateTodo(Number(params.todoId), body);

  if (!updated) {
    return {
      status: 404,
    };
  }

  return {
    status: 200,
    body: updated,
  };
}
