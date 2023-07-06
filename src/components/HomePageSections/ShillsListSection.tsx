import { Link } from "react-router-dom";

export const ShillsListSection = () => {
  return (
    <>
      <h2>Tetraspace's Shills List</h2>
      <p>
        <Link to={"/tetraspace-shills-list"}>Tetraspace's Shills List</Link>, a
        list of works of fiction that I think are good and that you should read
        or watch or play.
      </p>
    </>
  );
};
