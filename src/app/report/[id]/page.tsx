"use client";

import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function ReportPage() {

  const params = useParams();

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    async function loadReport() {

      const { data } = await supabase
        .from("audits")
        .select("*")
        .eq("id", params.id)
        .single();

      setData(data);
    }

    if (params?.id) {
      loadReport();
    }

  }, [params]);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading report...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="max-w-2xl w-full bg-gray-900 p-8 rounded-2xl border border-gray-700">

        <h1 className="text-4xl font-bold mb-6">
          Audit Report
        </h1>

        <div className="space-y-4 text-lg">

          <p>
            <strong>Tool:</strong> {data.tool}
          </p>

          <p>
            <strong>Monthly Spend:</strong> ${data.monthly_spend}
          </p>

          <p>
            <strong>Team Size:</strong> {data.team_size}
          </p>

          <p>
            <strong>Use Case:</strong> {data.use_case}
          </p>

          <p>
            <strong>Recommendation:</strong> {data.recommendation}
          </p>

          <p className="text-green-400 text-2xl font-bold">
            Save ${data.savings}/month
          </p>

        </div>

      </div>

    </main>
  );
}