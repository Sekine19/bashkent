import React from 'react';
import { About } from './sections/About';
import { Gallery } from './sections/Gallery';
import Layout from './Layout';


export const AppAbout = () => {
  return (
    <Layout>
      <div className='app-home'>
        <About />
        <Gallery />
      </div>
    </Layout>
  )
}
