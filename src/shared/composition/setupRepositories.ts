import { translatingService } from ".";
import { ExperienceRepository } from "../../modules/experiences/experienceRepository";

const experienceRepository = new ExperienceRepository(
  translatingService.language
);

export { experienceRepository };
