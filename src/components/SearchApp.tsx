import { useEffect, useState } from "react";
import { userList, type User } from "../data/userList";
import "../styles/SearchApp.css";

const USERS = userList;
const DEBOUNCE_DELAY_MS = 300; // Standard delay

const SearchApp = () => {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, DEBOUNCE_DELAY_MS);

    return () => {
      if (handler) {
        clearTimeout(handler);
      }
    };
  }, [search]);

  const searchTermLower = debouncedSearch.trim().toLowerCase();

  const filteredUsers: User[] = USERS.filter((user) => {
    if (searchTermLower.length === 0) {
      return true;
    }

    return (
      user.email.toLowerCase().includes(searchTermLower) ||
      user.name.toLowerCase().includes(searchTermLower) ||
      user.role.toLowerCase().includes(searchTermLower)
    );
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <h1>Search Users</h1>
      <div className="users">
        <h3>{filteredUsers.length} Users Found</h3>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search name, email, or role..."
        />

        {filteredUsers.map((user: User) => (
          <div key={user.id} className="users-list">
            <div className="user_name">{user.name}</div>
            <div className="user-email">{user.email}</div>
            <div className="user_role">{user.role}</div>
          </div>
        ))}

        {filteredUsers.length === 0 && searchTermLower.length > 0 && (
          <p className="no-results">No users match your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchApp;
