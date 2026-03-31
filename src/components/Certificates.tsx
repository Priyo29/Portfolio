import React from "react";
import { motion } from "framer-motion";

const Certificates: React.FC = () => {
  const certificates = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2026",
      description:
        "Understanding of AWS Cloud concepts, services, and best practices. Validates foundational knowledge of cloud computing and AWS services.",
    },
    {
      id: 2,
      title: "React Advanced Certification",
      issuer: "Meta (Facebook)",
      year: "2025",
      description:
        "Proficiency in advanced React concepts, including hooks, context API, and performance optimization. Demonstrates expertise in building complex React applications.",
    },
    {
      id: 3,
      title: "Three.js Mastery",
      issuer: "WebGL Foundation",
      year: "2026",
      description:
        "Three.js Mastery is a certification program that validates expertise in using the Three.js library for creating 3D graphics and animations on the web. It covers topics such as 3D modeling, rendering techniques, and interactive web experiences, making it a valuable credential for developers working with WebGL and 3D graphics.",
    },
    {
      id: 4,
      title: "TI Byte",
      issuer: "Texas Instruments",
      year: "2025",
      description:
        "TI Byte is a comprehensive certification program offered by Texas Instruments that validates proficiency in embedded systems, microcontrollers, and related technologies. It covers a wide range of topics, including programming, hardware design, and system integration, making it a valuable credential for professionals in the field of embedded systems engineering.",
    },
  ];

  return (
    <section id="certificates-section">
      <div className="section-label">Credentials</div>
      <h2 className="section-title">CERTIFICATES</h2>

      <div className="certificates-container">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="certificate-header">
              <div className="certificate-num">0{cert.id}</div>
              <div className="certificate-year">{cert.year}</div>
            </div>

            <h3 className="certificate-title">{cert.title}</h3>
            <div className="certificate-issuer">{cert.issuer}</div>
            <p className="certificate-description">{cert.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
