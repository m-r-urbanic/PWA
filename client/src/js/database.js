import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

  export const putDb = async (content) => {
    //error if not implemented
    console.error('putDb not implemented');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.add({ jate: content });
    const result = await request;
    //on success, log the data that was saved
    console.log('Data saved to the openDB', result);
}

export const getDb = async (id) => {
    console.error('getDb not implemented');
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(id);
    const result = await request;
    console.log('result.value', result);
    return result;
}

initdb();
