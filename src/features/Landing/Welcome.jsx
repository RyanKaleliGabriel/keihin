function Welcome() {
  return (
    <section
      id="Home"
      className="bg-[url('/welcome.jpg')] font-popins text-center py-36 bg-cover bg-center"
    >
      <div className="mb-20">
        <h2 className="text-[lightgrey]">Welcome to Keihin</h2>
        <p className="text-[1.5rem] text-[white]">
          A World of Service Excellence
        </p>
      </div>
    </section>
  );
}

export default Welcome;
