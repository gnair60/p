import React from "react";

const Resume = () => {
    const resumePath = "/Resume.pdf"; // Path to the PDF file in the public folder

    return (
        <div className="bg-003467 text-white py-12 text-center">
            <h2 className="text-4xl font-extrabold mb-4">Resume</h2>
            <p className="text-gray-400 text-lg mb-6">
                Click below to view or download my resume.
            </p>

            <div className="flex justify-center gap-6">
                {/* View Resume */}
                <a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    View Resume
                </a>

                {/* Download Resume */}
                <a
                    href={resumePath}
                    download="Gautam_Resume.pdf" // Renames the file when downloaded
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Resume;
