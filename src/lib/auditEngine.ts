type AuditInput = {
  tool: string;
  monthlySpend: number;
  teamSize: number;
};

export function generateAudit(input: AuditInput) {

  let recommendation = "";
  let savings = 0;

  if (
    input.tool === "ChatGPT" &&
    input.teamSize <= 2 &&
    input.monthlySpend > 40
  ) {
    recommendation =
      "Switch to ChatGPT Plus instead of Team plan.";

    savings = input.monthlySpend - 40;
  }

  else if (
    input.tool === "Claude" &&
    input.monthlySpend > 30
  ) {
    recommendation =
      "Consider Claude Pro for lower monthly cost.";

    savings = input.monthlySpend - 30;
  }

  else if (
  input.tool === "Cursor" &&
  input.monthlySpend > 20
) {
  recommendation =
    "Cursor Pro may be enough for your current usage.";

  savings = input.monthlySpend - 20;
}

else if (
  input.tool === "GitHub Copilot" &&
  input.monthlySpend > 19
) {
  recommendation =
    "Consider GitHub Copilot Individual plan.";

  savings = input.monthlySpend - 19;
}

else if (
  input.tool === "Gemini" &&
  input.monthlySpend > 20
) {
  recommendation =
    "Gemini Pro could reduce your AI costs.";

  savings = input.monthlySpend - 20;
}

else {
  recommendation =
    "Your current spending looks optimized.";

  savings = 0;
}

return {
  recommendation,
  savings,
  yearlySavings: savings * 12,
  optimizedSpend:
    input.monthlySpend - savings,
  currentSpend:
    input.monthlySpend,
};
}