import { IoLogOut } from "react-icons/io5";
import useLogout from "../../hooks/useLogout";
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className=" mt-auto">
      <IoLogOut
        className=" w-6 h-6 text-white cursor-pointer"
        onClick={logout}
      />
    </div>
  );
};

export default LogoutButton;
