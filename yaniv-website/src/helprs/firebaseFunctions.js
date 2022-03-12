import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

export const getData = async (db, collectionName) => {
  const col = collection(db, collectionName);
  let snapshot;
  try {
    snapshot = await getDocs(col);
  } catch (err) {
    throw new Error(err, "Cannot located the collection you want");
  }
  const dataList = snapshot.docs.map((doc) => doc.data());

  return dataList[0];
};
