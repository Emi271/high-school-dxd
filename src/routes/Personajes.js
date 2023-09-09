import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useAppContext } from '../components/Context';
import { Card } from 'react-bootstrap';
import Header from '../components/Header';
const PersonajesList = () => {
  const [items, setItems] = useState([]);
  const { setData } = useAppContext()

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, 'personajes');

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setItems(docs);
      setData(docs);
    });
  }, [setData]);

  return (
    <div className="fondo">
    <Header/>
    <main className=" px-0 mx-0 justify-content-center">
    <div className="row  mx-auto mb-3 mt-3 justify-content-around">
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
              <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>{item.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
    </main>
    </div>
  );
};

export default PersonajesList;
