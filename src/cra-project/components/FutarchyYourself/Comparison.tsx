import { Manifold } from "./Manifold";

type MetricsAndCandidates = {
  candidate: string;
  metrics: string[];
}[];

export const Comparison = ({ data }: { data: MetricsAndCandidates }) => {
  const rowCount = Math.max(...data.map(({ metrics }) => metrics.length));

  return (
    <table width={"100%"} border={1} className="table">
      <thead>
        <tr>
          {data.map(({ candidate }) => (
            <th>{candidate}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: rowCount }, (_, rowIndex) => (
          <tr>
            {data.map(({ metrics }) => {
              const metric = metrics[rowIndex];

              return (
                <td>
                  {metric ? <Manifold slug={metric} /> : null}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
