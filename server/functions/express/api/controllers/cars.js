const firestore = require("firebase-admin").firestore();

const getAllCars = async (req, res) => {
  try {
    const carsRef = firestore.collection("cars");
    const snapshot = await carsRef.get();
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { getAllCars };
