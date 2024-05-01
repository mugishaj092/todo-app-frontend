import React from "react";
import PropTypes from "prop-types";
import "../Styles/SideBar.css";
import { Badge, BadgeCheck } from "lucide-react";

interface PendingLabelProps {
  status: string;
}

const PendingLabel: React.FC<PendingLabelProps> = (props) => {
  const badgeIcon = props.status === "pending" ? <Badge /> : <BadgeCheck />;

  return (
    <div className={`${props.status}-label`}>
      {badgeIcon}
    </div>
  );
}

PendingLabel.propTypes = {
  status: PropTypes.oneOf(["pending", "completed"]).isRequired,
};

export default PendingLabel;
