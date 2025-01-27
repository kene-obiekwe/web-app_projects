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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientBiodataController = void 0;
const common_1 = require("@nestjs/common");
const patient_biodata_service_1 = require("./patient_biodata.service");
const create_patient_biodata_dto_1 = require("./dto/create-patient_biodata.dto");
const update_patient_biodata_dto_1 = require("./dto/update-patient_biodata.dto");
let PatientBiodataController = class PatientBiodataController {
    constructor(patientBiodataService) {
        this.patientBiodataService = patientBiodataService;
    }
    create(createPatientBiodataDto) {
        return this.patientBiodataService.create(createPatientBiodataDto);
    }
    findAll() {
        return this.patientBiodataService.findAll();
    }
    findOne(id) {
        return this.patientBiodataService.findOne(+id);
    }
    update(id, updatePatientBiodataDto) {
        return this.patientBiodataService.update(+id, updatePatientBiodataDto);
    }
    remove(id) {
        return this.patientBiodataService.remove(+id);
    }
};
exports.PatientBiodataController = PatientBiodataController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_patient_biodata_dto_1.CreatePatientBiodataDto]),
    __metadata("design:returntype", void 0)
], PatientBiodataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PatientBiodataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':Clinic_ID'),
    __param(0, (0, common_1.Param)('Clinic_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientBiodataController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':Clinic_ID'),
    __param(0, (0, common_1.Param)('Clinic_ID')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_patient_biodata_dto_1.UpdatePatientBiodataDto]),
    __metadata("design:returntype", void 0)
], PatientBiodataController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':Clinic_ID'),
    __param(0, (0, common_1.Param)('Clinic_ID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PatientBiodataController.prototype, "remove", null);
exports.PatientBiodataController = PatientBiodataController = __decorate([
    (0, common_1.Controller)('patient-biodata'),
    __metadata("design:paramtypes", [patient_biodata_service_1.PatientBiodataService])
], PatientBiodataController);
//# sourceMappingURL=patient_biodata.controller.js.map