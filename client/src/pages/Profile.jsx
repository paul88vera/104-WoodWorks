import { SignIn, useUser } from "@clerk/clerk-react";

export default function Profile() {
  const { isSignedIn } = useUser();

  return (
    <>{!isSignedIn ? <SignIn /> : <h1 className="section-title">Profile</h1>}</>
  );
}
