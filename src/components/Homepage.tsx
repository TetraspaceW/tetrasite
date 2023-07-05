import { her, her2 } from "../assets/assets";
import { useState } from "react";
import {
  ThingsICareAboutSection,
  ShillsListSection,
  FictionWritingSection,
  BlogPostListSection,
  ContactMeSection,
  SecretMessageSection,
} from "./HomePageSections/HomePageSections";

export const Homepage = () => {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div className="main">
      <h1 className="homepage-header">Welcome to my web site!</h1>

      <img
        src={mouseOver ? her : her2}
        className="her-image"
        alt="logo"
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      />
      <p>💎</p>
      <p>
        This is the home page of 💎 Tetraspace 💎, and will probably at some
        point in the future contain lots of cool Tetraspace facts and content!
      </p>
      <ThingsICareAboutSection />
      <ShillsListSection />
      <FictionWritingSection />
      <BlogPostListSection />
      <ContactMeSection />
      <SecretMessageSection />
    </div>
  );
};
