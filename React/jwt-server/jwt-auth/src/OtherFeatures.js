import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const OtherFeatures = () => {
  const state = useSelector(state => state)

  return (
    <>
      <h1>
        OtherFeatures
    </h1>
    </>
  )
}