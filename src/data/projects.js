import hospitalImage from "../projects/hospital.png";
import businessImage from "../projects/business.png";
import ecommerceImage from "../projects/ecommerce.png";

const projects = [
  {
    title: "Hospital Management System",
    category: "Full-Stack Application",
    description:
      "A full-stack hospital management system for managing patients, doctors, appointments, prescriptions, medical records, and invoices with role-based access control.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Material UI",
    ],
    image: hospitalImage,
    github: "https://github.com/asifrahman-codes/Hospital-Management-System",
    live: "https://hospitalmanagementsystems-rho.vercel.app/",
    featured: true,
  },

  {
    title: "Business Management System",
    category: "Full-Stack Application",
    description:
      "A business management system for pharmacies, retail stores, and grocery businesses with POS, inventory, sales, expenses, salaries, and reporting.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    image: businessImage,
    github: "https://github.com/asifrahman-codes/business-management-system",
    live: "#",
    featured: true,
  },

  {
    title: "E-commerce Platform",
    category: "Full-Stack Application",
    description:
      "A full-stack e-commerce platform with product variants, cart management, order processing, inventory transactions, stock restoration, and payment integration.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Stripe",
    ],
    image: ecommerceImage,
    github: "https://github.com/asifrahman-codes/E-Commerce-Platform",
    live: "#",
    featured: true,
  },
];

export default projects;