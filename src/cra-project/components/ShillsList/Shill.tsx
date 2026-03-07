import React from "react";

import { ShillData } from "./Shills";

type ShillProps = { shill: ShillData };

export const Shill = ({ shill }: ShillProps) => {
  const { links, shill: name, type, description } = shill;

  const linksList = Array.isArray(links) ? links : [links];

  return (
    <tr>
      <td>{name}</td>
      <td>
        <p>
          {type}. {description}{" "}
          {linksList.map((shillLink, idx) => {
            return (
              <>
                <a href={shillLink.url}>
                  {shillLink.name} ({shillLink.location})
                </a>
                {idx !== linksList.length - 1 ? ", " : ""}
              </>
            );
          })}
          .
        </p>
      </td>
    </tr>
  );
};
