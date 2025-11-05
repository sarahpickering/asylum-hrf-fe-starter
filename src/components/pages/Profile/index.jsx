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
    <div className='max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-lwg p-6 text-center'>

      <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
      <h2 className='text-2xl font-semibold mb-2'>{name}</h2>
      <p className='text-gray-600'>{user.email}</p>

    </div>
  );
};

export default Profile;
