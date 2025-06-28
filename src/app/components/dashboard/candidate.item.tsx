import React from "react";

const CandidateItem: React.FC = () => {
  return (
    <div className="flex items-center p-6 border border-[#e9ecef] rounded-lg transition-all gap-4">
      <div className="w-20 h-20 rounded-full overflow-hidden">
        <img src="images/default-avatar.png" alt="Candidate Avatar" />
      </div>

      <div className="flex-1">
        <h3 className="text-[#343a40] mb-1">Alisher Karimov</h3>
        <p className="text-[#4a6bff] font-medium mb-2">Junior Web Developer</p>
        <div className="flex gap-4 text-[#6c757d] mb-2">
          <span className="flex items-center">
            <i className="fas fa-graduation-cap mr-1"></i> Bachelor's in
            Computer Science
          </span>
          <span className="flex items-center">
            <i className="fas fa-map-marker-alt mr-1"></i> Tashkent
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="inline-block bg-[#f0f3ff] text-[#4a6bff] px-2 py-[0.15rem] rounded-2xl text-sm mr-2 mb-1">
            HTML
          </span>
          <span className="inline-block bg-[#f0f3ff] text-[#4a6bff] px-2 py-[0.15rem] rounded-2xl text-sm mr-2 mb-1">
            CSS
          </span>
          <span className="inline-block bg-[#f0f3ff] text-[#4a6bff] px-2 py-[0.15rem] rounded-2xl text-sm mr-2 mb-1">
            JavaScript
          </span>
          <span className="inline-block bg-[#f0f3ff] text-[#4a6bff] px-2 py-[0.15rem] rounded-2xl text-sm mr-2 mb-1">
            React
          </span>
        </div>
      </div>

      <div className="bg-[#e3f2fd] text-[#0d6efd] px-4 py-2 rounded-full text-sm font-medium min-w-[100px] text-center">
        <span>New</span>
      </div>

      <div className="flex flex-col gap-2 ml-4">
        <button className="inline-block px-6 py-3 rounded font-semibold cursor-pointer transition-all text-[#4a6bff] border-2 border-[#4a6bff] bg-white">
          <i className="fas fa-file-alt mr-2"></i>
          <span>View Resume</span>
        </button>
        <button className="inline-block px-6 py-3 rounded font-semibold cursor-pointer transition-all text-white bg-[#4a6bff]">
          <i className="fas fa-user-check mr-2"></i>
          <span>Shortlist</span>
        </button>
      </div>
    </div>
  );
};

export default CandidateItem;
