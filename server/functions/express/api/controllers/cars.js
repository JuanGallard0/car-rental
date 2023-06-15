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
    res.status(500).json({
      error: { code: error.code },
    });
  }
};

const updateAvailability = async (req, res) => {
  try {
    const { id_car, is_available } = req.body;

    const docRef = firestore.collection("cars").doc(id_car);

    const data = await docRef.update({
      is_available: is_available,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: { code: error.code },
    });
  }
};

module.exports = { getAllCars, updateAvailability };
