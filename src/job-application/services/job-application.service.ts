import { Injectable } from "@nestjs/common";
import {
  JobApplication,
  ApplicationStatus,
} from "../models/job-application.model";
import { v4 as uuidv4 } from "uuid";

// @Injectable()
export class JobApplicationService {
  private applications: JobApplication[] = [
    {
      id: uuidv4(),
      jobTitle: "Senior Software Engineer",
      companyName: "Tech Corp",
      status: ApplicationStatus.PENDING,
      dateApplied: new Date("2024-01-15"),
    },
    {
      id: uuidv4(),
      jobTitle: "Full Stack Developer",
      companyName: "Startup Inc",
      status: ApplicationStatus.ACCEPTED,
      dateApplied: new Date("2024-02-01"),
    },
    {
      id: uuidv4(),
      jobTitle: "Backend Engineer",
      companyName: "Enterprise Solutions",
      status: ApplicationStatus.REJECTED,
      dateApplied: new Date("2024-02-15"),
    },
    {
      id: uuidv4(),
      jobTitle: "DevOps Engineer",
      companyName: "Cloud Systems",
      status: ApplicationStatus.INTERVIEW,
      dateApplied: new Date("2024-03-01"),
    },
    {
      id: uuidv4(),
      jobTitle: "Software Architect",
      companyName: "Financial Tech",
      status: ApplicationStatus.PENDING,
      dateApplied: new Date("2024-03-10"),
    },
  ];

  findAll(): JobApplication[] {
    return this.applications;
  }

  getStats() {
    const totalApplications = this.applications.length;

    // Count by status
    const statusCounts = this.applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {} as Record<ApplicationStatus, number>);

    // Count by month
    const monthCounts = this.applications.reduce((acc, app) => {
      const monthYear = app.dateApplied.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      acc[monthYear] = (acc[monthYear] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalApplications,
      statusCounts,
      monthCounts,
    };
  }
}
