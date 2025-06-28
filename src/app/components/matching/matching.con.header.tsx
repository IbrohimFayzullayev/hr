const MatchingConHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 data-i18n="candidateMatching" className="text-2xl font-semibold">
        Candidate Matching
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <label
          htmlFor="vacancy-select"
          data-i18n="selectVacancy"
          className="text-sm font-medium"
        >
          Select Vacancy:
        </label>
        <select
          id="vacancy-select"
          className="form-input border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="1">Junior Web Developer</option>
          <option value="2">Marketing Assistant</option>
          <option value="3">Data Entry Specialist</option>
        </select>
      </div>
    </div>
  );
};

export default MatchingConHeader;
