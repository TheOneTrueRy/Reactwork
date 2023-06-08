import React from 'react';
import { AppState } from "../AppState.js";
import { observer } from "mobx-react";

function AdCard() {
  const ads = AppState.ads

  return (
    <>
    {ads.map((ad) => (
      <img src={ad.tall} alt={ad.title} title={ad.title} key={ad.title} className="img-fluid mt-2"/>
      ))}
    </>
  )

}

export default observer(AdCard)