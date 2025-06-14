const PreviewProfile = ({ data }) => (
  <div className="border p-3 bg-light rounded">
    <p><strong>Name:</strong> {data.name}</p>
    <p><strong>Bio:</strong> {data.bio}</p>
    {data.profilePicture && <img src="https://via.placeholder.com/100" alt="Profile" />}
    <p><strong>Specializations:</strong> {data.specializations.join(', ')}</p>
    <p><strong>Services:</strong> {data.services.join(', ')}</p>
    <p><strong>Experience:</strong> {data.experience} years</p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Phone:</strong> {data.phone}</p>
    <p><strong>Availability:</strong> {data.availability}</p>
  </div>
);

export default PreviewProfile;
