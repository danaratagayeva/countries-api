import React from 'react'
import Filter from '../../components/filter/Filter';
import Footer from '../../components/footer/Footer';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import Search from '../../components/search/Search';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Search/>
      <Filter/>
      <List/>
      <Footer/>
    </div>
  )
}

export default Home