import React from "react";

function StatusBadge(props) {
  const { status } = props;

  let backgroundColor = "gray";

  if (status === "New") backgroundColor = "lightblue";
  else if (status === "In Progress") backgroundColor = "orange";
  else if (status === "Converted") backgroundColor = "lightgreen";

  const badgeStyle = {
    padding: "4px 8px",
    borderRadius: "4px",
    backgroundColor: backgroundColor,
    display: "inline-block",
    fontSize: "0.9rem",
  };

  return <span style={badgeStyle}>{status}</span>;
}

export default StatusBadge;
