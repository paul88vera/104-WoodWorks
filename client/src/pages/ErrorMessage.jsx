import { useRouteError } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ErrorMessage() {
  const error = useRouteError();
  return (
    <div>
      {import.meta.env.MODE !== "production" && (
        <>
          {error.message}
          {error.stack}
        </>
      )}
    </div>
  );
}
