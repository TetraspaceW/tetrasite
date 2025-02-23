import React from "react";
import { PageHeader } from "../Page";
import { donations } from "./Donations";
import donationsChart from "../../assets/donationsChart.svg";
import { Donation } from "./Donation";

export const EffectiveAltruism = () => {
  return (
    <>
      <PageHeader
        title="Effective Altruism"
        lastUpdated={new Date("2024-04-22")}
      />
      <h2>Where to Give?</h2>
      <p>
        For small donors, I currenly think that the best place to give, absent
        matching schemes, is to a donor lottery, like the one that Giving What
        We Can{" "}
        <a href="https://www.givingwhatwecan.org/donor-lottery">
          runs at the end of each year.
        </a>{" "}
        This is because, assuming that you're risk neutral (which you probably
        should be, if you're a small donor and hence are donating a small amount
        compared to the amount dedicated to optimising in your cause area),
        there's only upside: at worst you'll donate the same expected monetary
        amount to wherever you were going to donate, and you can also spend time
        evaluating where to donate to find somewhere even better. Given that
        there is increasing marginal utility from it being optimal to spend more
        effort evaluating with a larger bankroll, the largest donor lottery (up
        until one starts hitting significant diminishing returns) is the best to
        give to.
      </p>
      <p>
        On the object level, because "Donor Lottery" is passing the buck to a
        longer deliberation process and you might want my opinions on where that
        deliberation process might end up, I'm not so sure where to give. I
        think giving to the{" "}
        <a href="https://intelligence.org">
          Machine Intelligence Research Institute
        </a>{" "}
        (MIRI) might be a good idea; I think that, if there are alignment plans
        that have a large amount of hope, MIRI would be able to notice them, and
        merge and assist towards that; and otherwise I don't expect MIRI to
        spend money on things that are alignment-themed but that they don't
        think would help.
      </p>
      <h2>My Donations</h2>
      <p>
        The following is a list of every charitable donation I have made, as of
        the last donation listed, along with the reasoning behind it, so that
        you too can maximise utility. Each amount donated has been scaled so
        that the area covered by the number roughly corresponds to the amount,
        in the interests of scope sensitivity.
      </p>
      <table border={1} className="table">
        <tr>
          <th>Date</th>
          <th>Organisation</th>
          <th>Cause Area</th>
          <th>Amount</th>
          <th>Explanation</th>
        </tr>
        {donations
          .sort((a, b) => b.date.valueOf() - a.date.valueOf())
          .map((donation) => (
            <Donation donation={donation} />
          ))}
      </table>
      <h2>Chart</h2>
      <p>Chart of my donations by cause area and date, up to 2023-12-30.</p>
      <center>
        <img
          src={donationsChart}
          alt={
            "A chart of the table on this page, grouped by cause area. In chronological order: £565 in 2020, mostly to long-term causes. £3592 in 2021, mostly to the donor lottery with about a sixth to long-term causes and a small amount to other causes. £264 in 2022, split between long-term and global poverty causes with a small amount to other causes. £8088 in 2023, split between long-term causes and the donor lottery with a small amount to other causes."
          }
        />
      </center>
    </>
  );
};
