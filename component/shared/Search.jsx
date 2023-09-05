"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import {allContexts} from './Context'

export default function Search() {
  const {textOfSearch, setTextOfSearch} = useContext(allContexts);

  // let linkId = document.getElementById("linksearch");
  return (
    <div>
      Search
      <Link href={"/search/" + textOfSearch} id="linksearch" >
        <BiSearchAlt /></Link>
     
      <input
        type="search"
        className="bg-orange-400"
        name="search"
        id="inputsearch"
        onChange={(e) => setTextOfSearch(e.target.value)}
      />
    
    </div>
  );
}
