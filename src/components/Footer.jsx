import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Programs Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2">
            {[
              "Data Science & AI",
              "Product Management",
              "Business Analytics",
              "Digital Transformation",
              "Business Management",
              "Project Management",
              "Strategy & Leadership",
              "Senior Management",
              "Fintech",
            ].map((program, index) => (
              <li
                key={index}
                className="flex justify-between items-center cursor-pointer"
              >
                <span>{program}</span>
                <span className="text-xl">+</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Email us (For Data Science Queries): admissions@accredian.com</p>
          <p>Email us (For Product Management Queries): pm@accredian.com</p>
          <p>Data Science Admission Helpline: +91 9079653292 (9 AM - 7 PM)</p>
          <p>Product Management Admission Helpline: +91 9625811095</p>
          <p>Enrolled Student Helpline: +91 7909232507</p>
          <p>
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
            Gurugram, Haryana 122015
          </p>
          <h3 className="text-lg font-semibold mt-4">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaLinkedin className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaYoutube className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Accredian Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Accredian</h3>
          <ul className="space-y-2">
            {[
              "About",
              "Career",
              "Blog",
              "Admission Policy",
              "Referral Policy",
              "Privacy Policy",
              "Terms Of Service",
              "Master FAQs",
            ].map((link, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-400 mt-8">
        © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
        Reserved
      </div>
    </footer>
  );
}
