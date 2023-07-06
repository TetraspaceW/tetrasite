import { PageHeader } from "../PageHeader";
import { donations } from "./Donations";
import donationsChart from "../../assets/donationsChart.svg";

export const EffectiveAltruism = () => {
  return (
    <>
      <PageHeader title="Effective Altruism" lastUpdated="2023-06-09" />
      <h2>Where to Give?</h2>
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
        {donations.map((donation) => {
          // this sets area proportional to the donation amount
          const amountSize = Math.round(
            (5 * Math.sqrt(donation.amount)) /
              Math.floor(Math.log10(donation.amount) + 4)
          );
          const amountStyle = {
            fontSize: `${amountSize}px`,
          };

          return (
            <tr>
              <td className="table-nowrap-cell">{donation.date}</td>
              <td>
                <p>
                  <a href={donation.organisation.url}>
                    {donation.organisation.name}
                  </a>
                </p>
              </td>
              <td className="table-nowrap-cell">{donation.causeArea}</td>
              <td style={amountStyle}>{`£${donation.amount.toFixed(2)}`}</td>
              <td>{donation.description}</td>
            </tr>
          );
        })}
      </table>
      <h2>Chart</h2>
      <p>Chart of my donations by cause area and date, up to 2023-01-09.</p>
      <center>
        <img
          src={donationsChart}
          alt={
            "A chart of the table on this page, grouped by cause area. In chronological order: £565 in 2020, mostly to long-term causes. £3592 in 2021, mostly to the donor lottery with about a sixth to long-term causes and a small amount to other causes. £264 in 2022, split between long-term and global poverty causes with a small amount to other causes. £4010 in 2023, entirely to long-term causes."
          }
        />
      </center>
    </>
  );
};
