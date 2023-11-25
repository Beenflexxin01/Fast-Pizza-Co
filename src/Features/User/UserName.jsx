import { useSelector } from 'react-redux';

function UserName() {
  const userName = useSelector((state) => state.user.username);

  if (!UserName) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default UserName;
