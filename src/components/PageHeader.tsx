import React from "react";
import { Link } from "react-router-dom";

type PageHeaderProps = {
  title: string;
  created?: string;
  lastUpdated?: Date;
};

export const PageHeader = ({
  title,
  created,
  lastUpdated,
}: PageHeaderProps) => {
  return (
    <>
      <p>
        <Link to="/">Return home</Link>
      </p>
      <h1>{title}</h1>
      {created && <em>Created: {created}. </em>}
      {lastUpdated && (
        <em>Last updated: {lastUpdated.toISOString().split("T")[0]}. </em>
      )}
    </>
  );
};
