import { useUserAuth } from "../contexts/UserAuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Components
import Login from "../components/Login";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useUserAuth();
  useEffect(() => {
    if (user) return navigate("/");
  }, [navigate, user]);
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Login />
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
