import ShrimpLineAnimation from '@/components/demo/Shrimplineanimation'
import React from 'react'

const page = () => {
  return (
    <section className="relative min-h-[300vh] bg-black overflow-hidden">
       <ShrimpLineAnimation scrollLength="300vh" />
      {/* your content on top */}
    </section>
  )
}

export default page
