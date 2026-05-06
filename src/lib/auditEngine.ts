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

  else {
    recommendation =
      "Your current spending looks optimized.";

    savings = 0;
  }

  return {
    recommendation,
    savings,
  };
}