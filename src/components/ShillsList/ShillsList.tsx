import { PageHeader } from "../PageHeader";
import { Shill } from "./Shill";
import { shills } from "./Shills";

export const ShillsList = () => {
  return (
    <>
      <PageHeader title={"Shills List"} />
      <p>
        Welcome to my shills list! A shills list is a list of works that I
        greatly enjoy, enough so that I'll point to them here and say "this,
        this is good". The advantage of a shills list is that people often have
        similar clusters of tastes, and sometimes you'll have enjoyed a few
        works in that cluster and want to see more; or perhaps you just want an
        insight into Tetraspace's soul, see what works of fiction really
        resonate with her. Maybe you're an aspiring fiction-matchmaker, and you
        want to see what I already like to make some good additional matches (🥺
        Send them if so? 👉👈)!
      </p>
      <p>
        The concept of a shills list is something that I came across with{" "}
        <a href="https://recordcrash.com/">Makin's shills list</a>, which sure
        contains a lot of things that I like, and almost forms a canon of
        something that's not exactly but related to rationalfic
        (rational-adjacent-fic? 😜). I make no promises of being as canonical,
        but I hope you enjoy!
      </p>
      <table border={1} className="table">
        <tr>
          <th>Shill</th>
          <th>Description</th>
        </tr>
        {shills.map((shill) => (
          <Shill shill={shill} />
        ))}
      </table>
    </>
  );
};
