export type ReflectionData = {
  title: string;
  date: Date;
  body: JSX.Element;
  tags?: string[];
};

export const reflections: ReflectionData[] = [
  {
    title: "Better Posthuman Embarrassment",
    date: new Date(2023, 6, 16),
    body: (
      <>
        <p>
          <a href="https://twitter.com/TetraspaceWest/status/1680362350539317248">
            Twitter
          </a>
        </p>
        <p>
          can't wait until the singularity and after a few thousand years I’ve
          replaced embarrassment with better posthuman embarrassment and then I
          can post the rest of my fanfictions
        </p>
        <blockquote>
          <p>Ely: seems like something you can do to yourself already!</p>
          <p>
            if you believed you should make this update you already would have
          </p>
          <p>so why do you not believe it?</p>
        </blockquote>
        <p>
          It has something of the nature of how I will predictably be a better
          chess player as well, but am not thereby better at chess for knowing
          that.
        </p>
      </>
    ),
  },
  {
    title: "Tetra::Curiosity's need to KNOW",
    date: new Date(2023, 6, 18),
    body: (
      <>
        <p>
          <a href="https://twitter.com/TetraspaceWest/status/1681289577309323267">
            Twitter:
          </a>
        </p>

        <p>
          I can't hold Keeper secrecy oaths (where you act as you would if you
          didn't know the information), and if I could others wouldn’t know to
          trust it, and besides they have preferences about my state of
          knowledge, but there is so much gossip I want to know everything
          about.
        </p>
        <p>
          There's SUCH a gulf between minds, everyone is lying and distorting
          all the time or just straight not telling me because genuinely why
          would they, and while I have other things going on Tetra::Curiosity
          doesn't care about the usefulness it just wants to KNOW.
        </p>
        <p>
          I think the biggest cost, if I stayed psychologically similar but
          somehow magically became the ghost of gossip gnosis, would be the
          Burden of Knowledge; I would know about people being hurt, who don't
          want to be hurt, and be forbidden to help them, or even unrelated
          others.
        </p>
      </>
    ),
  },
];
