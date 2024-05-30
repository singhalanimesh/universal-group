import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="pt-36 h-screen text-center">
      <h1>Error </h1>
      <h2 className="pb-2">
        {err.status}: {err.statusText}
      </h2>
      {err.status == 404 && <h2 className="pb-4">Cannot Find Page</h2>}
      <Link to="/" className="p-2 bg-[#18d26e] rounded-full text-black">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
