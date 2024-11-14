import { Test, TestingModule } from "@nestjs/testing";
// import { JobsController } from './jobs.controller';
import { JobApplicationController as JobsController } from "./controllers/job-application.controller";
import { JobApplicationService as JobsService } from "./services/job-application.service";

describe("JobsController", () => {
  let controller: JobsController;
  let service: JobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [JobsService],
    }).compile();

    controller = module.get<JobsController>(JobsController);
    service = module.get<JobsService>(JobsService);
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
