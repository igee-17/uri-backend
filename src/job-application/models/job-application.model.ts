export enum ApplicationStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  REJECTED = "rejected",
  INTERVIEW = "interview",
}

export interface JobApplication {
  id: string;
  jobTitle: string;
  companyName: string;
  status: ApplicationStatus;
  dateApplied: Date;
}
