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
    <div className='
      max-w-sm mx-auto mt-10 
      bg-neutral-800 rounded-xl shadow-lg 
      p-8 text-center border border-gray-200'>

      <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4' />
      {isEditing ? (
        <div className='mb-4'>
          <input type='text' 
          value={name} 
          onChange={handleChange} 
          className='border rounded px-2 py-1 w-full' 
          />
          <button 
            className='mt-2 px-4 py-2 bg-red-800/75 
            text-white rounded-lg hover:bg-red-600 transition' 
            onClick={saveName}
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <h2 className='text-2xl font-semibold mb-2'>{name}</h2>
          <button
            onClick={() => setIsEditing(true)}
            className='px-r py-2 bg-neutral-300 rounded hover:bg-neutral-200 transition'
          >
            Edit Name
          </button>
        </>
      )}

      <h2 className='text-2xl font-semibold mb-2'>{name}</h2>

      <p className='text-gray-600'>{user.email}</p>

      <button
        className='mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition'
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Logout
      </button>

    </div>
  );
};

export default Profile;
