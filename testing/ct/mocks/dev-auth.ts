export const DEV_USERS = {
  free: {
    email: "free@example.com",
    password: process.env.TEST_PASSWORD_FREE ?? '',
    authMethod: "email",
    uid: "free",
    displayName: "Free User",
  },
  starter: {
    email: "starter@example.com",
    password: null,
    authMethod: "google",
    uid: "starter",
    displayName: "Starter User",
  },
} as const;

export const loginAsDevUser = async () => ({
  uid: "mock",
  email: "mock@example.com",
});
export const useMockAuth = () => ({ user: null });
