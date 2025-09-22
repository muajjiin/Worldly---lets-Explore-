import { db } from "./client";
import { collection, getDocs, addDoc } from "firebase/firestore";

export const fetchTrips = async () => {
  const querySnapshot = await getDocs(collection(db, "trips"));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addTrip = async (trip: any) => {
  await addDoc(collection(db, "trips"), trip);
};
