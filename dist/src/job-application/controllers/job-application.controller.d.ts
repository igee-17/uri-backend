import { JobApplicationService } from "../services/job-application.service";
import { JobApplication } from "../models/job-application.model";
export declare class JobApplicationController {
    private readonly jobApplicationService;
    constructor(jobApplicationService: JobApplicationService);
    findAll(): JobApplication[];
    getStats(): {
        totalApplications: number;
        statusCounts: Record<import("../models/job-application.model").ApplicationStatus, number>;
        monthCounts: Record<string, number>;
    };
}
