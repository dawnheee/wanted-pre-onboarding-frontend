export type Token = string;

export interface User {
  email: string;
  password: string;
}

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}
export type TodoArr = Todo[];

export interface UpdateBody {
  todo: string;
  isCompleted: boolean;
}
