import { JobApplication, ApplicationStatus } from "../models/job-application.model";
export declare class JobApplicationService {
    private applications;
    findAll(): JobApplication[];
    getStats(): {
        totalApplications: number;
        statusCounts: Record<ApplicationStatus, number>;
        monthCounts: Record<string, number>;
    };
}
