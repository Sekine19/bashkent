import React from 'react';
import { About } from './sections/About';
import { Place } from './sections/Place';
import { Food } from './sections/Food';
import { Partners } from './sections/Partners';
import { Blogs } from './sections/Blogs';
import { Gallery } from './sections/Gallery';
import { Comment } from './sections/Comment';
import { Location } from './sections/Location';
import Layout from './Layout';

export const Home = () => {
  return (
    <Layout>
      <About />
      <Place />
      <Food />
      <Partners />
      <Blogs />
      <Gallery />
      <Comment />
      <Location />
    </Layout>
  )
}
