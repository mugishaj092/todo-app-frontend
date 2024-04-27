import React from "react";
import "../Styles/SideBar.css";
import { Badge } from "lucide-react";

function pendingLabel() {
  return <div className="pending-label">
    <Badge />
  </div>;
}

export default pendingLabel;
