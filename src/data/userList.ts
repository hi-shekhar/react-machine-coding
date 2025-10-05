export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
}

export const userList: User[] = [
  {
    id: 1,
    name: "Aisha Sharma",
    email: "aisha.sharma@example.com",
    role: "Admin",
  },
  {
    id: 2,
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    role: "Editor",
  },
  {
    id: 3,
    name: "Priya Patel",
    email: "priya.patel@example.com",
    role: "Viewer",
  },
  {
    id: 4,
    name: "Vikram Yadav",
    email: "vikram.yadav@example.com",
    role: "Admin",
  },
  {
    id: 5,
    name: "Kavita Rao",
    email: "kavita.rao@example.com",
    role: "Editor",
  },
  {
    id: 6,
    name: "Sanjay Kumar",
    email: "sanjay.kumar@example.com",
    role: "Viewer",
  },
  {
    id: 7,
    name: "Meena Joshi",
    email: "meena.joshi@example.com",
    role: "Admin",
  },
  {
    id: 8,
    name: "Arjun Desai",
    email: "arjun.desai@example.com",
    role: "Editor",
  },
  {
    id: 9,
    name: "Deepa Reddy",
    email: "deepa.reddy@example.com",
    role: "Viewer",
  },
  {
    id: 10,
    name: "Gaurav Verma",
    email: "gaurav.verma@example.com",
    role: "Admin",
  },
  { id: 11, name: "Lata Iyer", email: "lata.iyer@example.com", role: "Editor" },
  {
    id: 12,
    name: "Mohan Soni",
    email: "mohan.soni@example.com",
    role: "Viewer",
  },
  {
    id: 13,
    name: "Nisha Agarwal",
    email: "nisha.agarwal@example.com",
    role: "Admin",
  },
  {
    id: 14,
    name: "Om Prakash",
    email: "om.prakash@example.com",
    role: "Editor",
  },
  { id: 15, name: "Rina Shah", email: "rina.shah@example.com", role: "Viewer" },
  {
    id: 16,
    name: "Tarun Gupta",
    email: "tarun.gupta@example.com",
    role: "Admin",
  },
  { id: 17, name: "Usha Nair", email: "usha.nair@example.com", role: "Editor" },
  {
    id: 18,
    name: "Vijay Menon",
    email: "vijay.menon@example.com",
    role: "Viewer",
  },
  { id: 19, name: "Zara Khan", email: "zara.khan@example.com", role: "Admin" },
  {
    id: 20,
    name: "Yash Mittal",
    email: "yash.mittal@example.com",
    role: "Editor",
  },
];
