import React from "react";
import { PageHeader } from "./Page";

export const AgainstDonorLottery = () => {
  return (
    <>
      <PageHeader
        title="Reasons why one might not give to a donor lottery"
        created="2021-08-19"
      />
      <p>
        A{" "}
        <a href="https://forum.effectivealtruism.org/tag/donor-lotteries">
          donor lottery
        </a>{" "}
        is a way to convert a donation of $X into a larger donation of $X/p by
        making a bet with probability p of winning. This is done by having each
        donor contribute to a pool (with a fixed size, set by a benefactor
        making up the difference), and a winner is randomly chosen
        proportionally to how much they donate. The Center for Effective
        Altruism{" "}
        <a href="https://funds.effectivealtruism.org/donor-lottery">
          runs a yearly donor lottery
        </a>
        with pool sizes of $20,000, $100,000 and $500,000.
      </p>
      <p>
        For a contributor, the expected number of dollars they will be able to
        donate is the same whether or not they participate. If they win the
        donor lottery, then they have more money to allocate, so if there are
        economies of scale, which there are likely to be (the typical example is
        that the value of information from extra time evaluating where to donate
        money is proportional to the size of the donation, so it's worth it for
        the winner to spend more time evaluating their grant and hence getting a
        greater expected impact per dollar), this means that they have a greater{" "}
        <a href="https://forum.effectivealtruism.org/tag/expected-value">
          expected utility
        </a>{" "}
        when participating in the donor lottery.
      </p>
      <p>
        As such, I think that donor lotteries are hence obviously the most
        effective way for an individual small donor to turn their money into
        world improvement, and plan to give the remaining part of what I've
        pledged to give this year to the donor lottery.
      </p>
      <p>
        In trying to figure out why not everyone is giving to donor lotteries, I
        quickly wrote down some reasons why someone might choose not to, then
        added some thoughts on each bullet point to make this post.
      </p>
      <h2>Donor Lotteries are Very Unconventional</h2>
      <p>
        <h3>They don't trust the lottery administrator to pay out.</h3>
      </p>
      <p>
        Right now, I could announce a donor lottery on my Twitter and run it.
        Probably not many people would trust it though, because they'd be hoping
        that I allocate a large sum of money on behalf of the winner out of the
        goodness of my heart. This is less of an issue for institutions like the
        Center for Effective Altruism who have established track records, are
        made of demonstrably trustworthy people, and can be sued.
      </p>
      <p>
        <h3>They think they might be unhappy if they lose the lottery.</h3>
      </p>
      <p>
        From the "some drawbacks" section of{" "}
        <a href="https://funds.effectivealtruism.org/blog/why-you-should-give-to-a-donor-lottery-this-giving-season">
          Why you should give to a donor lottery this Giving Season
        </a>
        :
      </p>
      <blockquote>
        <p>
          A donor lottery doesn't have the same 'warm fuzzies' you might get if
          you were to know with 100% certainty that you had, for example, bought
          a certain number of bednets, or contributed directly to a cage-free
          campaign. In the case where you don't win (which happens most of the
          time), you won't have the knowledge of having directly contributed to
          a cause you care about. Hopefully this is offset by the knowledge
          that, in expectation, your donations are more effective than they
          would have been otherwise, but it's understandable if this doesn't
          feel as satisfying as donating directly.
        </p>
      </blockquote>
      <p>
        I also want to add that this unrewardingness might lead to a greater
        chance of{" "}
        <a href="https://forum.effectivealtruism.org/tag/value-drift#">
          value drift
        </a>
        compared to similar altruists who give to places with more certainty.
      </p>
      <p>
        <h3>
          They think they might lose a lot of status if they admit to their
          friends they gave to a donor lottery.
        </h3>
      </p>
      <p>
        The two aspects of this are firstly that donor lotteries are inherently
        unconventional so there's a cost in{" "}
        <a href="https://forum.effectivealtruism.org/posts/MH9suFZbxXCYsr5Z5/you-have-a-set-amount-of-weirdness-points-spend-them-wisely">
          weirdness points
        </a>{" "}
        paid for participating, and secondly there's an association with
        gambling, which is low-status (it's even called a lottery -
        quintessentially the domain of{" "}
        <a href="https://www.lesswrong.com/posts/vYsuM8cpuRgZS5rYB/lotteries-a-waste-of-hope">
          poor people who don't understand probability
        </a>
        ). Maybe the latter would be worth a change in naming, like calling it a
        "
        <a href="https://forum.effectivealtruism.org/posts/ST8vFfPropD9AYqkX/alternatives-to-donor-lotteries">
          donor pool
        </a>
        " where the a single member is "nominated as an allocator" "in
        proportion to their stake".
      </p>
      <h2>Other Donors Have Different Values</h2>
      <p>
        <h3>
          They don't trust the lottery administrator to send money where they
          recommend.
        </h3>
      </p>
      <p>
        The Center for Effective Altruism{" "}
        <a href="https://forum.effectivealtruism.org/posts/LNNrqDeAMqHFNKaGa/why-you-should-give-to-a-donor-lottery-this-giving-season#I_might_want_to_donate_to_something_speculative__or_something_that_isn_t_traditionally_considered_to_be_effective_by_the_EA_community_">
          has some limitations on where it is allowed to send grants:
        </a>
      </p>
      <blockquote>
        <p>
          The lottery is administered by EA Funds, which is a project of the
          Centre for Effective Altruism (CEA). CEA can only make grants that are
          within its charitable objectives, and retains sole discretion over
          where the final grants are made. This means that we won't make grants
          that run counter to broad altruistic principles, or to projects that
          don't satisfy our regular due diligence requirements. For practical
          purposes, we should be able to make grants to any registered charity
          in most parts of the world (provided we can easily verify their
          registration status). If you want to recommend the money be given to a
          project that is not currently a recommended charity, that's probably
          OK, but the project will need to demonstrate that they're providing a
          genuine public benefit, and pass our regular due diligence checks. We
          also can't grant to organizations that are directly involved in
          politics.
        </p>
      </blockquote>
      <p>
        A donor who thinks that one of these projects is the most effective way
        to improve the world would not want to participate in CEA's donor
        lottery.
      </p>
      <p>
        Even for a nonstandard grant that's allowed by CEA, a winner of the
        donor lottery might find that there could be some overhead (on the side
        of the project in demonstrating their genuine public benefit, on the
        side of CEA in due diligence checks, possibly on the side of the winner
        of the donor lottery in back and forth emails) that makes it more
        effective to donate to the project directly rather than through the
        donor lottery and sometimes getting the value of information from extra
        evaluation of the project and a larger bankroll to donate with.
      </p>
      <p>
        <h3>
          They think other donor lottery participants are evil in a way that
          increases superlinearly with bankroll.
        </h3>
      </p>
      <p>
        This is one objection that remains after the conclusion in{" "}
        <a href="https://forum.effectivealtruism.org/posts/q2tNYdtyXegAp9spc/doning-with-the-devil">
          Doning with the Devil
        </a>
        :
      </p>
      <blockquote>
        <p>
          You should only worry about your fellow lottery participants insofar
          as you think they are significantly misaligned with you <em>and </em>
          have significantly <em>greater</em> economies of scale than you do.
        </p>
      </blockquote>
      <p>
        I think that a proper donor lottery design avoids a lot of this problem;
        ideally, there's a benefactor who's infinitely wealthy and is willing to
        participate in the lottery because they're rich enough their utility is
        just straight-up linear in money who ensures that no matter who
        participates the winner gets the same amount of money.
      </p>
      <p>
        The EA Funds donor lottery has such a benefactor; the winner always gets
        $20,000, $100,000 or $500,000, depending on which lottery they choose,
        so even in the case where you do enter a donor lottery with an adversary
        whose harm scales superlinearly with their bankroll your donation
        wouldn't affect their chances of winning or the amount of evil that they
        do if they can win.
      </p>
      <p>
        <h3>They might be worried about fumbling their lottery win.</h3>
      </p>
      <p>
        The winner of the donor lottery is allocating a large amount of money,
        which depending on where it's sent could be anywhere from amazingly
        impactful{" "}
        <a href="https://80000hours.org/articles/effective-social-program/">
          to harmful
        </a>
        , and if it ends up being harmful or just suboptimal they might feel
        like the rest of the EA community is disappointed in them (especially if
        they anticipate large groups of internet people being cruel). This could
        put a lot of unwanted pressure on the winner, more than if they just
        quietly and privately donated their smaller amount of money without any
        reason for other people to pay attention.
      </p>
      <p>
        For the EA Funds donor lottery, this is mitigated by donor lottery
        winners and payouts being potentially anonymous; some people have chosen
        to make their allocations public and wrote reports (some can be found{" "}
        <a href="https://forum.effectivealtruism.org/tag/donor-lotteries">
          under the donor lotteries tag
        </a>
        ), though this is not a requirement to participate.
      </p>
      <h2>Better Opportunities Elsewhere</h2>
      <p>
        <h3>
          Their payoffs are sublinear in the amount of money they can allocate.
        </h3>
      </p>
      <p>
        It might be that someone knows of local hyper-effective places to donate
        that would benefit from $200 but not from $20,000. Luke Muehlhauser{" "}
        <a href="https://www.openphilanthropy.org/blog/suggestions-individual-donors-open-philanthropy-project-staff-2018#Assorted_recommendations_by_Luke_Muehlhauser">
          writes
        </a>{" "}
        that his personal donation strategy includes:
      </p>
      <blockquote>
        <p>
          Small one-time opportunities that seem (to me) to have higher expected
          value than Open Philanthropy's{" "}
          <a href="https://www.openphilanthropy.org/blog/good-ventures-and-giving-now-vs-later-2016-update#Bottom_line_on_the_last_dollar_question">
            last dollar
          </a>
          , and for which I have lots of context that would be more
          time-consuming to communicate to another funder than the monetary cost
          can justify. An example would be to buy a new laptop for a likely
          high-impact person who I know well and who is low on savings because
          they are transitioning to a higher-impact career and had an unexpected
          financial setback.
        </p>
      </blockquote>
      <p>
        If someone knows of opportunities like this, they might find their first
        $200 to be more impactful per dollar than their first $20,000.
      </p>
      <p>
        <h3>
          The overhead of a donor lottery isn't worth the additional benefit.
        </h3>
      </p>
      <p>
        There are costs associated with running a donor lottery. The
        administrator of the lottery needs to dedicate some funding and staff
        time to hosting the lottery itself, and the winner of the lottery has to
        dedicate some time to emails instead of just typing in a number and
        hitting the donate button.
      </p>
      <p>
        This might especially be the case given the existence of good donor
        pools in the EA community already. For example, for a donor interested
        in animal welfare, the people running the Animal Welfare EA Fund and
        Animal Charity Evaluators have already put a great deal of thought into
        the best places to donate to help animals and will make grants according
        to these evaluations, so the benefit of putting additional thought into
        it is small (one might think of this as, rather than a single donor
        going from spending 1 hour evaluating a grant to 100, it's the EA
        community as a whole going from spending X+1 hours to X+100 hours, where
        X is large and done by experts).
      </p>
      <p>
        <h3>
          They have donor matching opportunities elsewhere that beat the benefit
          from lotteries.
        </h3>
      </p>
      <p>
        For example, during December 2020, around the time the donor lottery was
        being run, matching funds tripled donations to{" "}
        <a href="https://archive.is/Q6Ada">the Humane League</a>, and doubled
        donations to the{" "}
        <a href="https://web.archive.org/web/20201218141321/https://doubleupdrive.com/">
          Good Food Institute, 80,000 Hours, Animal Charity Evaluators, Center
          for Effective Altruism, Clean Air Task Force, Founders Pledge,
          Givewell, the International Refugee Assistance Project, One for the
          World, StrongMinds, and the Center for Election Science
        </a>
        , and{" "}
        <a href="https://forum.effectivealtruism.org/tag/ea-giving-tuesday">
          for a few seconds every other charity
        </a>
        , as well as probably some matches that I haven't listed here.
      </p>
      <p>
        Some of these{" "}
        <a href="https://forum.effectivealtruism.org/posts/hQtayqi3r6bo3EPoh/the-counterfactual-validity-of-donation-matching">
          might not be counterfactually valid
        </a>
        , and some of the remainder might have the matching fund fully spent
        anyway, but the possibility of a 2-3× boost in impact in the cases that
        remain might be greater than the value of information from the extra
        evaluation they would do as a donor lottery.
      </p>
      <p>
        <h3>
          Donor lotteries are rare enough that they expect their values to
          change between now and then.
        </h3>
      </p>
      <p>
        Joey Savoie's survey of '10% donors' and the EA Survey give a rate of
        people dropping out of the EA community of{" "}
        <a href="https://forum.effectivealtruism.org/posts/eRQe4kkkH2pPzqvam/more-empirical-data-on-value-drift#Drop_out_rates">
          around 1/2 over five years
        </a>
        . Someone might prefer donating each paycheck instead of waiting for the
        next donor lottery and potentially ceasing to be engaged with EA in the
        meantime, or just being tempted to dip into the pool of money that
        they've set aside for their yearly donor lottery donation.
      </p>
      <p>
        <h3>
          Donor lotteries are rare enough that giving now might be better than
          giving later.
        </h3>
      </p>
      <p>
        In 80,000 Hours' 2018 talent gaps survey, EA organisations{" "}
        <a href="https://80000hours.org/2018/10/2018-talent-gaps-survey/#they-report-quite-high-discount-rates-on-future-donations">
          reported high discount rates on future donations
        </a>
        , with a median of 16% per year and a 90th percentile of 65% per year
        (though 80,000 Hours cautions against making major changes to ones'
        plans based on these due to some caveats they mention). These
        organizations would hence discount someone waiting until the next donor
        lottery is held (up to one year for the EA Funds donor lotteries) by
        this much.
      </p>
      <p>
        <h3>The donor lottery might not be tax deductible in their country.</h3>
      </p>
      <p>
        The EA donor lottery is tax deductible in the US, the UK, and the
        Netherlands; the lack of tax deductibility is another{" "}
        <a href="https://forum.effectivealtruism.org/posts/jq4ENfSYjuD5PbTCv/donating-effectively-does-not-necessarily-imply-donating-tax">
          small
        </a>
        but present discount a donor outside of those locations on the
        cost-effectiveness of their donations to the EA funds.
      </p>
      <h2>Wouldn't Give Anyway</h2>
      <p>
        <h3>They just haven't considered donor lotteries.</h3>
      </p>
      <p>
        Oh, that reminds me -{" "}
        <a href="https://forum.effectivealtruism.org/posts/LNNrqDeAMqHFNKaGa/why-you-should-give-to-a-donor-lottery-this-giving-season">
          have you considered donor lotteries
        </a>
        ?
      </p>
      <p>
        <h3>
          They don't give anywhere and donor lotteries are a subset of this.
        </h3>
      </p>
      <p>
        Also, some people just don't give to charity for other reasons beyond
        the scope of this post.
      </p>
    </>
  );
};
