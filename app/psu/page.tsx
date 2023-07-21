import React from "react";
import College from "../components/College";

export default function page() {
  return (
    <div>
      <College
        uni="PENN STATE UNIVERSITY"
        link="https://www.psu.edu/"
        logo="/logo/psu.png"
        size={100}
        address="1031 Edgecomb Ave, York, PA 17403, United States"
      />
    </div>
  );
}
