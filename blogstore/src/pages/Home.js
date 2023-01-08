import React from 'react'
import { useAppContext } from '../store/Store';
import Layout from '../components/Layout';
import Frame from '../components/Frame';
import '../assets/home.css'

function Home() {

    const store = useAppContext();
  return (
    <Layout>
        <div className= 'framesContainer'>
            {store.items.map((item) => (
            <Frame key ={item.id} item={item}/>
            ))}
        </div>
    </Layout>
  );
}

export default Home;