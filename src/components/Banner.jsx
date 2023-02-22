import Link from 'next/link'
import React from 'react'

const Banner = ({banner, address}) => {
  return (
    <Link href={address}>
      <img src={banner} alt="" />
    </Link>
  )
}

export default Banner
