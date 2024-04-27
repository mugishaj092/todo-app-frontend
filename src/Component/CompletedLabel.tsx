import React from 'react'
import "../Styles/SideBar.css";
import { BadgeCheck } from 'lucide-react';

function CompletedLabel() {
  return (
    <div className='completed-label'>
      <BadgeCheck />
    </div>
  )
}

export default CompletedLabel
