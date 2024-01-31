import React from 'react'
import aboutimage from "@/public/img/about-team.png"
import Link from 'next/link'

const BreadCrumbs = ({dynamicText, link}:any) => {
  return (
    <section className="uper-section">
      <h1 className="font-black text-[40px]">{dynamicText}</h1>
      <p><Link href={link}>Home</Link> / {dynamicText}</p>
    </section>
   
  )
}

export default BreadCrumbs