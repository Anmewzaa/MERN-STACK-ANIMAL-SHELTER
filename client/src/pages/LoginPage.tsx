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
          {/* <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"></div>
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div> */}
          <img
            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
