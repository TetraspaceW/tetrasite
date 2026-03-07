import React from "react";
import { PageHeader } from "../Page";
import { Manifold } from "./Manifold";
import { Comparison } from "./Comparison";

export const FutarchyYourself = () => {
  return (
    <>
      <PageHeader
        title={"Solving Politics with Prediction Markets"}
        lastUpdated={new Date(2024, 8, 7)}
      />
      <p>
        Can you believe that, in the year 2024, there are still trivial
        epistemic differences that make up some large amount of political
        discourse? People don't just disagree with each other; they disagree
        with each other because they're ignoring or unaware of things that are
        common knowledge, giving no epistemic baseline from which to begin.
      </p>
      <p>
        I think that we can resolve the boring differences by creating
        prediction markets about every policy. There will still be disagreements
        - prediction markets are forecasts, not the actual ground truth that is
        yet unknown, and there are still values-differences that remain here on
        Ancient Earth where{" "}
        <a href="https://bsky.app/profile/sophaelia.thetetra.space/post/3kz3xtodbes2g">
          everyone is bounded
        </a>{" "}
        and maybe beyond, but these will be interesting disagreements, focusing
        on places where people <em>actually</em> disagree and aren't just
        failing to incorporate available evidence.
      </p>
      <p>
        So, my mission, if I choose to accept it:{" "}
        <strong>full branch coverage</strong> of politics. Then people will be
        able to vote on their values and bet on their beliefs. Like they should
        have been doing, the whole time.
      </p>
      <p>
        A disclaimer: I will have prediction markets, and I will have commentary
        about those markets. The commentary is accurate to the prediction
        markets as of the time of writing.
      </p>
      <h2>2024 United States Presidential Election</h2>
      <p>
        The{" "}
        <a href="https://en.wikipedia.org/wiki/2024_United_States_presidential_election">
          2024 United States presidential election
        </a>{" "}
        is primarily between two candidates: Kamala Harris, the Democratic
        nominee (replacing the incumbent Joe Biden, whose replacement was
        possibly informed by prediction markets but at the very least we know
        that it was a better idea than not because of prediction markets), and
        the Republican nominee Donald Trump.
      </p>
      <p>I know this because there's a prediction market about it.</p>
      <Manifold slug="jack/who-will-win-the-2024-us-presidenti-8c1c8b2f8964" />
      <details>
        <summary>2024 Democratic Party presidential primaries</summary>
        <p>
          Following the{" "}
          <a href="https://ballotpedia.org/Presidential_debates,_2024">
            June 27th debate
          </a>
          , there was much rumbling about whether Biden would resign. Harris was
          clearly the favourite, though Gretchen Whitmer and Gavin Newsom were
          also considered possible by the markets.
        </p>
        <Manifold slug="ManifoldPolitics/who-will-win-the-2024-democratic-pr-47576e90fa38" />
        <p>
          I know not what Newsom and Whitmer's policies would have been. A prior
          informed by kbog's random guess is that Democratic candidates are
          about as good as each other, and Donald Trump is really really bad,
          and based on that prior my first guess as to how good these candidates
          are would be how these candidates would influence the chances of any
          Democratic winning the presidential election.
        </p>
        <p>
          From the conditional market, Whitmer had about a 60% chance of winning
          if the nominee, Newsom and Harris had about a 45% of winning if they
          were the nominee, and Biden had about a 30% chance. (I give these in
          the past tense because now the nominee is overwhelmingly Harris, so
          the liquidity on the other conditional markets is scuffed enough that
          I don't trust them. This is also why I'm not considering the entire
          space of possible candidates, just those four plausible candidates.)
          This means that it was a good idea ex ante to replace Biden! No more
          guessing; if you disagree that it was a good idea, you now know that
          you're claiming to know something others don't, and you can tell them{" "}
          <em>that thing</em>.
        </p>
        <Manifold slug="ManifoldPolitics/who-would-win-the-presidential-elec" />
        <p>
          Maybe this indicates that Democratic officials should have pushed for
          Whitmer to be the nominee? Expected utility is about multiplying
          probability by utilons, and I only have a very lossy guess at the
          utilons. Harris is going to be the nominee now, and that was a good
          idea. Yay ^^.
        </p>
      </details>
      <details>
        <summary>
          2024 Democratic Party vice presidential candidate selection
        </summary>
        <p>
          When Harris became the nominee, she needed to pick a vice president.
          Plausible vice presidential candidates were the two finalists Josh
          Shapiro and Tim Walz, and other candidates on the shortlist Andy
          Beshear, Pete Buttigieg and Mark Kelly, and also Roy Cooper and
          Gretchen Whitmer.
        </p>
        <p>
          The three effects of a vice presidential nomination that I see are:
        </p>
        <ul>
          <li>Increase in election chances of the presidential candidate.</li>
          <li>
            Increase in election chances of that vice president, in future
            elections.
          </li>
          <li>
            Possibility of the current president being replaced by the vice
            president.
          </li>
        </ul>
        <p>
          I didn't catch the veepstakes in time to make markets about how good
          they would be as presidents. There <em>is</em> a market about how
          they'd influence the election chances of the current president. They
          looked something like this, from eyeballing the chart (I've bolded the
          two eventual finalists):
        </p>
        <table border={1}>
          <thead>
            <th>Candidate</th>
            <th>P(win|VP)</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Josh Shapiro</strong>
              </td>
              <td>
                <strong>46%</strong>
              </td>
            </tr>
            <tr>
              <td>Mark Kelly</td>
              <td>45%</td>
            </tr>
            <tr>
              <td>Pete Buttigieg</td>
              <td>44%</td>
            </tr>
            <tr>
              <td>Gretchen Whitmer</td>
              <td>44%</td>
            </tr>
            <tr>
              <td>
                <strong>Tim Walz</strong>
              </td>
              <td>
                <strong>43%</strong>
              </td>
            </tr>
            <tr>
              <td>Andy Beshear</td>
              <td>42%</td>
            </tr>
            <tr>
              <td>Roy Cooper</td>
              <td>41%</td>
            </tr>
          </tbody>
        </table>
        <p>
          There was about a 5% difference between the top and bottom VP
          candidates by probability of winning, with{" "}
          <a href="https://www.vox.com/politics/364677/tim-walz-harris-vp-josh-shapiro">
            Josh Shapiro
          </a>{" "}
          leading plausibly because he is the popular incumbent governor of
          Pennsylvania, a swing state with 20 electors, and because he is more
          moderate than Walz.
        </p>
        <Manifold slug="NathanpmYoung/would-harris-win-if-this-person-wer" />
      </details>
      <p>
        As such, the single choice point is who to vote for in the presidential
        election.
      </p>
      <h3>Air Pollution</h3>
      <Comparison
        data={[
          {
            candidate: "Kamala Harris",
            metrics: ["Tetraspace/if-harris-wins-will-annual-us-co2-e"],
          },
          {
            candidate: "Donald Trump",
            metrics: ["NcyRocks/carbon-brief-forecast-if-trump-wins"],
          },
        ]}
      />
      <h3>Criminal Justice</h3>
      <h3>Immigration</h3>
      <Comparison
        data={[
          {
            candidate: "Kamala Harris",
            metrics: ["Tetraspace/if-trump-wins-will-undocumented-imm"],
          },
          {
            candidate: "Donald Trump",
            metrics: ["voodoo/if-trump-wins-will-immigration-go-d"],
          },
        ]}
      />
      <h3>Foreign Aid</h3>
      <Comparison
        data={[
          {
            candidate: "Kamala Harris",
            metrics: [],
          },
        ]}
      />
      <h3>Democracy</h3>
    </>
  );
};
