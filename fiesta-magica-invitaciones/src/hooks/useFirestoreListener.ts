import { useEffect, useState } from 'react';
import { firestore } from '../services/firebase';

const useFirestoreListener = (collection) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore.collection(collection).onSnapshot(
      (snapshot) => {
        const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(items);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collection]);

  return { data, loading, error };
};

export default useFirestoreListener;