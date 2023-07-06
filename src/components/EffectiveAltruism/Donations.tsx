import { Link } from "react-router-dom";

type Donation = {
  date: string;
  organisation: Organisation;
  causeArea: CauseArea;
  description: JSX.Element;
  amount: number;
};

type CauseArea =
  | "Long-term"
  | "Global Poverty"
  | "Lottery"
  | "Animals"
  | "Environment"
  | "Non-EA"
  | "Meta";

type Organisation = {
  name: string;
  url: string;
};

const cause: { [key: string]: CauseArea } = {
  lt: "Long-term",
  gp: "Global Poverty",
  l: "Lottery",
  a: "Animals",
  e: "Environment",
  nea: "Non-EA",
  m: "Meta",
};

const organisations = {
  ltff: {
    name: "Long Term Future Fund",
    url: "https://funds.effectivealtruism.org/funds/far-future",
  },
  amf: {
    name: "Against Malaria Foundation",
    url: "https://www.againstmalaria.com/Default.aspx",
  },
  gw: {
    name: "GiveWell",
    url: "https://www.givewell.org/",
  },
  dl: {
    name: "Donor Lottery",
    url: "https://www.givingwhatwecan.org/donor-lottery",
  },
  gd: {
    name: "GiveDirectly",
    url: "https://community.givedirectly.org/campaigns/match2020",
  },
  miri: {
    name: "Machine Intelligence Research Institute",
    url: "https://intelligence.org/",
  },
  thl: {
    name: "The Humane League",
    url: "https://thehumaneleague.org.uk/",
  },
  fp_ccf: {
    name: "Climate Change Fund",
    url: "https://founderspledge.com/funds/climate-change-fund",
  },
  tdf: {
    name: "The Document Foundation",
    url: "https://www.documentfoundation.org/",
  },
  cea: {
    name: "Center for Effective Altruism",
    url: "https://www.centreforeffectivealtruism.org/",
  },
  fp: { name: "Founders Pledge", url: "https://founderspledge.com/" },
  awf: {
    name: "Animal Welfare Fund",
    url: "https://funds.effectivealtruism.org/funds/animal-welfare",
  },
};

