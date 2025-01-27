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
exports.PatientBiodata = void 0;
const typeorm_1 = require("typeorm");
const clinical_record_entity_1 = require("../../clinical_records/entities/clinical_record.entity");
let PatientBiodata = class PatientBiodata {
};
exports.PatientBiodata = PatientBiodata;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PatientBiodata.prototype, "Clinic_ID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientBiodata.prototype, "First_Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientBiodata.prototype, "Surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PatientBiodata.prototype, "Middle_Name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PatientBiodata.prototype, "Date_of_Birth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientBiodata.prototype, "Home_Address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PatientBiodata.prototype, "Date_of_Registration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatientBiodata.prototype, "Matriculation_Number", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => clinical_record_entity_1.ClinicalRecord, clinical_record => clinical_record.patient_biodata),
    __metadata("design:type", Array)
], PatientBiodata.prototype, "clinical_record", void 0);
exports.PatientBiodata = PatientBiodata = __decorate([
    (0, typeorm_1.Entity)()
], PatientBiodata);
//# sourceMappingURL=patient_biodata.entity.js.map