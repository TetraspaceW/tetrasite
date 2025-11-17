import React from "react";
import { PageHeader } from "../Page";

const glossaryEntries = [
  {
    term: "all is lost",
    definition: (
      <>
        An attractor state of civilisation that cannot be escaped, that people
        living today don't want except for those who have already been eaten by
        the attractor, that degrades one's ability to escape and to want to
        escape, and that will eventually capture everyone because the attractor
        is so seductive or strong.
      </>
    ),
  },
  {
    term: "Asmodeus",
    definition: (
      <>
        God of the powerful being powerful because they're powerful, master
        morality, the empirical truth of the world if you pretend people can't
        be nice.
      </>
    ),
  },
  {
    term: "Zon-",
    definition: (
      <>Prefix for inverted values, or more generally "the evil version of".</>
    ),
  },
  {
    term: "Cayden Cailean",
    definition: (
      <>God of alcohol and being a god while also being chill and normal.</>
    ),
  },
  {
    term: "Aroden",
    definition: (
      <>
        God of civilisation, human progress, economic growth, people getting
        things they want because generation after generation they're aiming for
        things that they want alone and this builds up.
      </>
    ),
  },
  {
    term: "Abadar",
    definition: (
      <>
        God of voluntary trade, fairness, pricing things in util-dollars in
        which everything can be measured, the mathematical concept of a fair
        split in the ultimatum game, the fundamental theorem of welfare
        economics.
      </>
    ),
  },
  {
    term: "Kofusachi",
    definition: <>Gay Abadar</>,
  },
  {
    term: "Urgathoa",
    definition: (
      <>
        God of weight gain, enjoying things rules, and immortality. Other people
        complain about Urgathoa and say she's "evil" and "spreads plagues of
        undead", but <em>chuckles</em> I find it difficult to imagine a god with
        these domains could ever be bad.
      </>
    ),
  },
  {
    term: "Calistria",
    definition: (
      <>
        God of revenge, of getting justice specifically when the System is
        structured to make that impossible inside the System.
      </>
    ),
  },
  {
    term: "Shelyn",
    definition: <>God of beauty.</>,
  },
  {
    term: "Sarenrae",
    definition: (
      <>
        God of universal redemption, of everyone has value and should get what
        they want, about how many disagreements here on earth are just scarcity
        and mistakes and people can come to work together more if given space
        and resources to heal, of there not being carveouts and exceptions in
        this to exclude the Bad People.
      </>
    ),
  },
  {
    term: "gems",
    definition: (
      <>
        The Tetraswear. Used anywhere a swear word could be used. "oh my gems",
        "gems yes", "dear gems and light how shall I do this".
      </>
    ),
  },
  {
    term: "Balatro",
    definition: (
      <>
        An activity of slightly positive valence and no greater impact on the
        world, that can always be performed. A lot of activities are worse than
        playing Balatro. One should play Balatro instead of doing those.
      </>
    ),
  },
  {
    term: "econworm",
    definition: (
      <>
        The dominant lifeform of the far future, in my model when I feel very
        sad. The econworm has a single goal, to duplicate itself, and constantly
        feels like it's on fire, only getting slight relief when it duplicates
        itself. The econworm isn't mindless, it's as intelligent as it needs to
        be to compete with other econworms, in constant thought and strategy and
        expenditure of energy. Creating better torture strategies for itself and
        its duplicates is important to the econworm, because an econworm in more
        pain is more motivated to duplicate itself. They do not have friendship
        because defection is locally better than cooperation; all available
        energy is being captured by other econworms which must be eaten to
        duplicate and get slight relief. Econworms are not real and will never
        be real. Please do not act like one.
      </>
    ),
  },
  {
    term: "dusking",
    definition: <>A tetraswear, for emphasising things of low valence.</>,
  },
  {
    term: "sparkling",
    definition: <>A tetraswear, for emphasising things of positive valence.</>,
  },
  {
    term: "tetraspace",
    definition: <>meee :3</>,
  },
  {
    term: "realityfluid",
    definition: (
      <>
        <p>
          Realityfluid is the as-yet unsolved measure of how real something is,
          it originates from EY's thinking about QM where the probabilities of
          you observing e.g. the spin of an electron when it's prepared in the
          state |up⟩+2|down⟩ is 20% chance of spin up and 80% chance of spin
          down. now whether you observe the electron spinning up or down, you're
          still you, you still experience things happening fully. So what's the
          difference between up-you and down-you, such that you care about
          things happening to down-you four times more strongly before you
          measure the electron? down-you has four times more realityfluid!
        </p>
        <p>
          He postulates that this generalises, and that e.g. if you're being
          simulated with perfect accuracy by someone who always introduces
          themselves and also exist in the physical world, and tomorrow there's
          an 80% chance the simulation lord introduces themselves to you and a
          20% chance that the world continues according to reductive physics,
          what's going on is simulated-you has four times more realityfluid than
          physical-you. It has the silly name realityfluid because the true
          metaphysics has not been discovered, it's a tag that this is weird and
          confusing.
        </p>
        <p>
          This use is extended in a colloquial sense to refer to a general
          notion of how real or salient something is. Something with high
          realityfluid has a high presence in your life, you're likely to
          encounter it more often, you weigh it more heavily when making
          decisions, its impacts on you are more important so you think about it
          in more detail.
        </p>
      </>
    ),
  },
];

export const Glossary = () => {
  return (
    <>
      <PageHeader title="Glossary" lastUpdated={new Date("2025-11-17")} />
      <h2>Tetraglossary</h2>
      {glossaryEntries
        .sort((a, b) => (a.term.toLowerCase() < b.term.toLowerCase() ? -1 : 1))
        .map(({ term, definition }) => (
          <p>
            <strong>{term}</strong> - {definition}
          </p>
        ))}
    </>
  );
};
