"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationService = void 0;
const job_application_model_1 = require("../models/job-application.model");
const uuid_1 = require("uuid");
class JobApplicationService {
    constructor() {
        this.applications = [
            {
                id: (0, uuid_1.v4)(),
                jobTitle: "Senior Software Engineer",
                companyName: "Tech Corp",
                status: job_application_model_1.ApplicationStatus.PENDING,
                dateApplied: new Date("2024-01-15"),
            },
            {
                id: (0, uuid_1.v4)(),
                jobTitle: "Full Stack Developer",
                companyName: "Startup Inc",
                status: job_application_model_1.ApplicationStatus.ACCEPTED,
                dateApplied: new Date("2024-02-01"),
            },
            {
                id: (0, uuid_1.v4)(),
                jobTitle: "Backend Engineer",
                companyName: "Enterprise Solutions",
                status: job_application_model_1.ApplicationStatus.REJECTED,
                dateApplied: new Date("2024-02-15"),
            },
            {
                id: (0, uuid_1.v4)(),
                jobTitle: "DevOps Engineer",
                companyName: "Cloud Systems",
                status: job_application_model_1.ApplicationStatus.INTERVIEW,
                dateApplied: new Date("2024-03-01"),
            },
            {
                id: (0, uuid_1.v4)(),
                jobTitle: "Software Architect",
                companyName: "Financial Tech",
                status: job_application_model_1.ApplicationStatus.PENDING,
                dateApplied: new Date("2024-03-10"),
            },
        ];
    }
    findAll() {
        return this.applications;
    }
    getStats() {
        const totalApplications = this.applications.length;
        const statusCounts = this.applications.reduce((acc, app) => {
            acc[app.status] = (acc[app.status] || 0) + 1;
            return acc;
        }, {});
        const monthCounts = this.applications.reduce((acc, app) => {
            const monthYear = app.dateApplied.toLocaleString("default", {
                month: "long",
                year: "numeric",
            });
            acc[monthYear] = (acc[monthYear] || 0) + 1;
            return acc;
        }, {});
        return {
            totalApplications,
            statusCounts,
            monthCounts,
        };
    }
}
exports.JobApplicationService = JobApplicationService;
//# sourceMappingURL=job-application.service.js.map