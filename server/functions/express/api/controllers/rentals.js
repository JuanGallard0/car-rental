const firestore = require("firebase-admin").firestore();

const createRental = async (req, res) => {
  try {
    const { id_user, id_car } = req.body;

    const docRef = firestore.collection("rentals").doc();

    const data = await docRef.set({
      id_user: id_user,
      id_car: id_car,
      is_active: true,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({
      error: { code: error.code },
    });
  }
};

module.exports = { createRental };
