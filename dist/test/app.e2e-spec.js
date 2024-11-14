"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const app_module_1 = require("../src/app.module");
describe("JobsController (e2e)", () => {
    let app;
    beforeEach(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    afterAll(async () => {
        await app.close();
    });
    it("/applications (GET)", () => {
        return request(app.getHttpServer())
            .get("/applications")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect((response) => {
            expect(Array.isArray(response.body)).toBeTruthy();
            expect(response.body.length).toBeGreaterThan(0);
            expect(response.body[0]).toHaveProperty("id");
            expect(response.body[0]).toHaveProperty("jobTitle");
            expect(response.body[0]).toHaveProperty("companyName");
            expect(response.body[0]).toHaveProperty("status");
            expect(response.body[0]).toHaveProperty("dateApplied");
        });
    });
    it("/applications/stats (GET)", () => {
        return request(app.getHttpServer())
            .get("/applications/stats")
            .expect(200)
            .expect("Content-Type", /json/)
            .expect((response) => {
            expect(response.body).toHaveProperty("totalApplications");
            expect(response.body).toHaveProperty("byStatus");
            expect(response.body).toHaveProperty("byMonth");
            expect(response.body.totalApplications).toBeGreaterThan(0);
            expect(Object.keys(response.body.byStatus).length).toBeGreaterThan(0);
            expect(Object.keys(response.body.byMonth).length).toBeGreaterThan(0);
        });
    });
});
//# sourceMappingURL=app.e2e-spec.js.map