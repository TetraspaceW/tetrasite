type ShillLink = {
  name: string;
  location: string;
  url: string;
};

type Shill = {
  shill: string;
  type: string;
  description: string;
  links: ShillLink | ShillLink[];
};

export const shills: Shill[] = [
  {
    shill:
      "Hello Charlotte EP1: Junk Food, Gods and Teddy Bears / EP2: Requiem Aeternam Deo / Delirium / EP3: Childhood's End / Heaven's Gate",
    type: "Game",
    description:
      "Indie RPG about a kid who lives in the House, and the Puppeteer behind the computer screen who controls her. She babysits her alien housemate's nephew, and some other stuff happens, and it gets the psychological horror tag on Steam and I cry at the end.",
    links: [
      {
        name: "EP1 Link",
        location: "itch.io",
        url: "https://etherane.itch.io/hello-charlotte-ep1",
      },
      {
        name: "EP2 Link",
        location: "itch.io, $2.99",
        url: "https://etherane.itch.io/hello-charlotte-ep2",
      },
      {
        name: "Delirium Link",
        location: "itch.io",
        url: "https://etherane.itch.io/hello-charlotte-delirium",
      },
      {
        name: "EP3 Link",
        location: "itch.io, $2.99",
        url: "https://etherane.itch.io/hcep3",
      },
      {
        name: "Heaven's Gate Link",
        location: "itch.io",
        url: "https://etherane.itch.io/hg",
      },
    ],
  },
  {
    shill: "Omori",
    type: "Game",
    description:
      "Indie RPG about an emotionless kid who lives in a blank void. He goes to have a picnic with his friends in a surreal dreamworld, but one goes missing, and some other stuff happens, and it gets the psychological horror tag on Steam and I cry at the end.",
    links: {
      name: "Link",
      location: "Steam, £15.49",
      url: "https://store.steampowered.com/app/1150690/OMORI/",
    },
  },
  {
    shill: "Harry Potter and the Methods of Rationality",
    type: "Online book",
    description:
      "Harry Potter is raised by scientists and brings the Muggle magics of science and rationality to bear on Magical Britain.",
    links: {
      name: "Link",
      location: "author's site",
      url: "http://www.hpmor.com/",
    },
  },
  {
    shill: "Last and First Men / Star Maker",
    type: "Book. 1930s science fiction",
    description:
      "Last and First Men is a history of the entire future of humankind, from the present day to when the Sun burns out. Star Maker is a history of the entire future of the universe.",
    links: [
      {
        name: "LaFM Link",
        location: "Project Gutenberg Australia",
        url: "https://www.goodreads.com/ebooks/download/564325.Last_and_First_Men_Star_Maker",
      },
      {
        name: "SM Link",
        location: "Project Gutenberg Australia",
        url: "http://gutenberg.net.au/ebooks06/0601841h.html",
      },
    ],
  },
  {
    shill: "Unsong",
    links: {
      name: "Link",
      location: "author's site",
      url: "https://unsongbook.com/",
    },
    type: "Online book",
    description:
      "Speaking the Names of God performs miracles, and theology megacorporations have went straight to work creating sweatshops to brute-force search for them.",
  },
  {
    shill: "The Last Transmission of Frodo Baggins",
    type: "Online short story. Lord of the Rings fanfiction",
    description: "Frodo Baggins sails into the west.",
    links: {
      location: "author's site",
      url: "http://www.nanomedicine.com/Frodo.htm",
      name: "Link",
    },
  },
  {
    shill: "no-one has to die.",
    type: "Online puzzle game",
    description:
      "4 people are trapped in a building fire and need your help to escape.",
    links: {
      name: "Link",
      location: "Newsgrounds",
      url: "https://www.newgrounds.com/portal/view/615863",
    },
  },
  {
    shill: "Ed Stories / Fine Structure / Ra",
    type: "Web serials",
    description:
      "Seemingly unrelated short stories about a world with new physics and some scientists putting it to good use that come together later. Things escalate. The world is destroyed, but there are spares. Ed, Fine Structure, and Ra are totally different web serials, but they're the same genre, I like them for the same reason, and the author writes it well.",
    links: [
      {
        name: "Ed Link",
        location: "author's site",
        url: "https://qntm.org/ed",
      },
      {
        name: "Fine Structure Link",
        location: "author's site",
        url: "https://qntm.org/structure",
      },
      {
        name: "Ra Link",
        location: "author's site",
        url: "https://qntm.org/ra",
      },
    ],
  },
  {
    shill: "Puella Magi Madoka Magica",
    type: "Anime",
    description: "",
    links: {
      name: "Link",
      location: "KissCartoon",
      url: "https://kisscartoon.info/puella-magi-madoka-magica-dub/",
    },
  },
  {
    shill: "Pantheon",
    type: "Animated show",
    description:
      "A girl recieves help from an online stranger who is a U.I., an uploaded intelligence, held trapped on the corporation Logorrythm's servers.",
    links: {
      name: "Link",
      location: "KissCartoon",
      url: "https://kisscartoon.info/pantheon-season-1/",
    },
  },
  {
    shill: "Kindness to Kin",
    type: "Short story",
    description: "A silvery sphere descends from the sky to visit some aliens.",
    links: {
      name: "Link",
      location: "Reddit",
      url: "https://www.reddit.com/r/HFY/comments/lom9cb/kindness_to_kin/",
    },
  },
];
