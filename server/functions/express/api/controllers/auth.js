const {
  getAuth,
  getAuth: getClientAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { getAuth: getAdminAuth } = require("firebase-admin/auth");
const firestore = require("firebase-admin").firestore();

async function register(req, res) {
  const { email, password, first_name, last_name } = req.body;

  if (!first_name || !last_name) {
    res
      .status(400)
      .json({ error: { code: "first name or last name missing" } });
    return;
  }

  try {
    const auth = getAuth();
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const adminAuth = getAdminAuth();

    const token = await adminAuth.createCustomToken(credential.user.uid);

    await firestore
      .doc(`users/${credential.user.uid}`)
      .set({ first_name, last_name });

    res.status(201).json({ token });
  } catch (err) {
    const { code } = err;
    if (code === "auth/email-already-in-use") {
      res.status(400);
    } else {
      res.status(500);
    }
    res.json({
      error: {
        code: code ? code.replace("auth/", "") : undefined,
      },
    });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const credential = await signInWithEmailAndPassword(
      getClientAuth(),
      email,
      password
    );

    const token = await getAdminAuth().createCustomToken(credential.user.uid);

    res.status(200).json({ token });
  } catch (error) {
    if (
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found"
    ) {
      res.status(403);
    } else {
      res.status(500);
    }
    res.json({
      error: { code: error.code.replace("auth/", "") },
    });
  }
}

module.exports = { register, login };
