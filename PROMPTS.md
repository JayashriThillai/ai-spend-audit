# AI Prompt Engineering Notes

## Summary Generation Prompt

The application generates AI-style summaries based on user spending inputs and audit recommendations.

### Prompt Structure

User uses [tool]
and spends $[amount]/month.

Team size is [team size].

Recommendation:
[recommendation]

Write a short professional AI cost audit summary.


## Goals Of Prompt

The prompt was designed to:

1. Generate concise summaries
2. Sound professional and business-oriented
3. Reinforce audit recommendations
4. Explain potential savings clearly
5. Keep output readable for non-technical users


## Example Input

User uses ChatGPT
and spends $120/month.

Team size is 5.

Recommendation:
Switch from Team plan to Plus plan for smaller collaboration requirements.


## Example Output

The organization is currently spending more than necessary for its collaboration needs. Based on the audit, switching to a lower-cost plan could significantly reduce monthly AI subscription expenses while maintaining productivity.


## Design Decisions

### Why Short Summaries?

Users generally prefer:
- direct recommendations
- fast readability
- actionable insights

Long AI-generated reports reduce usability and increase cognitive load.


### Why Rule-Based AI Summaries?

A lightweight AI-style generation approach was selected because:
- lower complexity
- faster response times
- more reliable output
- easier debugging
- no dependency on paid inference APIs


## Future Improvements

Potential future upgrades include:
- GPT-powered personalized reports
- multi-tool optimization reasoning
- benchmarking against industry averages
- ROI estimation
- confidence scoring