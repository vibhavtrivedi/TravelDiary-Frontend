function Profile({ onAdd, onInputChange, formData }) {
  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={onInputChange}
        />
        <button onClick={onAdd}>Add</button>
      </div>
    </div>
  );
}
export default Profile;
