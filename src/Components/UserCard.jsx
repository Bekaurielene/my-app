function UserCard({ name, age, role, skills, photo }) {
    return (
      <div className={role === "Admin" ? "card admin" : "card"}>
        <img src={photo} alt={name} />
  
        <h2>{name}</h2>
  
        <p>Age: {age}</p>
  
        <p>Role: {role}</p>
  
        <h4>Skills:</h4>
  
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UserCard;