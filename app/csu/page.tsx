import React from "react";
import College from "../components/College";

export default function page() {
  return (
    <>
      <College
        uni="CALIFORNIA STATE UNIVERSITY, MONTEREY BAY"
        logo="/logo/csu.png"
        address="100 Campus Center, Seaside, CA 93955, United States"
        link="https://csumb.edu/"
        hero="/csu.jpg"
        size={100}
      />
    </>
  );
}
