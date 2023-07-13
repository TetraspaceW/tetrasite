type Work = {
  name: string;
  wordcount?: number;
  incomplete?: boolean;
  description: string;
  link: string;
};

const fiction: Work[] = [
  {
    name: "Minutes of the British Council",
    wordcount: 949,
    description:
      "Crusader Kings 2 fanfiction. The Shahanshah has a discussion with his closest confidants after the conquest of the world.",
    link: "https://archiveofourown.org/works/40894746",
  },
  {
    name: "You Thought This Was Going To Be A Fanfiction But Actually It's Perceptor Explaining Stability Theory to Shockwave",
    link: "https://archiveofourown.org/works/40589124",
    wordcount: 1013,
    description:
      "Transformers fanfiction. You Thought This Was Going To Be A Fanfiction But Actually It's Perceptor Explaining Stability Theory to Shockwave",
  },
  {
    name: "Bees Can't Fly",
    link: "https://archiveofourown.org/works/40520514",
    wordcount: 463,
    description: "According to all known laws of aviation,",
  },
  {
    name: "When We Learned of Trump",
    link: "https://archiveofourown.org/works/24324157",
    wordcount: 2444,
    description:
      "When Donald Trump was elected, he set the clocks back 50 years. Then the next election came, and the next.",
  },
  {
    name: "Some stuff on the Verse and Dimensions Wiki",
    link: "https://verse-and-dimensions.fandom.com/wiki/User:Holomanga",
    description:
      "Collaborative fiction about cosmic entities where omnipotence is considered somewhere in the middle of the scale. I write there under the username Holomanga.",
  },
];

export const FictionWritingSection = () => {
  return (
    <>
      <h2>Fiction Writing</h2>
      <p>
        Sometimes I like to write fiction; here are links to stuff that I've
        published online.
      </p>
      {fiction.map((work) => {
        const { wordcount, incomplete, link, name, description } = work;
        const wcNotePresent = wordcount || incomplete;
        const wcNote = wcNotePresent
          ? `(${(wordcount ? [`${wordcount} words`] : [])
              .concat(incomplete ? [`incomplete`] : [])
              .join(", ")})`
          : "";
        return (
          <li>
            <p>
              <a href={link}>{name}</a> {wcNote} - {description}
            </p>
          </li>
        );
      })}
    </>
  );
};
