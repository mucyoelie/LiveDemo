import { useState } from "react";

const DetailsForm = () => {
  const [forWhom, setForWhom] = useState("");
  const [projectNeeds, setProjectNeeds] = useState("");
  const [referenceFile, setReferenceFile] = useState<File | null>(null);

  const [deadline, setDeadline] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <div className="space-y-6">

      {/* Section intro text */}
      <p className="text-gray-300">
        A few practical questions to help us understand the scope, context, 
        and expectations behind your project.
      </p>

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Q4 */}
        <div>
          <label className="text-gray-300 mb-2 block">4. Who is this for?</label>
          <input
            type="text"
            placeholder="Tell us who this is meant to reach or support."
            value={forWhom}
            onChange={(e) => setForWhom(e.target.value)}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Q7 */}
        <div>
          <label className="text-gray-300 mb-2 block">
            7. Do you have a timeline in mind?
          </label>
          <input
            type="text"
            placeholder="Let us know the deadline or general timeframe."
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Q5 */}
        <div>
          <label className="text-gray-300 mb-2 block">
            5. What does the project need to include?
          </label>
          <textarea
            placeholder="High-level scope, features, or deliverables."
            value={projectNeeds}
            onChange={(e) => setProjectNeeds(e.target.value)}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 h-28 text-gray-200 focus:outline-none focus:border-yellow-400"
          />
        </div>

        {/* Q8 */}
        <div>
          <label className="text-gray-300 mb-2 block">
            8. What budget range should we consider?
          </label>
          <input
            type="text"
            placeholder="A rough range helps us recommend the right approach."
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div>
        <label className="text-gray-300 mb-2 block">
          6. Any references or inspiration?
        </label>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Links, examples, or other materials"
            className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-yellow-400"
          />

          <label className="cursor-pointer bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg border border-gray-600 text-sm">
            <input
              type="file"
              className="hidden"
              onChange={(e) => setReferenceFile(e.target.files?.[0] || null)}
            />
            Upload file
          </label>
        </div>

        {/* Show file name */}
        {referenceFile && (
          <p className="text-green-400 text-xs mt-2">
            File selected: {referenceFile.name}
          </p>
        )}
      </div>

      {/* Continue Button */}
      <button className="mt-4 text-yellow-400 hover:underline text-sm">
        Continue →
      </button>
    </div>
  );
};

export default DetailsForm;