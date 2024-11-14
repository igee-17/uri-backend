# Job Applications API

A NestJS backend API for tracking job applications.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Setup

1. Clone and install dependencies:

```bash
git clone [repository-url]
cd job-applications-api
npm install
```

2. Install required packages:

```bash
npm install @nestjs/common @nestjs/core @nestjs/platform-express reflect-metadata rxjs
npm install --save-dev @nestjs/cli typescript @types/node
```

3. Build and run:

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start
```

The server runs at http://localhost:4000 with endpoints:

- GET /applications - List all job applications
- GET /applications/stats - Get application statistics

## Project Structure

```
src/
├── jobs/
│   ├── jobs.controller.ts
│   ├── jobs.service.ts
│   └── jobs.module.ts
├── app.module.ts
└── main.ts
```

## Environment Variables

- PORT (default: 4000)
- CORS_ORIGIN (default: http://localhost:3000)

## API Response Examples

GET /applications:

```json
[
  {
    "id": "1",
    "jobTitle": "Frontend Developer",
    "companyName": "TechCorp",
    "status": "accepted",
    "dateApplied": "2024-10-12"
  }
]
```

GET /applications/stats:

```json
{
  "totalApplications": 5,
  "byStatus": {
    "pending": 2,
    "accepted": 2,
    "rejected": 1
  }
}
```
