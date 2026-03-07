import {
  ThingsICareAboutSection,
  ShillsListSection,
  FictionWritingSection,
  ContactMeSection,
  InvisibleMessageSection,
} from "./HomePageSections/HomePageSections";

export const Homepage = () => {


  return (
    <>
      <h1 className="homepage-header">Welcome to my web site!</h1>

      <p>
        This is the home page of 💎 Tetraspace 💎, and is the place for lots of
        cool Tetraspace facts and content!
      </p>
      <ThingsICareAboutSection />
      <ShillsListSection />
      <ContactMeSection />
      <FictionWritingSection />
      <InvisibleMessageSection />
    </>
  );
};
