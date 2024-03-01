import {  useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="mt-16 bg-[background] flex flex-col justify-center items-center">
      <img
        src="/notfound.png"
        alt="About Section Image"
        className="mt-8 md:h-96  sm:mb-8 "
      />
      <button
        onClick={() => navigate(-1)}
        className="text-[14px] bg-skyblue hover:bg-nrmblue transition-all ease-in-out px-5 py-3 rounded-lg  text-white mt-3"
      >
        Try again
      </button>
    </div>
  );
}

export default NotFound;
