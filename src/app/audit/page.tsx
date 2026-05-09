"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";
import { supabase } from "@/lib/supabase";
export default function AuditPage() {

  const [tool, setTool] = useState("ChatGPT");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [plan, setPlan] = useState("Plus");
  const [useCase, setUseCase] = useState("Coding");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<{
  recommendation: string;
  savings: number;
  yearlySavings: number;
  optimizedSpend: number;
currentSpend: number;
} | null>(null);
const [summary, setSummary] = useState("");
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const result = generateAudit({
    tool,
    monthlySpend: Number(spend),
    teamSize: Number(teamSize),
  });

  setResult(result);
  const response = await fetch(
  "/api/summary",
  {
    method: "POST",

    headers: {
      "Content-Type":
        "application/json",
    },

    body: JSON.stringify({
      tool,
      spend,
      teamSize,
      recommendation:
        result.recommendation,
    }),
  }
);

const data = await response.json();

setSummary(data.summary);
  await supabase.from("audits").insert([
  {
    email,
    tool,
    plan,
    monthly_spend: Number(spend),
    team_size: Number(teamSize),
    use_case: useCase,
    recommendation: result.recommendation,
    savings: result.savings,
  },
]);
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
<option>Gemini</option>
<option>Anthropic API</option>
<option>OpenAI API</option>
<option>Windsurf</option>
            </select>
          </div>
          <div>
  <label className="block mb-2">
    Plan Type
  </label>

  <select
    value={plan}
    onChange={(e) => setPlan(e.target.value)}
    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
  >
    <option>Free</option>
    <option>Plus</option>
    <option>Pro</option>
    <option>Team</option>
    <option>Enterprise</option>
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
    Primary Use Case
  </label>

  <select
    value={useCase}
    onChange={(e) => setUseCase(e.target.value)}
    className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700"
  >
    <option>Coding</option>
    <option>Writing</option>
    <option>Research</option>
    <option>Data Analysis</option>
    <option>Mixed</option>
  </select>
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
          <div>
  <label className="block mb-2">
    Email Address
  </label>

  <input
    type="email"
    placeholder="you@example.com"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
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
    {result && (
  <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-gray-700">

    <div className="flex items-center justify-between mb-4">

      <h2 className="text-2xl font-bold">
        Audit Result
      </h2>

      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
        Savings Found
      </span>

    </div>

    <p className="mb-6 text-gray-300 text-lg">
      {result.recommendation}
    </p>

    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-4 mb-6">

  <div className="bg-black/30 p-4 rounded-lg">
    <p className="text-gray-400 text-sm">
      Current Spend
    </p>

    <p className="text-2xl font-bold">
      ${result.currentSpend}
    </p>
  </div>

  <div className="bg-black/30 p-4 rounded-lg">
    <p className="text-gray-400 text-sm">
      Optimized Spend
    </p>

    <p className="text-2xl font-bold text-green-400">
      ${result.optimizedSpend}
    </p>
  </div>

</div>

      <div className="text-4xl font-bold text-green-400">
        Save ${result.savings}/month
      </div>

      <div className="text-xl text-gray-400">
        ${result.yearlySavings}/year potential savings
        <div className="mt-6 p-4 bg-black/30 rounded-lg">

  <h3 className="text-lg font-semibold mb-2">
    AI Summary
  </h3>

  <p className="text-gray-300">
    {summary}
  </p>

</div>
      </div>

    </div>

  </div>
)}
    </div>

  </div>
)}

      </div>
    </main>
  );
}