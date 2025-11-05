/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  const { isLoading, logout, user } = useAuth0()
  const [name, setName] = useState(user?.name || '')
  const [isEditing, setIsEditing] = useState(false)

  if (isLoading || !user) {
    return <div className='text-center p-4'>Loading...</div>;
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const saveName = () => {
    setIsEditing(false)
  }

  return (
    <div>Profile Page</div>
  );
};

export default Profile;
