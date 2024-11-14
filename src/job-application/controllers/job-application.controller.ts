import { Controller, Get } from "@nestjs/common";
import { JobApplicationService } from "../services/job-application.service";
import { JobApplication } from "../models/job-application.model";

@Controller("applications")
export class JobApplicationController {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Get()
  findAll(): JobApplication[] {
    return this.jobApplicationService.findAll();
  }

  @Get("stats")
  getStats() {
    return this.jobApplicationService.getStats();
  }
}
