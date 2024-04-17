import { her, her2 } from "../assets/assets";
import React, { useState } from "react";
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
    <>
      <h1 className="homepage-header">Welcome to my web site!</h1>

      <img
        src={mouseOver ? her : her2}
        className="her-image"
        alt="Smiling StyleGAN-generated portrait of an anime girl with white hair in a fluffy bob, pink eyes, a flower-like AI generation artefact in her hair, and a shirt collar."
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
      />
      <center>
        <p>💎</p>
      </center>
      <p>
        This is the home page of 💎 Tetraspace 💎, and is the place for lots of
        cool Tetraspace facts and content!
      </p>
      <ThingsICareAboutSection />
      <ShillsListSection />
      <ContactMeSection />
      <FictionWritingSection />
      <BlogPostListSection />
      <SecretMessageSection />
    </>
  );
};
