import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cfpassword, setCfPassword] = useState("");
  const { signUp } = useUserAuth();

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const handleSignUp = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (username.trim().length == 0)
      return Swal.fire({
        icon: "error",
        title: "Please enter username",
        text: "กรุณากรอกชื่อผู้ใช้",
      });
    if (email.trim().length == 0)
      return Swal.fire({
        icon: "error",
        title: "Please enter email address",
        text: "กรุณากรอกอีเมลของคุณ",
      });
    if (!isValidEmail(email))
      return Swal.fire({
        icon: "error",
        title: "Please enter correct email address",
        text: "กรุณากรอกอีเมลของคุณให้ถูกต้อง",
      });
    if (password.trim().length == 0)
      return Swal.fire({
        icon: "error",
        title: "Please enter password",
        text: "กรุณากรอกรหัสผ่าน",
      });
    if (cfpassword.trim().length == 0)
      return Swal.fire({
        icon: "error",
        title: "Please enter confirm password",
        text: "กรุณากรอกรหัสผ่านครั้งที่สอง",
      });
    if (!(password === cfpassword))
      return Swal.fire({
        icon: "error",
        title: "Password and Confirm password is not match",
        text: "กรุณากรอกรหัสผ่านครั้งที่สอง",
      });
    try {
      await signUp(username, email, password);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Link to={"/"} className="absolute top-8 left-8 ">
        &larr; Back
      </Link>
      <form
        className="bg-white px-10 py-20 rounded-3xl sm:border-2 border-gray-200"
        onSubmit={handleSignUp}
      >
        <h1 className="text-5xl font-semibold">Sign up</h1>
        <div className="mt-8">
          <div className="mb-2">
            <label className="text-lg font-medium">Username</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="text-lg font-medium">Email</label>
            <input
              type="text"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="text-lg font-medium">Password</label>
            <input
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="text-lg font-medium">
              Confirm Confirm Password
            </label>
            <input
              type="password"
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              placeholder="Enter your password"
              value={cfpassword}
              onChange={(e) => setCfPassword(e.target.value)}
            />
          </div>
          {/* <div className="flex item-center">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="">
              I agree all statements in{" "}
              <span className="font-semibold">Terms of service</span>
            </label>
          </div> */}
          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold"
              type="submit"
            >
              Sign up
            </button>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Have already an account ? </p>
            <Link
              to={"/login"}
              className="ml-2 font-semibold text-base text-violet-500 hover:underline"
            >
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
