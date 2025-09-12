type TaskStatus = "Pending" | "InProgress" | "Completed";

export interface Project {
  id: string;
  name: string;
  status: TaskStatus;
}

export const projects: Project[] = [
  { id: "project-1", name: "Counter", status: "Completed" },
  { id: "project-2", name: "To-Do List", status: "Completed" },
  { id: "project-3", name: "Stopwatch", status: "Pending" },
  { id: "project-4", name: "Accordion", status: "Pending" },
  { id: "project-5", name: "Otp Input", status: "Pending" },
  { id: "project-6", name: "Infinite Scroll", status: "Pending" },
  { id: "project-7", name: "Star Rating", status: "Pending" },
  { id: "project-8", name: "Typeahead", status: "Pending" },
  { id: "project-9", name: "Form Validation", status: "Pending" },
  { id: "project-10", name: "Tic-Tac-Toe", status: "Pending" },
  { id: "project-11", name: "Image Carousel", status: "Pending" },
];
