import { useState } from "react";

const User = ({ name }) => {
  let [count, setCount] = useState(0);
  let [prevCount, setPrevCount] = useState(null);

  const [const1] = useState(1);

  function handelCount() {
    setCount((p) => {
      setPrevCount(p);
      return p + 1;
    });
  }
  return (
    <div className="mt-40">
      <h1>Count: {count}</h1>
      <h1>Name: {name}</h1>
      <h3>Location: Hooghly</h3>
      <h3>Contact: sohomd077@gmail.com</h3>
      <h4>previous count is:{prevCount}</h4>
      <input
        type="button"
        value="Increase count"
        className="border-black"
        onClick={handelCount}
      />
    </div>
  );
};

export default User;
