"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobApplicationController = void 0;
const common_1 = require("@nestjs/common");
const job_application_service_1 = require("../services/job-application.service");
let JobApplicationController = class JobApplicationController {
    constructor(jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }
    findAll() {
        return this.jobApplicationService.findAll();
    }
    getStats() {
        return this.jobApplicationService.getStats();
    }
};
exports.JobApplicationController = JobApplicationController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], JobApplicationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("stats"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JobApplicationController.prototype, "getStats", null);
exports.JobApplicationController = JobApplicationController = __decorate([
    (0, common_1.Controller)("applications"),
    __metadata("design:paramtypes", [job_application_service_1.JobApplicationService])
], JobApplicationController);
//# sourceMappingURL=job-application.controller.js.map