export const donations: Donation[] = [
  {
    date: "2020-09-30",
    organisation: organisations.ltff,
    causeArea: cause.lt,
    description: (
      <>
        <p>
          First regular donation. This was made to be about 2% of my income,
          because in the US 1.44% of GDP goes to charity and I didn't want to be
          less charitable than the average person and call myself an EA even
          when I was considering whether to go for a full 10% Try Giving pledge.
        </p>
        <p>
          I chose the Long Term Future fund because their focus of existential
          risk, primarily from unfriendly AI with a lesser focus on artificial
          pandemics, is the object-level cause area with the greatest marginal
          impact. This fund hence mostly shares my goals, but is able to donate
          a larger pool of money and spend more time evaluating the most
          effective places to grant it to. I was also guided by 80,000 Hours'{" "}
          <a href="https://80000hours.org/2018/10/2018-talent-gaps-survey/">
            2018 talent gaps survey
          </a>
          , in which the median respondent from a survey of EA leaders guessed
          that donations to the Long Term Future were 167% as impactful as
          donations to the EA Infrastructure fund.
        </p>
      </>
    ),
    amount: 50,
  },
  {
    date: "2020-09-30",
    organisation: organisations.ltff,
    causeArea: cause.lt,
    amount: 50,
    description: <></>,
  },
  {
    date: "2020-11-11",
    organisation: organisations.amf,
    causeArea: cause.gp,
    description: (
      <p>
        <a href="https://twitter.com/ellegist/status/1326300697999142912">
          @ellegist on Twitter
        </a>{" "}
        pointed out that if everyone reading the silly little games donated £15,
        then many malaria nets could be provided. I was reading those silly
        little games so I donated £15.
      </p>
    ),
    amount: 18.75,
  },
  {
    date: "2020-11-18",
    organisation: organisations.ltff,
    causeArea: cause.lt,
    amount: 200,
    description: <></>,
  },
  {
    date: "2020-11-20",
    organisation: organisations.gw,
    causeArea: cause.gp,
    amount: 25,
    description: (
      <p>
        <a href="https://twitter.com/antirobust/status/1329867131475791873">
          @antirobust on Twitter
        </a>{" "}
        got invited to a donors-exclusive online event, and I wanted in on it. I
        actually don't think this donation actually got me invited to any of
        them.
      </p>
    ),
  },
  {
    date: "2020-11-25",
    organisation: organisations.dl,
    causeArea: cause.l,
    amount: 12.5,
    description: (
      <p>
        At this point, I'd read some arguments in favour of the donor lottery,
        though I wasn't totally sold on the prospect that it was the best place
        for small donors to give to. This tiny donation was something of a
        testing the waters, to see if I could feel motivated by buying a tiny
        chance of allocating a pool.
      </p>
    ),
  },
  {
    date: "2020-11-30",
    organisation: organisations.ltff,
    causeArea: cause.lt,
    amount: 50,
    description: <></>,
  },
  {
    date: "2020-12-01",
    organisation: organisations.gd,
    causeArea: cause.gp,
    amount: 18.79,
    description: (
      <p>
        GiveDirectly was matching donations to its{" "}
        <a href="https://community.givedirectly.org/campaigns/match2020">
          Remote Liberia Program
        </a>
        , and I wanted to show a little support, especially since
        <a href="https://twitter.com/decadantism/status/1343673206230536192">
          @decadantism on Twitter
        </a>{" "}
        was so nice as to raise it to my attention when I was making a thread of
        2020 year-end matching opportunites (sidenote: it seems from looking at
        my donation history that people can get me to donate like £30 to a
        global poverty charity just by asking me to. I hope all readers will use
        this power over me only for good).
      </p>
    ),
  },
  {
    date: "2020-12-02",
    description: (
      <p>
        <a href="https://www.every.org/">every.org</a> offers $25 charity
        giftcards, redeemable after donating $10. I made this out to MIRI as a
        default inoffensive longtermist organisation.
      </p>
    ),
    amount: 7.53,
    causeArea: cause.lt,
    organisation: organisations.miri,
  },
  {
    date: "2020-12-15",
    causeArea: cause.a,
    organisation: organisations.thl,
    amount: 32.81,
    description: (
      <p>
        The Humane League was running a pretty impressive 3&times; match for the
        end of 2020.
      </p>
    ),
  },
  {
    date: "2020-12-18",
    causeArea: cause.l,
    organisation: organisations.dl,
    amount: 50,
    description: (
      <p>
        Some more waters-testing on the donor lottery, which I was kind of sold
        on at this point but not enough to stake a huge amount of money on being
        the best place to give.
      </p>
    ),
  },
  {
    date: "2020-12-22",
    causeArea: cause.l,
    organisation: organisations.dl,
    amount: 50,
    description: <></>,
  },
  {
    date: "2021-04-24",
    causeArea: cause.lt,
    organisation: organisations.ltff,
    amount: 600,
    description: (
      <p>
        I decided to aim for the full 10% Try Giving pledge at this point; this
        donation took me up to 10%.
      </p>
    ),
  },
  {
    date: "2021-07-12",
    causeArea: cause.e,
    organisation: organisations.fp_ccf,
    amount: 125,
    description: (
      <>
        <p>
          At UK levels of carbon intensity, 1 day of income is about enough to
          fund sequestration or emissions reduction of one’s yearly CO2
          emissions ($38k&nbsp;gdp&nbsp;per&nbsp;capita, one day of which is
          $100, 6&nbsp;tons means $15/ton, which is about offset costs). Since,
          if everyone donated enough to avert their carbon emissions, global
          warming would be solved, I donated about a day worth of my income to
          reducing the amount of carbon dioxide in the atmosphere. A tentative
          name for this if I generalise it into a campaign is{" "}
          <a href="https://schelling.pt/web/statuses/106590854591262871">
            #AllInADaysWork
          </a>
          .
        </p>
        <p>
          Since this was deliberately made as an{" "}
          <a href="https://forum.effectivealtruism.org/posts/Yix7BzSQLJ9TYaodG/ethical-offsetting-is-antithetical-to-ea">
            offset
          </a>
          , I do not count this towards my 10% Try Giving pledge for 2021.
        </p>
      </>
    ),
  },
  {
    date: "2021-10-21",
    amount: 73.31,
    causeArea: cause.m,
    organisation: organisations.cea,
    description: (
      <>
        <p>
          Between April and October, I become more intuitively aware of the
          heavy-tailed-ness of effective altruism, especially given the coninued
          rise of Sam Bankman-Fried, who in April had $9 billion and in October
          had $23 billion, all pledged to eventually be doned to effective
          altruism. At the end of July,
          <a href="https://forum.effectivealtruism.org/posts/zA6AnNnYBwuokF8kB/is-effective-altruism-growing-an-update-on-the-stock-of">
            Benjamin Todd estimated
          </a>{" "}
          that effective altruism had a net present value of total commited
          funding of $46 billion, about half of which was one guy (Dustin
          Moskovitz), and about a third of which was one other guy (Sam
          Bankman-Fried). It seemed to me like the most impactful thing to do
          was to get more such guys on board with effective altruism. In
          response, I threw up my hands and resolved to give to the Donor
          Lottery, and to think very hard about the issue if I won.
        </p>
        <p>
          In November, <a href="https://www.every.org/">every.org</a> offered a
          doubling of donations of up to $100 for any organisation on its list.
          The Center for Effective Altruism has a track record of incubating
          important effective altruist projects that help with getting more
          people on board, such as EA Funds and the Donor Lottery (which I have
          donated to), as well as 80,000 Hours which{" "}
          <a href="https://80000hours.org/stories/sam-bankman-fried/">
            worked with SBF
          </a>{" "}
          earlier in his career, and so I guessed it would be at least half as
          effective as whatever I would eventually decide to grant to if I was
          chosen to allocate a future Donor Lottery pool.
        </p>
        <p>
          (Update 2023-07-07: And what of Sam-Bankman Fried being a fraud? Well,
          that's a problem! Because of that one guy's mistakes, effective
          altruism shrank by a third! Effective altruism shouldn't be so reliant
          on individual people like that. One thousand EA billionaires!)
        </p>
      </>
    ),
  },
  {
    date: "2021-11-18",
    amount: 14.11,
    causeArea: cause.nea,
    organisation: organisations.tdf,
    description: (
      <>
        <p>
          I use LibreOffice as my desktop document editor suite. Since I think
          people shouldn't be poor if they are nice enough to make software free
          (as they should), I donated a standard anchoring amount when they
          asked me to when I updated it.
        </p>
        <p>
          Since this was not made with the goal of producing the maximum amount
          of utility, I do not count this towards my 10% Try Giving pledge for
          2021.
        </p>
      </>
    ),
  },
  {
    date: "2021-11-10",
    amount: 73.95,
    causeArea: cause.m,
    organisation: organisations.fp,
    description: (
      <p>
        This donation was also to make use of{" "}
        <a href="https://www.every.org/">every.org</a>'s donation matching
        event. Founders Pledge, as an organisation intented to facilitate giving
        among high-net-worth people and get them on board, seemed like plausibly
        it was also working in the long-tailed distribution that contains
        potential billionaire EAs and hence I guessed it would be at least half
        as effective as whatever I would eventually decide to grant to if I was
        chosen to allocate a future Donor Lottery pool too.
      </p>
    ),
  },
  {
    date: "2021-11-27",
    amount: 2619.46,
    causeArea: cause.l,
    organisation: organisations.dl,
    description: (
      <>
        <p>
          And thus we reach the donor lottery, where I donate what is needed to
          make up a total of 10% of my income. This gives me a 0.174% chance of
          winning. Hopefully, someone exactly aligned with my values who is not
          me wins 😜.
        </p>
        <p>
          I think that a donor lottery is the optimal place to give because,
          assuming that you're risk neutral (which I should be, because total
          meta funding as of approximately the time of this donation was{" "}
          <a href="https://80000hours.org/2021/08/effective-altruism-allocation-resources-cause-areas/">
            $26,000,000/year
          </a>{" "}
          according to Benjamin Todd's estimates, much larger than what I am
          giving, so I'm unlikely to hit diminishing returns), there's only
          upside: at worst you'll donate the same expected monetary amount to
          wherever you were going to donate, and you can spend time evaluating
          where to donate to find somewhere better. Given that there is
          increasing marginal utility from it being optimal to spend more effert
          evaluating with a larger bankroll, the largest donor lottery (up until
          one starts hitting significant diminishing returns) is the best to
          give to, so I decided to give to the $2,000,000 one.
        </p>
      </>
    ),
  },
  {
    date: "2021-12-12",
    amount: 75,
    causeArea: cause.a,
    organisation: organisations.awf,
    description: (
      <>
        <p>
          UK per capita meat consumption is 32&nbsp;kg&nbsp;poultry,
          25&nbsp;kg&nbsp;pork, 18&nbsp;kg&nbsp;beef, 4&nbsp;kg&nbsp;mutton,
          1&nbsp;kg&nbsp;other&nbsp;land&nbsp;animals (
          <a href="https://ourworldindata.org/grapher/per-capita-meat-consumption-by-type-kilograms-per-year?country=~GBR">
            relevant OWID graph
          </a>
          ), and 20&nbsp;kg&nbsp;fish (
          <a href="https://ourworldindata.org/grapher/fish-and-seafood-consumption-per-capita?tab=chart&country=~GBR">
            relevant OWID graph
          </a>
          ), for a total of 32&times;-40 + 25&times;-30 + 18*2 + ~5&times;-20(?)
          + ~20&times;-100(?) = about -4000&nbsp;welfare&nbsp;points (
          <a href="https://forum.effectivealtruism.org/posts/YuFD4v7DFBcM57eSA/consequences-of-animal-product-consumption-combined-model">
            relevant EA forum post
          </a>
          ) per year, which is about -5000 per non-vegan adult.
          1&nbsp;chicken&nbsp;life = 2&nbsp;kg&nbsp;chicken =
          -80&nbsp;welfare&nbsp;points, so saving 60&nbsp;chickens offsets this.
          This donation is about the estimated cost to save that many animals.
          If everyone did this or became vegan, there would be no more factory
          farming; I am not yet vegan, so I am doing this.
        </p>
        <p>
          Since this was deliberately made as an
          <a href="https://forum.effectivealtruism.org/posts/Yix7BzSQLJ9TYaodG/ethical-offsetting-is-antithetical-to-ea">
            offset
          </a>
          , I do not count this towards my 10% Try Giving pledge for 2021.
        </p>
      </>
    ),
  },
  {
    date: "2022-07-18",
    organisation: organisations.fp_ccf,
    causeArea: cause.e,
    amount: 147.24,
    description: (
      <>
        <p>
          Climate change offsets for 2022, same reasoning as before. Also I was
          frustrated because the weather was really hot, and if everyone does
          this then the weather would be normal. As in, sometimes hot anyway.
          Nevertheless.
        </p>
        <p>
          Since this was deliberately made as an{" "}
          <a href="https://forum.effectivealtruism.org/posts/Yix7BzSQLJ9TYaodG/ethical-offsetting-is-antithetical-to-ea">
            offset
          </a>
          , I do not count this towards my 10% Try Giving pledge for 2022.
        </p>
      </>
    ),
  },
  {
    date: "2022-10-10",
    amount: 31.25,
    organisation: organisations.gw,
    causeArea: cause.gp,
    description: (
      <p>
        <a href="https://twitter.com/mealreplacer/status/1579436342999941121">
          @mealreplacer on Twitter
        </a>{" "}
        told me to if I smiled at the meme, and I did indeed smile at the meme,
        so I donated.
      </p>
    ),
  },
  {
    date: "2022-11-01",
    amount: 43.57,
    organisation: organisations.miri,
    causeArea: cause.lt,
    description: (
      <>
        <p>
          <a href="https://blog.every.org/fallgivingchallenge-the-monthly-match/">
            every.org was running a 2&times; match
          </a>{" "}
          for monthly donations made in November and December. I made the
          donation to MIRI because they're trying different things that are
          trying to aim directly at the heart of the alignment problem which I
          have become more concerned about this year; this year and the last
          they've been sharing their models of alignment due to being in
          somewhat of a rut after their main research direction didn't pan out,
          which isn't too much of a knock on them because no research directions
          are panning out; see the{" "}
          <a href="https://www.lesswrong.com/s/v55BhXbpJuaExkpcD">
            2022 MIRI Alignment Discussion
          </a>{" "}
          posts and the{" "}
          <a href="https://www.lesswrong.com/s/n945eovrA3oDueqtq">
            2021 MIRI Conversations
          </a>
          .
        </p>
        <p>
          Possibly CEA might be better, though I haven't estimated the
          flowthrough funding specifically towards well-aimed alignment research
          that tries to be something that scales up to superintelligences (i.e.
          actually notkilleveryoneism) from attracting large donors.
        </p>
      </>
    ),
  },
  {
    date: "2022-12-01",
    organisation: organisations.miri,
    causeArea: cause.lt,
    amount: 42.02,
    description: (
      <p>
        Part two of my monthly donation to make use of{" "}
        <a href="https://blog.every.org/fallgivingchallenge-the-monthly-match/">
          every.org's matching funds
        </a>
        .
      </p>
    ),
  },
  {
    date: "2023-01-05",
    amount: 4010.43,
    organisation: organisations.miri,
    causeArea: cause.lt,
    description: (
      <p>
        I pledged to donate 10% of my income in 2023; this makes up the rest of
        that amount. It's to MIRI, rather than to the donor lottery, because I
        was split between them and it seems that MIRI is efficient with respect
        to the alignment community, in the sense that if there's some avenue
        that has a large amount of hope, MIRI would be working on that. One{" "}
        <Link to="/blog/against-donor-lottery">
          reason you might not give to a donor lottery
        </Link>{" "}
        is if the overhead of a donor lottery isn't worth the additional
        benefit, and I don't strongly expect looking to find something reliably
        better than MIRI that MIRI itself can't find, or if they think they
        might be unhappy if they lose the lottery, and when considering giving
        to MIRI or to the Donor Lottery the Donor Lottery did feel somewhat
        unsatisfying.
      </p>
    ),
  },
];
