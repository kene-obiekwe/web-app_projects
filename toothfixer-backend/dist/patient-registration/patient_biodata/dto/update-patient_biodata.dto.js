"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatientBiodataDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_patient_biodata_dto_1 = require("./create-patient_biodata.dto");
class UpdatePatientBiodataDto extends (0, mapped_types_1.PartialType)(create_patient_biodata_dto_1.CreatePatientBiodataDto) {
}
exports.UpdatePatientBiodataDto = UpdatePatientBiodataDto;
//# sourceMappingURL=update-patient_biodata.dto.js.map