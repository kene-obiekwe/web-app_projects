"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientBiodataModule = void 0;
const common_1 = require("@nestjs/common");
const patient_biodata_service_1 = require("./patient_biodata.service");
const patient_biodata_controller_1 = require("./patient_biodata.controller");
const typeorm_1 = require("@nestjs/typeorm");
const patient_biodata_entity_1 = require("./entities/patient_biodata.entity");
const clinical_records_module_1 = require("../clinical_records/clinical_records.module");
let PatientBiodataModule = class PatientBiodataModule {
};
exports.PatientBiodataModule = PatientBiodataModule;
exports.PatientBiodataModule = PatientBiodataModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([patient_biodata_entity_1.PatientBiodata]), clinical_records_module_1.ClinicalRecordModule],
        controllers: [patient_biodata_controller_1.PatientBiodataController],
        providers: [patient_biodata_service_1.PatientBiodataService],
    })
], PatientBiodataModule);
//# sourceMappingURL=patient_biodata.module.js.map