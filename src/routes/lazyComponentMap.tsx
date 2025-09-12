import { lazy } from "react";

const CounterApp = lazy(() => import("../components/CounterApp"));

export const componentMap: Record<string, React.FC> = {
  "project-1": CounterApp,
};
