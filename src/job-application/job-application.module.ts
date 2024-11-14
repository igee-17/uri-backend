import { Module } from "@nestjs/common";
import { JobApplicationController } from "./controllers/job-application.controller";
import { JobApplicationService } from "./services/job-application.service";

@Module({
  controllers: [JobApplicationController],
  providers: [JobApplicationService],
})
export class JobApplicationModule {}
