import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAppContext } from '../store/Store';


function View() {
  const [item, setItem] = useState(null);
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const frame = store.getItem(params.frameId);
    setItem(frame);
  }, []);

  if (!item){
    return <Layout>Item not found</Layout>;
  }
  return (
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover? <img src={item?.cover} width="400" alt='cover'/> : ''}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? 'Leido' : 'Por terminar'}</div>
      <div>{item?.review}</div>
    </Layout>
  )
}

export default View;