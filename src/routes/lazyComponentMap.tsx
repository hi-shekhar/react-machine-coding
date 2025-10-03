import { lazy } from "react";

const CounterApp = lazy(() => import("../components/CounterApp"));
const TodoListApp = lazy(() => import("../components/TodoListApp"));
const StopwatchApp = lazy(() => import("../components/StopwatchApp"));
const FormValidationApp = lazy(() => import("../components/FormValidationApp"));
const OtpInputApp = lazy(() => import("../components/OtpInputApp"));
const ToggleApp = lazy(() => import("../components/ToggleApp"));
const LiveInputFeedbackApp = lazy(
  () => import("../components/LiveInputFeedbackApp")
);
export const componentMap: Record<string, React.FC> = {
  "project-1": CounterApp,
  "project-2": TodoListApp,
  "project-3": StopwatchApp,
  "project-5": OtpInputApp,
  "project-9": FormValidationApp,
  "project-12": ToggleApp,
  "project-13": LiveInputFeedbackApp,
};
