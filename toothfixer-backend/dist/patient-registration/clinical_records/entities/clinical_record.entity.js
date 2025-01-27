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
exports.ClinicalRecord = void 0;
const typeorm_1 = require("typeorm");
const patient_biodata_entity_1 = require("../../patient_biodata/entities/patient_biodata.entity");
let ClinicalRecord = class ClinicalRecord {
};
exports.ClinicalRecord = ClinicalRecord;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ClinicalRecord.prototype, "Clinic_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ClinicalRecord.prototype, "Clinic_Date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClinicalRecord.prototype, "Nature_of_Ailment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClinicalRecord.prototype, "Medicine_Prescribed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClinicalRecord.prototype, "Procedure_Undertaken", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ClinicalRecord.prototype, "Date_of_next_Appointment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => patient_biodata_entity_1.PatientBiodata, patient_biodata => patient_biodata.clinical_record),
    __metadata("design:type", patient_biodata_entity_1.PatientBiodata)
], ClinicalRecord.prototype, "patient_biodata", void 0);
exports.ClinicalRecord = ClinicalRecord = __decorate([
    (0, typeorm_1.Entity)()
], ClinicalRecord);
//# sourceMappingURL=clinical_record.entity.js.map