import { useRef, useState } from "react";
import { creds } from "../utils/contants";
import CreateItem from "./CreateItem";

const Login = ({ onSuccess }) => {
  const usrName = useRef(null);
  const pwd = useRef(null);
  const [correctCred, setCorrectCred] = useState(false);

  const handleFormBtn = (e) => {
    e.preventDefault();
    const afterSubmitUsrName = usrName.current.value;
    const afterSubmitPwd = pwd.current.value;
    if (afterSubmitUsrName == creds.uid && afterSubmitPwd == creds.pwd) {
      setCorrectCred(true);
      onSuccess();
    }
  };

  return (
    <>
      {correctCred ? (
        <CreateItem />
      ) : (
        <form
          className="mt-28 mx-auto max-w-md p-6 bg-white shadow-md rounded-md"
          onSubmit={handleFormBtn}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input
              type="text"
              ref={usrName}
              placeholder="Enter user name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              ref={pwd}
              placeholder="Enter password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
