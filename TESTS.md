# Testing Overview

## Current Manual Tests

### Audit Form Submission

**What it tests:**
- User can enter AI tool information
- Form submission works correctly
- Audit results display dynamically

**Status:** Working


### Savings Calculation Logic

**What it tests:**
- ChatGPT recommendations
- Claude recommendations
- Cursor recommendations
- GitHub Copilot recommendations
- Gemini recommendations

**Status:** Working


### Local Storage Persistence

**What it tests:**
- Form values persist after refresh
- User input is restored correctly

**Status:** Working


### Supabase Database Storage

**What it tests:**
- Audit data is stored successfully
- Email capture works
- Recommendations and savings are saved

**Status:** Working


### Responsive UI

**What it tests:**
- Form layout works on different screen sizes
- Result cards remain readable on mobile

**Status:** In Progress


## Planned Automated Tests

Future automated tests will include:

1. Audit engine unit tests
2. Form validation tests
3. Database insertion tests
4. API response tests
5. Error handling tests


## How To Run

```bash
npm run dev

Application available at:

http://localhost:3000