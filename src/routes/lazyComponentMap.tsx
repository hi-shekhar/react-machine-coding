import { lazy } from "react";

const CounterApp = lazy(() => import("../components/CounterApp"));
const TodoListApp = lazy(() => import("../components/TodoListApp"));

export const componentMap: Record<string, React.FC> = {
  "project-1": CounterApp,
  "project-2": TodoListApp,
};
