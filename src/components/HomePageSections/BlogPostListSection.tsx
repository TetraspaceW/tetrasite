import { Link } from "react-router-dom";

export const BlogPostListSection = () => {
  return (
    <>
      <h2>Blog</h2>
      <p>
        Currently this is just a mirror of some posts from my{" "}
        <a href="https://tetraspacegrouping.substack.com/">Substack</a>.
      </p>
      <ul>
        <li>
          <em>2021-08-19</em>:{" "}
          <Link to="/blog/against-donor-lottery">
            Reasons why one might not give to a donor lottery
          </Link>
        </li>
      </ul>
    </>
  );
};
