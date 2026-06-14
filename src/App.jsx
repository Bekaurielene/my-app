import UserCard from "./Components/UserCard";

function App() {
  const users = [
    {
      id: 1,
      name: "Giorgi",
      age: 25,
      role: "Admin",
      skills: ["React", "JavaScript", "CSS"],
      photo: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Nika",
      age: 22,
      role: "User",
      skills: ["HTML", "CSS"],
      photo: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: "Luka",
      age: 28,
      role: "Admin",
      skills: ["C++", "Java"],
      photo: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      name: "Ana",
      age: 20,
      role: "User",
      skills: ["React", "Figma"],
      photo: "https://picsum.photos/200?random=4",
    },
  ];

  return (
    <div className="container">
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          age={user.age}
          role={user.role}
          skills={user.skills}
          photo={user.photo}
        />
      ))}
    </div>
  );
}

export default App;