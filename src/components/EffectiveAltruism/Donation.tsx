import { DonationData } from "./Donations";

type DonationProps = {
  donation: DonationData;
};

export const Donation = ({ donation }: DonationProps) => {
  const {
    organisation: { url, name },
    date,
    amount,
    description,
    causeArea,
  } = donation;

  // this sets area proportional to the donation amount
  const amountSize = Math.round(
    (5 * Math.sqrt(amount)) / Math.floor(Math.log10(amount) + 4)
  );
  const amountStyle = {
    fontSize: `${amountSize}px`,
  };

  return (
    <tr>
      <td className="table-nowrap-cell">{date.toISOString().split("T")[0]}</td>
      <td>
        <p>
          <a href={url}>{name}</a>
        </p>
      </td>
      <td className="table-nowrap-cell">{causeArea}</td>
      <td style={amountStyle}>{`£${amount.toFixed(2)}`}</td>
      <td>{description}</td>
    </tr>
  );
};
