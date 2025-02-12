import { useState } from "react";

const HeroComponentText = () => {
  const name = ["O", "s", "h", "n", "i", "c", " ", "R", "i", "j", "a", "l"];
  const profession = ["F", "u", "l", "l", " ", "S", "t", "a", "c", "k", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"];

  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

  const handleHover = (index: string) => {
    setHoveredIndex(index);

   
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="textComponent w-full lg:w-[45%] py-12 sm:px-6 lg:px-8">
      {/* Name Section */}
      <h1 className="mb-6 text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
        {name.map((char, index) => (
          <span
            key={`name-${index}`} // Add unique prefix to avoid conflicts
            className={` inline-block transition-transform duration-300 ${
              hoveredIndex === `name-${index}` ? "opacity-0" : ""
            }`}
            onMouseEnter={() => handleHover(`name-${index}`)} // Use unique index for hover effect
            onMouseLeave={handleMouseLeave}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Profession Section */}
      <span className="bg-clip-text text-4xl tracking-tight text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
        {profession.map((char, index) => (
          <span
            key={`profession-${index}`} // Add unique prefix to avoid conflicts
            className={`inline-block transition-transform duration-300 ${
              hoveredIndex === `profession-${index}` ? "opacity-0" : ""
            }`}
            onMouseEnter={() => handleHover(`profession-${index}`)} // Use unique index for hover effect
            onMouseLeave={handleMouseLeave}
          >
            {char}
          </span>
        ))}
      </span>

      {/* Description */}
      <p className="text-lg text-white leading-relaxed mt-20">
        I’m a full-stack developer with expertise in React, Node.js, Express, Tailwind CSS, MySQL, and MongoDB. I specialize in building scalable, high-performance web applications, delivering seamless user experiences from front-end to back-end. With a focus on problem-solving and continuous learning, I’m committed to creating innovative solutions that drive business success. Let’s connect if you’re looking for a reliable and growth-driven developer!
      </p>

      <p className="mt-3 text-md text-gray-600">
        Let's build something amazing together!
      </p>
    </div>
  );
};

export default HeroComponentText;
