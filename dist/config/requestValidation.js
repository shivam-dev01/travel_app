"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
const express_validator_1 = require("express-validator");
exports.requestValidation = {
    createFacility: [
        (0, express_validator_1.body)("stayingTime", "Please enter valid staying time.").exists(),
        (0, express_validator_1.body)("breakfast", "Please select the valid value.").exists(),
        (0, express_validator_1.body)("carForPickup", "Please enter valid car information.").exists(),
        (0, express_validator_1.body)("resortName", "Please enter valid resort name.").exists(),
        (0, express_validator_1.body)("includedMeals", "Please select the meals.").exists(),
        (0, express_validator_1.body)("facilities", "Please enter the valid facilities.").exists(),
    ],
    createSight: [
        (0, express_validator_1.body)("siteName", "Please enter a valid sight name.").exists(),
        (0, express_validator_1.body)("description", "Please enter a valid description.").exists(),
    ],
};
