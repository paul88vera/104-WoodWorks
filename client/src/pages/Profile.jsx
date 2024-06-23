import { SignIn, useUser } from "@clerk/clerk-react";

export default function Profile() {
  const { isSignedIn, user } = useUser();

  return (
    <>
      {!isSignedIn ? (
        <SignIn />
      ) : (
        <>
          <h1 className="section-title">{user.fullName}&apos;s Profile</h1>
          <div>{user.fullName}</div>
        </>
      )}
    </>
  );
}
