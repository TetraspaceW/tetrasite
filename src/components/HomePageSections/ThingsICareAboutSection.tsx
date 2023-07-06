import { Link } from "react-router-dom";

export const ThingsICareAboutSection = () => {
  return (
    <>
      <h2>Things I Care About</h2>
      <p>
        I am a big fan of rationalism and{" "}
        <Link to="/effective-altruism">effective altruism</Link>. I think at
        some point this century, the Singularity will occur, in which AIs become
        smarter than people in the non-metaphorical impossible-to-miss way that
        results in things like planets being dismantled, and that we are
        currently not on track for this to happen in a way that leaves
        survivors.
      </p>
      <p>
        The most effective way for an individual donor to give is through a{" "}
        <a href="https://www.givingwhatwecan.org/donor-lottery">
          donor lottery
        </a>
        . Giving What We Can runs one once a year. The most important
        object-level issue, and probably where we want money to flow because
        money can be exchanged for goods and services and we want the goods and
        services, is{" "}
        <a href="https://twitter.com/ESYudkowsky/status/1570967796582076416?s=20&t=WJZfWfq_lsPqHcButM4cXA">
          AI notkilleveryoneism
        </a>
        , and the situation for AI safety is currently looking dire;{" "}
        <strong>
          please read{" "}
          <a href="https://www.lesswrong.com/posts/uMQ3cqWDPHhjtiesc/agi-ruin-a-list-of-lethalities">
            AGI Ruin: A List of Lethalities
          </a>
        </strong>{" "}
        for a view of how difficult this issue is, and how completely unprepared
        anyone is to deal with it.
      </p>
    </>
  );
};
