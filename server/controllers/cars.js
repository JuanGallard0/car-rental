const { db } = require("../util/admin");

const getAllProducts = async (req, res) => {
  try {
    const carsRef = db.collection("cars");
    const snapshot = await carsRef.get();
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getAllProducts };
