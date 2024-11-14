"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const job_application_service_1 = require("./services/job-application.service");
describe("JobsService", () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [job_application_service_1.JobApplicationService],
        }).compile();
        service = module.get(job_application_service_1.JobApplicationService);
    });
    describe("findAll", () => {
        it("should return an array of jobs", () => {
            const jobs = service.findAll();
            expect(Array.isArray(jobs)).toBe(true);
            expect(jobs.length).toBeGreaterThan(0);
            expect(jobs[0]).toHaveProperty("id");
            expect(jobs[0]).toHaveProperty("jobTitle");
            expect(jobs[0]).toHaveProperty("companyName");
            expect(jobs[0]).toHaveProperty("status");
            expect(jobs[0]).toHaveProperty("dateApplied");
        });
    });
    describe("getStats", () => {
        it("should return job application statistics", () => {
            const stats = service.getStats();
            expect(stats).toHaveProperty("totalApplications");
            expect(stats).toHaveProperty("byStatus");
            expect(stats).toHaveProperty("byMonth");
            expect(stats.totalApplications).toBeGreaterThan(0);
            expect(Object.keys(stats.statusCounts).length).toBeGreaterThan(0);
            expect(Object.keys(stats.monthCounts).length).toBeGreaterThan(0);
        });
        it("should calculate correct totals", () => {
            const stats = service.getStats();
            const jobs = service.findAll();
            expect(stats.totalApplications).toBe(jobs.length);
        });
        it("should have matching status counts", () => {
            const stats = service.getStats();
            const jobs = service.findAll();
            const totalFromStatusCounts = Object.values(stats.statusCounts).reduce((a, b) => a + b, 0);
            expect(totalFromStatusCounts).toBe(jobs.length);
        });
    });
});
//# sourceMappingURL=jobs.service.spec.js.map