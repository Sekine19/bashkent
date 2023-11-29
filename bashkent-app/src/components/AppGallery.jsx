import React from 'react'
import { Gallery } from './sections/Gallery'
import Layout from './Layout'

export const AppGallery = () => {
  return (
    <Layout>
      <div className='app-gallery'>
        <Gallery />
      </div>
    </Layout>
  )
}
