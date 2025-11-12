"use client";

const About = () => (
  <section className="w-full bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Left side - Static image */}
      <div className="flex-1 flex justify-center">
        <img
          src="/aboux.jpg"
          alt="WeKeyarPlus Pharmacy"
          className="w-full max-w-xl h-auto"
        />
      </div>
      {/* Right side - Content */}
      <div className="flex-1">
        <p className="text-lg font-normal mb-2 text-black">About</p>
        <h2 className="text-5xl font-bold text-black mb-8">
          WeKeyarPlus Pharmacy
        </h2>
        <p className="text-lg text-black mb-8 leading-relaxed">
          With increasingly busy schedules, you may often forget to take out the
          time to buy your medicines. We’ve got you covered. Just tell us the
          medicines you need and we’ll have them delivered to your doorstep
          without any hassles at a great discount.
        </p>
        <p className="text-lg text-black leading-relaxed">
          We have nine stores in Bhubaneswar - IRC Village (72059 59343),
          Chandrasekharpur (72059 59351), Dumduma (72059 59348), GGP Colony
          (72059 59353), Kalinga Vihar (72059 59346), Mausima Square (72059
          59344), Sum Hospital (72059 59352), VSS Nagar (72059 59349),
          Samantrapur (72059 59350).
        </p>
      </div>
    </div>
  </section>
);

export default About;
