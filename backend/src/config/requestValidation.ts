import { body } from "express-validator";

export const requestValidation = {
  createFacility: [
    body("stayingTime", "Please enter valid staying time.").exists(),
    body("breakfast", "Please select the valid value.").exists(),
    body("carForPickup", "Please enter valid car information.").exists(),
    body("resortName", "Please enter valid resort name.").exists(),
    body("includedMeals", "Please select the meals.").exists(),
    body("facilities", "Please enter the valid facilities.").exists(),
  ],

  createSight: [
    body("siteName", "Please enter a valid sight name.").exists(),
    body("description", "Please enter a valid description.").exists(),
  ],
};
