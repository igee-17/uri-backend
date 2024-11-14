"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const job_application_controller_1 = require("./controllers/job-application.controller");
const job_application_service_1 = require("./services/job-application.service");
describe("JobsController", () => {
    let controller;
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [job_application_controller_1.JobApplicationController],
            providers: [job_application_service_1.JobApplicationService],
        }).compile();
        controller = module.get(job_application_controller_1.JobApplicationController);
        service = module.get(job_application_service_1.JobApplicationService);
    });
    describe("findAll", () => {
        it("should return an array of jobs", () => {
            const jobs = controller.findAll();
            expect(Array.isArray(jobs)).toBe(true);
            jobs.forEach((job) => {
                expect(job).toMatchObject({
                    id: expect.any(String),
                    jobTitle: expect.any(String),
                    companyName: expect.any(String),
                    status: expect.any(String),
                    dateApplied: expect.any(String),
                });
            });
        });
    });
    describe("getStats", () => {
        it("should return statistics object with correct properties", () => {
            const stats = controller.getStats();
            expect(stats).toMatchObject({
                totalApplications: expect.any(Number),
                byStatus: expect.any(Object),
                byMonth: expect.any(Object),
            });
        });
    });
});
//# sourceMappingURL=jobs.controller.spec.js.map