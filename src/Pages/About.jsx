import React, { use } from "react";
import { Helmet } from "react-helmet-async";
const aboutResponse=fetch("/about.json").then(res=>res.json())
const About = () => {
    const about=use(aboutResponse)
    // console.log(about)
  const { title, subtitle, description, mission, vision, features, team } =
    about;

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
        <Helmet><title>CurioBox||About </title></Helmet>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <h2 className="text-xl text-blue-600 mb-4">{subtitle}</h2>
      <p className="mb-4">{description}</p>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">🎯 Mission</h3>
        <p>{mission}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">👁️ Vision</h3>
        <p>{vision}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-2xl font-semibold">🔍 Features</h3>
        <ul className="list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">👨‍💻 Developer Info</h3>
        <p><strong>Name:</strong> {team.developer}</p>
        <p><strong>Role:</strong> {team.role}</p>
        <p><strong>Contact:</strong> {team.contact}</p>
      </div>
    </div>
  );
};

export default About;
