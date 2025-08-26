
"use server";

import { AIPoweredRoleFitCompassOutput } from "@/lib/types";

export async function getRoleRecommendations(formData?: unknown) {
  // This function is no longer called by the results page directly,
  // but we'll keep the mock data here for reference or potential future use.
  const mockedResult: AIPoweredRoleFitCompassOutput = {
    roleRecommendations: [
      {
        roleName: "UX/UI Designer",
        confidence: "Fit",
        fitExplanation: "- Your strong skills in design tools (Figma, Adobe XD) directly support the requirements of a UX/UI Designer role.\n- Your enjoyment of designing visuals and experiences aligns perfectly with the core responsibilities of this career.\n- Switching to UX/UI design fulfills your primary career goal and allows you to utilize your existing design skills.",
        topSkillsToLearn: ["UI Prototyping", "User Research", "Interaction Design"],
      },
      {
        roleName: "Senior UX/UI Designer",
        confidence: "Fit",
        fitExplanation: "- Your interest in UX/UI design, coupled with your desire for a higher salary, makes a senior UX/UI designer role a strong consideration.\n- This path allows you to build on your existing design skills and progress to a higher-paying position.\n- This fits with your goal of switching domains and allows you to further develop your creativity within a professional environment.",
        topSkillsToLearn: ["Team Management", "Design Systems", "UX Writing"],
      },
      {
        roleName: "Graphic Designer",
        confidence: "Fit",
        fitExplanation: "- Your skills in design tools and your creative inclination make you suitable for this role.\n- This aligns well with your preference for a workday focused on designing and building something creative.\n- As a graphic designer, you can still use your creative abilities, while also having room for growth in salary.",
        topSkillsToLearn: ["Branding", "Typography", "Motion Graphics"],
      }
    ]
  };

  return { success: true, data: mockedResult };
}
