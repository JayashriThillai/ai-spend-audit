export async function POST(req: Request) {

  const body = await req.json();

  const summary = `
Your organization is currently spending $${body.spend} per month on ${body.tool} for a team size of ${body.teamSize}.

Based on the audit, there may be opportunities to reduce unnecessary AI subscription costs and optimize plan usage.

Recommendation:
${body.recommendation}
`;

  return Response.json({
    summary,
  });
}