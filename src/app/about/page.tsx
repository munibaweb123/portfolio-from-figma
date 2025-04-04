import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Profile Image */}
        <div className="w-48 h-48 relative">
          <Image
            src="/profile.png" // Replace with your image
            alt="Profile Picture"
            fill
            className="rounded-full object-cover"
          />
        </div>

        {/* Bio Section */}
        <div className="flex-1">
            <p className="text-lg text-gray-600">
            Hello! I&apos;m <strong>Sachina</strong>, a passionate <strong>UI/UX Designer</strong> with a background in <strong>B.Sc. CSIT</strong>.
            I specialize in creating beautiful and functional digital experiences. I love solving 
            complex problems through <strong>design and user experience research</strong>.
            </p>
          <p className="mt-4 text-gray-600">
            In my free time, I explore **front-end development, photography, and freelancing**.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {["Figma", "Adobe XD", "React", "Next.js", "Tailwind CSS", "JavaScript"].map((skill) => (
            <div key={skill} className="bg-gray-100 p-3 rounded-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Resume Download */}
      <div className="text-center mt-8">
        <a
          href="/cv.pdf" // Replace with your resume file
          download
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
