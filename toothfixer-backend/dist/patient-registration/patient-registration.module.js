"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientRegistrationModule = void 0;
const common_1 = require("@nestjs/common");
const patient_biodata_module_1 = require("./patient_biodata/patient_biodata.module");
const clinical_records_module_1 = require("./clinical_records/clinical_records.module");
let PatientRegistrationModule = class PatientRegistrationModule {
};
exports.PatientRegistrationModule = PatientRegistrationModule;
exports.PatientRegistrationModule = PatientRegistrationModule = __decorate([
    (0, common_1.Module)({
        imports: [patient_biodata_module_1.PatientBiodataModule, clinical_records_module_1.ClinicalRecordModule]
    })
], PatientRegistrationModule);
//# sourceMappingURL=patient-registration.module.js.map