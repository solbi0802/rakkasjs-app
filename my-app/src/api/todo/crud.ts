// This is our mock data store. The data won't persist between server restarts
// and it won't work in a serverless function. Just a simple way to
// demonstrate a CRUD app.

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

let todoItems: TodoItem[] = [
  {
    id: 1,
    text: "Learn React",
    done: true,
  },
  {
    id: 2,
    text: "Learn Rakkas.JS",
    done: false,
  },
];

let nextId = 3;

// Simple CRUD functions

export function readAllTodos(): TodoItem[] {
  return todoItems;
}

export function createTodo(item: Omit<TodoItem, "id">): number {
  todoItems.push({ ...item, id: nextId });
  return nextId++;
}

export function updateTodo(id: number, data: TodoItem): TodoItem | undefined {
  const found = todoItems.find((x) => x.id === id);

  if (found) {
    Object.assign(found, data);
  }

  return found;
}

export function deleteTodo(id: number): void {
  todoItems = todoItems.filter((x) => x.id !== id);
}
