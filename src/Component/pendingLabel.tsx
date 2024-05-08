import React from "react";
import { Badge, BadgeCheck } from "lucide-react";

interface PendingLabelProps {
  status: boolean;
}

const PendingLabel: React.FC<PendingLabelProps> = (props) => {
  const badgeIcon = props.status ? <BadgeCheck /> : <Badge />;

  return (
    <div className={`${props.status ? "completed" : "pending"}-label`}>
      {badgeIcon}
    </div>
  );
};

export default PendingLabel;