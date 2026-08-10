const { signInWithEmailAndPassword } = require("firebase/auth");
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyB_HzRrVdysW3o-UXUdCkPqW9rH4fWWjyY",
  authDomain: "rankpilot-h3jpc.firebaseapp.com",
  projectId: "rankpilot-h3jpc",
  storageBucket: "rankpilot-h3jpc.firebasestorage.app",
  messagingSenderId: "283736429782",
  appId: "1:283736429782:web:a3e387a3a79a592121e577",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("🔐 Testing corrected user credentials...\n");

const testUsers = [
  { email: "dev@example.com", password: process.env.TEST_PASSWORD_FREE ?? '' },
  { email: "starter@example.com", password: process.env.TEST_PASSWORD_STARTER ?? '' },
  { email: "agency@example.com", password: process.env.TEST_PASSWORD_AGENCY ?? '' },
  { email: "enterprise@example.com", password: process.env.TEST_PASSWORD_ENTERPRISE ?? '' },
  { email: "admin@example.com", password: process.env.TEST_PASSWORD_ADMIN ?? '' },
];

const testLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(`✅ ${email}: SUCCESS (UID: ${userCredential.user.uid})`);
    await auth.signOut(); // Sign out to test next user
    return true;
  } catch (error) {
    console.log(`❌ ${email}: FAILED - ${error.code}`);
    return false;
  }
};

const runTests = async () => {
  let successCount = 0;

  for (const user of testUsers) {
    const success = await testLogin(user.email, user.password);
    if (success) successCount++;
  }

  console.log(
    `\n📊 Results: ${successCount}/${testUsers.length} users can authenticate`
  );

  if (successCount === testUsers.length) {
    console.log("🎉 All authentication tests PASSED!");
  } else {
    console.log("⚠️ Some users need password updates in Firebase");
  }

  process.exit(0);
};

runTests().catch(console.error);
