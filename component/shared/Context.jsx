"use client"
import React, { createContext, useContext, useState } from 'react'

export const allContexts = createContext({})
export default function Context({children}) {
    const [textOfSearch, setTextOfSearch] = useState("")

const allContextsToProvider = {textOfSearch, setTextOfSearch}
  return (
    <allContexts.Provider value={allContextsToProvider}>
        {children}
    </allContexts.Provider>
  )
}
