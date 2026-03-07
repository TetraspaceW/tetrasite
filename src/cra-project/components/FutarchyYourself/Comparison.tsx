import React from "react";
import { Manifold } from "./Manifold";

type MetricsAndCandidates = {
  candidate: string;
  metrics: string[];
}[];

export const Comparison = ({ data }: { data: MetricsAndCandidates }) => {
  return (
    <table width={"100%"} border={1}>
      <thead>
        <tr>
          {data.map(({ candidate }) => (
            <th>{candidate}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ metrics }) => (
          <tr>
            {metrics.map((metric) => (
              <td>
                <Manifold slug={metric} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
