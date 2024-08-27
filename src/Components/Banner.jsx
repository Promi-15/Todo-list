import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/svX6Vcv/OIP.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl hero-overlay bg-opacity-60 p-10 rounded-lg">
        
          <h1 className="mb-5 text-5xl font-bold text-black">Hello Welcome To Todo List </h1>
          <p className="mb-5 text-black font-bold text-2xl">
            You want yo add some daily work? then click here
          </p>
          <Link to="/todo" className="btn bg-blue-400 text-xl font-semibold">Let's  Start</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
