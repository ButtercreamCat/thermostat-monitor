import React from "react";
import { Link } from "react-router-dom";
import "./UnitsListPage.scss";

const unitLists = [
  100,
  110,
  120,
  130,
  140,
  150,
  160,
  170,
  180,
  190,
  200,
  210,
  220,
  230,
  240,
  250,
  260,
  270,
  280,
  290,
  300,
  310,
  320,
  330,
  340,
  350,
  360,
  370,
  380,
  390,
  400,
  410,
  420,
  430,
  440,
  450,
  460,
  470,
  480,
  490,
  500,
  510,
  520,
  530,
  540,
  550,
  560,
  570,
  580,
  590,
  600,
  610,
  620,
  630,
  640,
  650,
  660,
  670,
  680,
  690
];

function UnitsListPage() {
  return (
    <>
      <h1 className="unitsList_title">Abc Condo</h1>
      <div className="unitsList">
        {unitLists.map(unitNumber => (
          <Link
            key={unitNumber}
            to={`/unit/${unitNumber}/thermostat`}
            className="button button-square-withIcon"
          >
            <span className="icon-house"></span>
            <div>Unit {unitNumber}</div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default UnitsListPage;
