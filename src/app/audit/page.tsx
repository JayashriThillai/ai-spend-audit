"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";
export default function AuditPage() {

  const [tool, setTool] = useState("ChatGPT");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [result, setResult] = useState<{
  recommendation: string;
  savings: number;
} | null>(null);
function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const result = generateAudit({
    tool,
    monthlySpend: Number(spend),
    teamSize: Number(teamSize),
  });

  setResult(result);
}
useEffect(() => {

  const savedTool =
    localStorage.getItem("tool");

  const savedSpend =
    localStorage.getItem("spend");

  const savedTeamSize =
    localStorage.getItem("teamSize");

  if (savedTool) setTool(savedTool);
  if (savedSpend) setSpend(savedSpend);
  if (savedTeamSize) setTeamSize(savedTeamSize);

}, []);
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-xl p-8">

        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Spend Audit Form
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>
            <label className="block mb-2">
              AI Tool
            </label>

            <select
              value={tool}
              onChange={(e) => {
  setTool(e.target.value);
  localStorage.setItem("tool", e.target.value);
}}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
            >
              <option>ChatGPT</option>
              <option>Claude</option>
              <option>Cursor</option>
              <option>GitHub Copilot</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              placeholder="50"
              value={spend}
              onChange={(e) => {
  setSpend(e.target.value);
  localStorage.setItem("spend", e.target.value);
}}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
            />
          </div>

          <div>
            <label className="block mb-2">
              Team Size
            </label>

            <input
              type="number"
              placeholder="5"
              value={teamSize}
             onChange={(e) => {
  setTeamSize(e.target.value);
  localStorage.setItem("teamSize", e.target.value);
}}
              className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
            />
          </div>

          <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Generate Audit
          </button>

        </form>
        {result && (
  <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-700">

    <h2 className="text-2xl font-bold mb-4">
      Audit Result
    </h2>

    <p className="mb-4 text-gray-300">
      {result.recommendation}
    </p>

    <div className="text-3xl font-bold text-green-400">
      Save ${result.savings}/month
    </div>

  </div>
)}

      </div>
    </main>
  );
}