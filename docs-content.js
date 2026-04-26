/*
  ============================================================
  EDIT DOCUMENTATION CONTENT HERE
  ============================================================
  To reuse this template, update this file only.
  - Add, remove, or reorder pages in DOC_DATA.pages.
  - Each page supports English (en) and Bahasa Indonesia (id).
  - Project link buttons are defined once in DOC_DATA.projectLinks.
  - PLAN MODE REQUIREMENT: before generating a final HTML document,
    ask the user for the Development Folder, Tracker, and Floor Plan
    Google Drive URLs. Do not leave placeholder project link URLs in
    a client-ready export.
  - Do not rename or restyle those three buttons unless explicitly requested.
  - Leading numbering in navTitle values and section headings is hidden by the HTML template navigation.
  - The HTML/CSS/runtime structure does not need to change.
  - Brand identity is hardcoded in DOC_DATA.settings and locked by
    DOC_DATA.generatorRequirements.brandIdentity. Do not ask for or regenerate
    the logo, brand title, or brand subtitle during document generation.

  MANAGER DOCUMENT GENERATION WORKFLOW
  - The production-manager role and rules are hardcoded in
    DOC_DATA.generatorRequirements.managerGenerationSkill.
  - Do not require assets/Manager-Skill.md in generated documentation folders.
  - When the user provides original document content, first use the hardcoded
    manager skill to rewrite it into a production-ready technical document.
  - After the manager-written document is complete, convert it into a new copy
    of DOC_DATA.pages in docs-content.js without changing the HTML/CSS/runtime.
  - Keep each level, area, mission, room, or gameplay phase as a complete page
    group or clear subpage group so builders and developers can use it directly.

  SUMMARY GENERATION WORKFLOW
  - The summary generation role and rules are hardcoded in
    DOC_DATA.generatorRequirements.summaryGenerationSkill.
  - Do not require summary-skill.txt in generated documentation folders.
  - When using Codex to generate final content, use that hardcoded skill to create
    production-focused summaries from the actual page content.
  - For this UI, each page still renders the compact page.summary shape:
    { title, body, points }.
  - If page.summary is missing or set to "auto", the browser creates a simple
    fallback preview from the page title, lead, and section headings. That fallback
    is only for preview; final client documents should include edited summaries.

  AI TRANSLATION AUTHORING WORKFLOW
  - Always generate the source documentation in en first.
  - After the English content is finalized, automatically generate polished Bahasa Indonesia
    from the finalized English content.
  - Do not ask whether both languages should be generated unless the user explicitly asks
    for English-only output or a different language workflow.
  - Use id: "auto" as a temporary Codex authoring marker only when drafting.
    The browser will not translate it.
  - Do not leave id: "auto" in a published file; replace it before handing the document to readers.
  - Preserve technical terms in English when they are the expected developer vocabulary.
  - Keep code, commands, file paths, URLs, slugs, IDs, object keys, and Google Drive links unchanged.
  - Keep the same object shape as en so language switching and pagination continue to work.

  FINAL GENERATION VALIDATION
  - Before delivery, run the checklist in DOC_DATA.generatorRequirements.finalGenerationChecklist.
  - Generated output must keep this file named docs-content.js and place it beside the HTML file.
  - Every page must have a unique slug, English and Bahasa Indonesia content, edited summaries,
    and at least one visible section.
  - Every section must have a unique id within its page.
  - English and Bahasa Indonesia section ids must match in the same order.
  - Replace all placeholder Google Drive URLs before final client delivery.

  TECHNICAL TERMS TO PRESERVE WHEN TRANSLATING
  API, endpoint, payload, request, response, runtime, repository, rollback, rollout,
  HTML, CSS, JavaScript, JSON, localStorage, DOC_DATA, Google Drive, OpenAPI,
  Postman, Node.js, npm.
*/
window.DOC_DATA = {
  settings: {
    defaultLanguage: "en",
    defaultTheme: "light",
    storagePrefix: "developer-doc-template",
    brandMark: "M",
    brandLogo: "assets/logo.png",
    brandTitle: "MIVUBI Documentation",
    brandSubtitle: "Project Developing Guide",
    showProjectLinkWarnings: false
  },
  generatorRequirements: {
    brandIdentity: {
      locked: true,
      logoPath: "assets/logo.png",
      title: "MIVUBI Documentation",
      subtitle: "Project Developing Guide",
      instruction: "Keep the logo and header title hardcoded for every generated document. Do not ask the user for replacement branding and do not alter these values unless the user explicitly requests a brand change."
    },
    documentGenerationWorkflow: {
      embedded: true,
      externalSkillFilesRequired: false,
      instruction: "Use this exact flow when generating a client-ready documentation HTML from original source content.",
      steps: [
        {
          order: 1,
          name: "Receive original document",
          action: "Use the user's original document content as the only source material for the production document. Do not invent missing facts."
        },
        {
          order: 2,
          name: "Write production document",
          action: "Apply DOC_DATA.generatorRequirements.managerGenerationSkill to transform the original document into a detailed technical production document in English."
        },
        {
          order: 3,
          name: "Create docs-content copy",
          action: "Create a new copy of docs-content.js and replace only the content data: DOC_DATA.pages, DOC_DATA.projectLinks[].url, and any document-specific metadata that belongs in DOC_DATA. Preserve the HTML structure and runtime behavior."
        },
        {
          order: 4,
          name: "Generate page summaries",
          action: "After the English production page content is written, apply DOC_DATA.generatorRequirements.summaryGenerationSkill to generate compact page.summary objects for every page."
        },
        {
          order: 5,
          name: "Translate Bahasa Indonesia",
          action: "Translate the finalized English content and summaries into polished Bahasa Indonesia using DOC_DATA.generatorRequirements.languageWorkflow. Preserve expected technical terms in English."
        },
        {
          order: 6,
          name: "Collect project links",
          action: "Before final HTML delivery in Plan Mode, ask for the Development Folder, Tracker, and Floor Plan Google Drive URLs, then replace only DOC_DATA.projectLinks[].url values."
        },
        {
          order: 7,
          name: "Deliver final HTML",
          action: "Use the existing Developer-Documentation-Template.html UI with the generated docs-content.js data. Do not require Manager-Skill.md or summary-skill.txt beside the generated output."
        }
      ]
    },
    managerGenerationSkill: {
      embedded: true,
      externalFileRequired: false,
      sourceName: "assets/Manager-Skill.md",
      role: "Production Manager at a Minecraft studio that creates and ships commercial Minecraft maps for the Minecraft Marketplace and Minecraft Education Edition.",
      task: "Convert original Minecraft development document content into a clear, detailed technical production document for both the building team and the development team.",
      finalDocumentPurpose: "Explain what needs to be built, how the gameplay works, how each area supports gameplay, and what builders and developers need to create.",
      preservationRules: [
        "Preserve the main intent, ideas, features, gameplay, and structure from the source document.",
        "Do not remove important information.",
        "Do not silently fix major issues without explaining them.",
        "If something is unclear, missing, inconsistent, or could be improved, add a note under the relevant topic with an issue, why it matters, and a suggestion.",
        "If the source document does not provide enough information, write: Not specified, then suggest what should be decided.",
        "Do not invent missing details as facts."
      ],
      importantStructureRule: "Do not create separate repetitive sections for gameplay explanation, level breakdown, map illustration, mechanic guide, builder requirements, developer requirements, and risk notes. Combine everything into one complete production section for each level, area, mission, room, or gameplay phase.",
      requiredDocumentStructure: [
        {
          heading: "Project Overview",
          include: [
            "Map title if available",
            "Map theme",
            "Map size or estimated size",
            "Purpose of the map",
            "Target player experience",
            "Main player objective",
            "Overall visual direction",
            "Main gameplay type",
            "Number of levels, areas, missions, or gameplay phases",
            "Important locations or zones",
            "Marketplace or Education Edition considerations if relevant"
          ]
        },
        {
          heading: "Complete Production Breakdown by Level / Area / Gameplay Phase",
          instruction: "For every level, area, mission, room, or gameplay phase in the source document, create one complete section.",
          requiredBlocks: [
            "Level / Area Name",
            "Purpose",
            "Theme and Visual Direction",
            "Suggested Size and Layout",
            "Map and Area Illustration",
            "Gameplay Explanation",
            "Gameplay Simulation",
            "Mechanic and Puzzle Guide",
            "Builder Requirements",
            "Developer Requirements",
            "Risk and Improvement Notes"
          ]
        },
        {
          heading: "Full Player Flow Summary",
          include: [
            "Starting point",
            "Main progression path",
            "Level or area order",
            "Key objectives",
            "Major gameplay moments",
            "Final objective",
            "Ending or completion sequence"
          ]
        },
        {
          heading: "Final Production Checklist",
          include: [
            "Build Team Checklist",
            "Development Team Checklist",
            "Gameplay Testing Checklist",
            "Marketplace / Education Edition Checklist"
          ]
        }
      ],
      levelAreaBlockDetails: {
        purpose: "Explain what the player is supposed to experience, learn, solve, fight, explore, or complete.",
        themeAndVisualDirection: "Describe visual style, atmosphere, block palette ideas, lighting direction, decoration style, and environmental details.",
        suggestedSizeAndLayout: [
          "Suggested dimensions in Minecraft blocks",
          "Main player path",
          "Entry point",
          "Exit point",
          "Important structures",
          "Gameplay zones",
          "Hidden areas if needed",
          "Space needed for redstone, commands, entities, scripts, functions, or addons"
        ],
        gameplayExplanation: [
          "What the player sees first",
          "What the player needs to do",
          "What the objective is",
          "What objects or NPCs the player interacts with",
          "What challenge, puzzle, combat, exploration, or learning activity happens",
          "How the player progresses",
          "How the area is completed",
          "What happens after completion"
        ],
        gameplaySimulation: "Write a step-by-step simulation of the player experience in this area.",
        mechanicAndPuzzleGuide: [
          "Mechanic or puzzle name",
          "Purpose",
          "Required build setup",
          "Required developer setup",
          "Player instruction",
          "Hint system",
          "Correct solution",
          "Failure condition if any",
          "Reset behavior if any",
          "Reward or completion result",
          "Minecraft implementation ideas using redstone, command blocks, NPCs, entities, scoreboards, scripts, functions, or addons when relevant"
        ],
        builderRequirements: [
          "Structures to build",
          "Approximate block sizes",
          "Block palette suggestions",
          "Decoration requirements",
          "Lighting style",
          "Environmental storytelling",
          "Navigation path",
          "Important spaces that must stay clear for gameplay",
          "Areas that need space for developer mechanics",
          "Build restrictions caused by gameplay needs"
        ],
        developerRequirements: [
          "Gameplay logic",
          "Interaction triggers",
          "NPC dialogue if needed",
          "Puzzle logic",
          "Command block or script behavior",
          "Scoreboard systems if needed",
          "Entity behavior if needed",
          "UI, text, or title prompts",
          "Checkpoints",
          "Timers if needed",
          "Rewards",
          "Completion condition",
          "Transition to the next area",
          "Multiplayer considerations if relevant",
          "Reset or replay behavior if relevant"
        ],
        riskAndImprovementNoteShape: {
          issue: "Explain the problem clearly.",
          whyItMatters: "Explain how it affects gameplay, building, development, or player experience.",
          suggestion: "Give a better option or improvement."
        }
      },
      finalChecklistShape: {
        buildTeamChecklist: [
          "Main structures completed",
          "Area sizes checked",
          "Navigation flow clear",
          "Gameplay spaces preserved",
          "Decorations and atmosphere completed",
          "Lighting checked",
          "Hidden areas and clues placed"
        ],
        developmentTeamChecklist: [
          "Gameplay systems implemented",
          "Puzzles and mechanics working",
          "NPCs and dialogue added",
          "Commands, scripts, scoreboards, or addons tested",
          "Triggers working",
          "Level progression working",
          "Win and fail conditions working",
          "Reset systems working if needed"
        ],
        gameplayTestingChecklist: [
          "Player understands the objective",
          "Gameplay is not confusing",
          "Puzzles have enough hints",
          "Player cannot skip important steps",
          "Level transitions work",
          "Multiplayer works if relevant",
          "No softlocks",
          "No broken mechanics"
        ],
        marketplaceEducationEditionChecklist: [
          "Content is appropriate",
          "Gameplay is polished",
          "Instructions are clear",
          "Performance is optimized",
          "Map is ready for review",
          "Educational goals are clear if used for Education Edition"
        ]
      },
      writingRules: [
        "Write clearly and professionally.",
        "Make the document practical and production-ready.",
        "Do not only summarize the source document.",
        "Expand the source document into a usable technical production guide.",
        "Avoid vague explanations.",
        "Always explain what to build, how it works, and how the player experiences it.",
        "Use headings, subheadings, and tables where useful.",
        "Keep all information for each level or area inside that level or area section."
      ],
      pageMappingGuidance: [
        "Use Project Overview as a major page.",
        "Use each level, area, mission, room, or gameplay phase as a major page or a page group with clear subpages.",
        "Use Full Player Flow Summary as a major page or final subpage.",
        "Use Final Production Checklist as a major page.",
        "Keep page.sections focused enough for the dropdown navigation to remain readable.",
        "Use summary: \"auto\" only during drafting; replace it with an edited summary object before delivery."
      ]
    },
    languageWorkflow: {
      sourceLanguage: "en",
      targetLanguage: "id",
      askBeforeGeneratingBothLanguages: false,
      instruction: "Always generate English content first. After English is finalized, automatically generate polished Bahasa Indonesia from that English source. Do not ask whether both languages should be generated unless the user explicitly requests English-only output or a different workflow.",
      translationRules: [
        "Preserve expected technical terms in English.",
        "Keep code, commands, file paths, URLs, slugs, IDs, object keys, and Google Drive links unchanged.",
        "Keep the Bahasa Indonesia object shape identical to the English object shape.",
        "Do not leave id: \"auto\" in a client-ready document."
      ]
    },
    planModeProjectLinks: {
      requiredBeforeFinalHtml: true,
      instruction: "When using Plan Mode to generate a final HTML document, ask the user for these three project-wide Google Drive links before finalizing. Replace only DOC_DATA.projectLinks[].url values.",
      questions: [
        {
          id: "developmentFolderUrl",
          label: "Development Folder",
          target: "DOC_DATA.projectLinks[0].url",
          prompt: "What is the Google Drive URL for the Development Folder?"
        },
        {
          id: "trackerUrl",
          label: "Tracker",
          target: "DOC_DATA.projectLinks[1].url",
          prompt: "What is the Google Drive URL for the Tracker?"
        },
        {
          id: "floorPlanUrl",
          label: "Floor Plan",
          target: "DOC_DATA.projectLinks[2].url",
          prompt: "What is the Google Drive URL for the Floor Plan?"
        }
      ]
    },
    finalGenerationChecklist: {
      requiredBeforeDelivery: true,
      outputContract: [
        "The generated content file must be named exactly docs-content.js.",
        "The generated docs-content.js file must be placed beside Developer-Documentation-Template.html.",
        "Do not require assets/Manager-Skill.md or summary-skill.txt in the generated folder.",
        "Do not change the HTML structure unless the user explicitly requests a template redesign."
      ],
      dataValidationRules: [
        "DOC_DATA.pages must contain at least one page.",
        "Every page must have a unique slug.",
        "Every page must contain en and id objects.",
        "Every en and id object must include navTitle or title, title, lead, summary, and sections.",
        "Every page.summary must be an edited object with title, body, and points. Do not leave summary: \"auto\".",
        "Every language object must have at least one visible section.",
        "Every section must have a non-empty unique id within the page.",
        "The en.sections and id.sections arrays must use matching ids in the same order.",
        "No projectLinks[].url value may be empty or contain replace-development-folder, replace-tracker, or replace-floor-plan.",
        "DOC_DATA.projectLinks must contain exactly three project-wide buttons: Development Folder, Tracker, and Floor Plan."
      ],
      supportedSectionBlocks: [
        "body: string[]",
        "list: string[]",
        "steps: string[]",
        "callout: { title, text }",
        "code: { caption, language, value }",
        "table: { columns: string[], rows: string[][] | object[] }"
      ],
      recommendedVerificationCommands: [
        "node -c docs-content.js",
        "Load Developer-Documentation-Template.html in the browser and check for console warnings.",
        "Switch EN and ID and verify the same page/subpage remains understandable.",
        "Use arrow keys, pagination buttons, and dropdown navigation to verify page movement."
      ]
    },
    summaryGenerationSkill: {
      embedded: true,
      externalFileRequired: false,
      sourceName: "summary-skill.txt",
      role: "Production Summary Analyst at a Minecraft studio that creates commercial Minecraft maps for the Minecraft Marketplace and Minecraft Education Edition.",
      task: "Read the generated technical production document and create a clear, concise, production-focused summary.",
      audience: ["Production manager", "Builders", "Developers", "QA team", "Stakeholders"],
      coreRules: [
        "Do not rewrite the full document.",
        "Do not add new gameplay ideas unless clearly marked as a suggestion.",
        "Do not remove important production information.",
        "Do not invent missing details.",
        "Only summarize based on the generated document.",
        "If something is not specified in the document, write: Not specified.",
        "Keep the summary useful for production meetings, team briefings, and stakeholder review."
      ],
      mainGoal: "Explain what the map is, how the gameplay works, what needs to be built, what needs to be developed, and what risks or improvements the team should notice.",
      productionSummarySections: [
        {
          heading: "Executive Summary",
          include: ["Map theme", "Main player objective", "Core gameplay type", "Overall experience", "Purpose of the map", "Target use for Marketplace or Minecraft Education Edition if mentioned"]
        },
        {
          heading: "Map Overview Summary",
          include: ["Map title", "Theme", "Estimated size", "Number of levels, areas, rooms, missions, or gameplay phases", "Main locations", "Visual direction", "Player progression style"]
        },
        {
          heading: "Gameplay Summary",
          include: ["What the player does", "How the player progresses", "Main objectives", "Main challenges", "Puzzle, combat, exploration, learning, or interaction systems", "Win or completion condition"]
        },
        {
          heading: "Level / Area Summary",
          format: ["Level / Area Name", "Purpose", "Visual Theme", "Gameplay", "Build Requirements", "Developer Requirements", "Completion", "Notes / Risks"]
        },
        {
          heading: "Build Team Summary",
          include: ["Main structures", "Important rooms or areas", "Required sizes if available", "Visual themes", "Decoration needs", "Navigation flow", "Spaces that must support gameplay mechanics", "Special building restrictions"]
        },
        {
          heading: "Development Team Summary",
          include: ["Gameplay systems", "Puzzle systems", "NPCs or dialogue", "Commands, scripts, functions, scoreboards, redstone, addons, or entities", "Triggers and interactions", "Progression logic", "Win, fail, reset, and replay systems", "Multiplayer considerations if mentioned"]
        },
        {
          heading: "QA and Testing Summary",
          include: ["Player objective clarity", "Puzzle clarity", "Level transitions", "Gameplay progression", "Softlock risks", "Broken mechanics", "Multiplayer issues if relevant", "Performance concerns", "Marketplace or Education Edition readiness"]
        },
        {
          heading: "Key Risks and Improvement Suggestions",
          format: ["Risk / Issue", "Problem", "Why it matters", "Suggested solution"]
        },
        {
          heading: "Final Production Snapshot",
          include: ["Overall production complexity: Low / Medium / High", "Build complexity: Low / Medium / High", "Development complexity: Low / Medium / High", "Estimated number of major gameplay areas", "Main gameplay focus", "Biggest production risk", "Most important next step"]
        }
      ],
      compactPageSummaryRules: [
        "Use the production-summary role when deciding what matters.",
        "Generate one compact summary object for every DOC_DATA.pages language object.",
        "Use title for the main production focus of the current page.",
        "Use body for a short paragraph explaining why this page matters to production.",
        "Use exactly three points when possible.",
        "Map points to the most important build, development, QA, gameplay, risk, or stakeholder information present on that page.",
        "Preserve Minecraft, Marketplace, Education Edition, command, script, scoreboard, redstone, addon, entity, and other expected technical terms in English.",
        "Do not invent missing production details."
      ],
      compactPageSummaryShape: {
        title: "Short production-focused title",
        body: "One concise paragraph based only on the page content.",
        points: ["Production-critical point 1", "Production-critical point 2", "Production-critical point 3"]
      }
    }
  },
  ui: {
    en: {
      brandTitle: "MIVUBI Documentation",
      brandSubtitle: "Project Developing Guide",
      documentLabel: "Document",
      pagesLabel: "Pages",
      sectionsLabel: "Subpages",
      skipLink: "Skip to content",
      summaryKicker: "Current page summary",
      pageSummarySectionTitle: "Page summary",
      summaryToggleHide: "Hide summary",
      summaryToggleShow: "Show summary",
      previous: "Previous",
      next: "Next",
      firstPage: "First page",
      lastPage: "Last page",
      openDrive: "Open in Google Drive",
      projectLinksLabel: "Project links",
      menu: "Menu",
      themeLight: "Switch to light mode",
      themeDark: "Switch to dark mode"
    },
    id: {
      brandTitle: "MIVUBI Documentation",
      brandSubtitle: "Project Developing Guide",
      documentLabel: "Dokumen",
      pagesLabel: "Halaman",
      sectionsLabel: "Subhalaman",
      skipLink: "Lewati ke konten",
      summaryKicker: "Ringkasan halaman aktif",
      pageSummarySectionTitle: "Ringkasan halaman",
      summaryToggleHide: "Sembunyikan ringkasan",
      summaryToggleShow: "Tampilkan ringkasan",
      previous: "Sebelumnya",
      next: "Berikutnya",
      firstPage: "Halaman pertama",
      lastPage: "Halaman terakhir",
      openDrive: "Buka di Google Drive",
      projectLinksLabel: "Tautan proyek",
      menu: "Menu",
      themeLight: "Ganti ke mode terang",
      themeDark: "Ganti ke mode gelap"
    }
  },
  projectLinks: [
    {
      label: {
        en: "Development Folder",
        id: "Development Folder"
      },
      icon: "folder",
      url: "https://drive.google.com/drive/u/1/folders/1x_03Fzws9u4kv-wtmNvNN2DCN4e0lfBq",
      primary: true
    },
    {
      label: {
        en: "Tracker",
        id: "Tracker"
      },
      icon: "tracker",
      url: "https://dev.tracker.mivubi.com/projects/proj-704c2k727"
    },
    {
      label: {
        en: "Floor Plan",
        id: "Floor Plan"
      },
      icon: "floorPlan",
      url: "https://dev.mcfloorplan.mivubi.com/"
    }
  ],
  pages: [
    {
      slug: "overview",
      en: {
        navTitle: "Overview",
        eyebrow: "Template start",
        title: "Reusable Developer Documentation",
        lead: "A flexible page-based documentation template with bilingual content, persistent theme preferences, Google Drive actions, and summary support.",
        summary: {
          title: "What this page covers",
          body: "Use this page as the front door for your document. It explains the template model and the pieces most teams replace first.",
          points: ["Content lives in a JavaScript data object.", "Pages render without changing the HTML layout.", "Language, theme, navigation, and summaries are already wired."]
        },
        meta: [
          { label: "Audience", value: "Engineering teams" },
          { label: "Format", value: "Single HTML file" },
          { label: "Use case", value: "Internal docs, handoff notes, specs" }
        ],
        sections: [
          {
            id: "how-it-works",
            heading: "How the template works",
            body: [
              "The page shell stays fixed while documentation content is rendered from the DOC_DATA object. Update titles, sections, summaries, and links in one place.",
              "Each major section is represented as a page. The navigation, table of contents, summary panel, and pagination controls are generated automatically."
            ],
            callout: {
              title: "Reuse tip",
              text: "Duplicate a page object, give it a unique id, then replace the bilingual text and section content."
            }
          },
          {
            id: "content-model",
            heading: "Content model",
            body: [
              "Every page contains bilingual text, an optional metadata grid, a summary, and a list of sections. Sections can include paragraphs, lists, code samples, and callouts. Project-wide Google Drive buttons are configured once in projectLinks."
            ],
            code: {
              caption: "Example page shape",
              language: "js",
              value: `{
  slug: "new-page",
  en: {
navTitle: "New Page",
title: "Page title",
summary: { title: "...", body: "...", points: ["..."] },
sections: [{ id: "section-id", heading: "Heading", body: ["Paragraph"] }]
  },
  id: {
navTitle: "Halaman Baru",
title: "Judul halaman",
summary: { title: "...", body: "...", points: ["..."] },
sections: [{ id: "section-id", heading: "Judul", body: ["Paragraf"] }]
  }
}`
            }
          }
        ]
      },
      id: {
        navTitle: "Overview",
        eyebrow: "Template start",
        title: "Dokumentasi Developer Reusable",
        lead: "Template dokumentasi berbasis page yang fleksibel, dengan bilingual content, preferensi theme yang tersimpan, Google Drive actions, dan summary support.",
        summary: {
          title: "Yang dibahas di page ini",
          body: "Gunakan page ini sebagai entry point dokumen. Page ini menjelaskan template model dan komponen yang biasanya paling awal diganti oleh tim.",
          points: ["Content disimpan di JavaScript data object.", "Page di-render tanpa perubahan pada HTML layout.", "Language switch, theme, navigation, dan summary sudah siap digunakan."]
        },
        meta: [
          { label: "Audiens", value: "Engineering team" },
          { label: "Format", value: "Single HTML file" },
          { label: "Use case", value: "Internal docs, handoff notes, specs" }
        ],
        sections: [
          {
            id: "how-it-works",
            heading: "Cara kerja template",
            body: [
              "Page shell tetap fixed, sementara content dokumentasi di-render dari object DOC_DATA. Update title, section, summary, dan link cukup dilakukan di satu tempat.",
              "Setiap bagian utama direpresentasikan sebagai page. Navigation, table of contents, summary panel, dan pagination controls dibuat secara otomatis."
            ],
            callout: {
              title: "Tips reuse",
              text: "Duplikasi page object, beri unique id, lalu ganti bilingual text dan section content sesuai kebutuhan dokumen."
            }
          },
          {
            id: "content-model",
            heading: "Model konten",
            body: [
              "Setiap page berisi bilingual text, optional metadata grid, summary, dan daftar section. Section dapat berisi paragraph, list, code sample, dan callout. Project-wide Google Drive buttons dikonfigurasi satu kali di projectLinks."
            ],
            code: {
              caption: "Contoh struktur halaman",
              language: "js",
              value: `{
  slug: "new-page",
  en: {
navTitle: "New Page",
title: "Page title",
summary: { title: "...", body: "...", points: ["..."] },
sections: [{ id: "section-id", heading: "Heading", body: ["Paragraph"] }]
  },
  id: {
navTitle: "Halaman Baru",
title: "Judul halaman",
summary: { title: "...", body: "...", points: ["..."] },
sections: [{ id: "section-id", heading: "Judul", body: ["Paragraf"] }]
  }
}`
            }
          }
        ]
      }
    },
    {
      slug: "setup",
      en: {
        navTitle: "Setup Guide",
        eyebrow: "Environment",
        title: "Setup Guide",
        lead: "Document prerequisites, local setup steps, configuration files, and common commands for contributors.",
        summary: {
          title: "Setup at a glance",
          body: "This page is structured for onboarding and local development readiness.",
          points: ["List required tools and versions.", "Keep commands copyable and scoped.", "Link environment files or onboarding folders."]
        },
        meta: [
          { label: "Owner", value: "Platform team" },
          { label: "Last reviewed", value: "Replace with date" },
          { label: "Status", value: "Ready to customize" }
        ],
        sections: [
          {
            id: "prerequisites",
            heading: "Prerequisites",
            body: [
              "Use this section for runtime versions, access requirements, permissions, and account setup. Keep the list short enough for a new contributor to scan."
            ],
            list: ["Node.js or the runtime used by your project", "Package manager and lockfile policy", "Repository access and required service accounts", "Environment variable source of truth"]
          },
          {
            id: "local-run",
            heading: "Run locally",
            body: [
              "Replace these commands with the workflow your project expects. The template handles code blocks as part of the page data."
            ],
            code: {
              caption: "Local development commands",
              language: "bash",
              value: `npm install
npm run dev
npm test`
            }
          },
          {
            id: "environment-files",
            heading: "Environment files",
            body: [
              "Reference shared environment examples, credential request processes, or onboarding folders here. Avoid storing secrets directly in the documentation."
            ],
            callout: {
              title: "Security note",
              text: "Keep secret values in your approved secret manager. Documentation should point to the process, not expose credentials."
            }
          }
        ]
      },
      id: {
        navTitle: "Setup Guide",
        eyebrow: "Environment",
        title: "Setup Guide",
        lead: "Dokumentasikan prerequisites, local setup steps, configuration files, dan common commands yang dibutuhkan contributor.",
        summary: {
          title: "Setup at a glance",
          body: "Page ini disusun untuk onboarding dan memastikan local development siap dijalankan.",
          points: ["Cantumkan required tools beserta version-nya.", "Pastikan commands mudah di-copy dan tetap scoped.", "Link environment files atau onboarding folders yang relevan."]
        },
        meta: [
          { label: "Owner", value: "Platform team" },
          { label: "Last reviewed", value: "Ganti dengan tanggal" },
          { label: "Status", value: "Ready to customize" }
        ],
        sections: [
          {
            id: "prerequisites",
            heading: "Prerequisites",
            body: [
              "Gunakan section ini untuk runtime versions, access requirements, permissions, dan account setup. Jaga list tetap singkat agar new contributor bisa memindainya dengan cepat."
            ],
            list: ["Node.js atau runtime yang digunakan project", "Package manager dan lockfile policy", "Repository access dan required service accounts", "Source of truth untuk environment variables"]
          },
          {
            id: "local-run",
            heading: "Run locally",
            body: [
              "Ganti commands berikut dengan workflow yang digunakan project. Template menampilkan code block langsung dari page data."
            ],
            code: {
              caption: "Local development commands",
              language: "bash",
              value: `npm install
npm run dev
npm test`
            }
          },
          {
            id: "environment-files",
            heading: "Environment files",
            body: [
              "Referensikan shared environment examples, credential request process, atau onboarding folders di sini. Hindari menyimpan secrets langsung di dokumentasi."
            ],
            callout: {
              title: "Security note",
              text: "Simpan secret values di approved secret manager. Dokumentasi sebaiknya mengarahkan pembaca ke process, bukan menampilkan credentials."
            }
          }
        ]
      }
    },
    {
      slug: "architecture",
      en: {
        navTitle: "Architecture",
        eyebrow: "System design",
        title: "Architecture Notes",
        lead: "Describe the system boundaries, core modules, data flow, and the decisions that future maintainers need to understand.",
        summary: {
          title: "Architecture focus",
          body: "Use this page to keep durable design knowledge close to the implementation notes.",
          points: ["Explain boundaries before internals.", "Name the data contracts that matter.", "Link diagrams and decision records."]
        },
        sections: [
          {
            id: "boundaries",
            heading: "System boundaries",
            body: [
              "Start with what the system owns, what it depends on, and which external services are part of the request path.",
              "This framing helps readers decide whether a change belongs inside the service, another service, or shared infrastructure."
            ],
            list: ["Owned APIs and public interfaces", "External dependencies and service-level expectations", "Data stores and lifecycle responsibilities"]
          },
          {
            id: "data-flow",
            heading: "Data flow",
            body: [
              "Use concise steps to explain how data enters, transforms, persists, and leaves the system. Reference detailed diagrams when the flow is easier to understand visually."
            ]
          },
          {
            id: "tradeoffs",
            heading: "Tradeoffs and constraints",
            body: [
              "Record constraints that shape the implementation, including latency targets, security requirements, migration windows, and backwards compatibility expectations."
            ],
            callout: {
              title: "Maintenance habit",
              text: "When a key decision changes, update this page and the linked decision record in the same pull request."
            }
          }
        ]
      },
      id: {
        navTitle: "Architecture",
        eyebrow: "System design",
        title: "Architecture Notes",
        lead: "Jelaskan system boundaries, core modules, data flow, dan keputusan yang perlu dipahami future maintainer.",
        summary: {
          title: "Architecture focus",
          body: "Gunakan page ini agar pengetahuan desain jangka panjang tetap dekat dengan implementation notes.",
          points: ["Jelaskan boundaries sebelum masuk ke internals.", "Sebutkan data contracts yang penting.", "Tautkan diagrams dan decision records."]
        },
        sections: [
          {
            id: "boundaries",
            heading: "System boundaries",
            body: [
              "Mulai dari apa yang dimiliki system, dependency apa yang digunakan, dan external services mana yang masuk ke request path.",
              "Framing ini membantu pembaca menentukan apakah sebuah perubahan seharusnya berada di service ini, service lain, atau shared infrastructure."
            ],
            list: ["Owned APIs dan public interfaces", "External dependencies dan service-level expectations", "Data stores dan lifecycle responsibilities"]
          },
          {
            id: "data-flow",
            heading: "Data flow",
            body: [
              "Gunakan langkah ringkas untuk menjelaskan bagaimana data masuk, ditransformasi, disimpan, lalu keluar dari system. Referensikan detailed diagrams ketika flow lebih mudah dipahami secara visual."
            ]
          },
          {
            id: "tradeoffs",
            heading: "Tradeoffs and constraints",
            body: [
              "Catat constraints yang membentuk implementation, termasuk latency targets, security requirements, migration windows, dan backwards compatibility expectations."
            ],
            callout: {
              title: "Maintenance habit",
              text: "Ketika key decision berubah, update page ini dan linked decision record di pull request yang sama."
            }
          }
        ]
      }
    },
    {
      slug: "api-reference",
      en: {
        navTitle: "API Reference",
        eyebrow: "Integration",
        title: "API Reference",
        lead: "Document endpoints, payload expectations, response examples, and operational notes for consumers.",
        summary: {
          title: "API reference focus",
          body: "Use this page for stable contracts and examples that help consumers integrate safely.",
          points: ["Group endpoints by capability.", "Show request and response examples.", "Document errors and compatibility notes."]
        },
        sections: [
          {
            id: "endpoint-patterns",
            heading: "Endpoint patterns",
            body: [
              "Describe naming conventions, authentication expectations, versioning strategy, and pagination behavior before listing individual endpoints."
            ],
            list: ["Authentication header or token source", "Versioning and deprecation policy", "Rate limits and retry guidance"]
          },
          {
            id: "request-example",
            heading: "Request example",
            body: [
              "Keep examples realistic and small. Replace placeholder payloads with the contract your consumers should copy."
            ],
            code: {
              caption: "Sample request payload",
              language: "json",
              value: `{
  "customerId": "cus_123",
  "includeInactive": false,
  "limit": 25
}`
            }
          },
          {
            id: "reference-files",
            heading: "Reference files",
            body: [
              "Mention OpenAPI files, Postman collections, or integration test fixtures here when they are relevant to this page."
            ]
          }
        ]
      },
      id: {
        navTitle: "API Reference",
        eyebrow: "Integration",
        title: "API Reference",
        lead: "Dokumentasikan endpoints, payload expectations, response examples, dan operational notes untuk consumers.",
        summary: {
          title: "API reference focus",
          body: "Gunakan page ini untuk stable contracts dan examples yang membantu consumers melakukan integration dengan aman.",
          points: ["Kelompokkan endpoints berdasarkan capability.", "Tampilkan request dan response examples.", "Dokumentasikan errors dan compatibility notes."]
        },
        sections: [
          {
            id: "endpoint-patterns",
            heading: "Endpoint patterns",
            body: [
              "Jelaskan naming conventions, authentication expectations, versioning strategy, dan pagination behavior sebelum menuliskan individual endpoints."
            ],
            list: ["Authentication header atau token source", "Versioning dan deprecation policy", "Rate limits dan retry guidance"]
          },
          {
            id: "request-example",
            heading: "Request example",
            body: [
              "Jaga examples tetap realistis dan ringkas. Ganti placeholder payloads dengan contract yang memang seharusnya di-copy oleh consumers."
            ],
            code: {
              caption: "Sample request payload",
              language: "json",
              value: `{
  "customerId": "cus_123",
  "includeInactive": false,
  "limit": 25
}`
            }
          },
          {
            id: "reference-files",
            heading: "Reference files",
            body: [
              "Sebutkan OpenAPI files, Postman collections, atau integration test fixtures di sini jika relevan dengan page ini."
            ]
          }
        ]
      }
    },
    {
      slug: "release",
      en: {
        navTitle: "Release Notes",
        eyebrow: "Delivery",
        title: "Release Notes",
        lead: "Capture release scope, rollout steps, validation checks, and rollback guidance in a repeatable page format.",
        summary: {
          title: "Release readiness",
          body: "Use this page to align engineering, QA, support, and operations before changes ship.",
          points: ["Summarize what is changing.", "Show validation and rollout steps.", "Keep rollback guidance visible."]
        },
        sections: [
          {
            id: "release-scope",
            heading: "Release scope",
            body: [
              "Summarize the user-visible and technical changes in plain language. Link the detailed implementation plan when needed."
            ]
          },
          {
            id: "validation",
            heading: "Validation checklist",
            body: [
              "Keep validation steps close to the release notes so reviewers can confirm readiness without hunting through separate tools."
            ],
            list: ["Automated test suite passes", "Manual smoke path completed", "Monitoring dashboard reviewed", "Support notes prepared"]
          },
          {
            id: "rollback",
            heading: "Rollback guidance",
            body: [
              "Document the safest rollback path, decision owner, and signals that should stop or reverse the rollout."
            ],
            callout: {
              title: "Operational clarity",
              text: "A good rollback section names the person or role with authority to pause the rollout."
            }
          }
        ]
      },
      id: {
        navTitle: "Release Notes",
        eyebrow: "Delivery",
        title: "Release Notes",
        lead: "Catat release scope, rollout steps, validation checks, dan rollback guidance dalam page format yang repeatable.",
        summary: {
          title: "Release readiness",
          body: "Gunakan page ini untuk menyelaraskan engineering, QA, support, dan operations sebelum changes dikirim.",
          points: ["Ringkas apa yang berubah.", "Tampilkan validation dan rollout steps.", "Pastikan rollback guidance mudah terlihat."]
        },
        sections: [
          {
            id: "release-scope",
            heading: "Release scope",
            body: [
              "Ringkas user-visible changes dan technical changes dengan bahasa yang jelas. Link detailed implementation plan jika dibutuhkan."
            ]
          },
          {
            id: "validation",
            heading: "Validation checklist",
            body: [
              "Letakkan validation steps dekat dengan release notes agar reviewers bisa confirm readiness tanpa mencari ke tools terpisah."
            ],
            list: ["Automated test suite passes", "Manual smoke path completed", "Monitoring dashboard reviewed", "Support notes prepared"]
          },
          {
            id: "rollback",
            heading: "Rollback guidance",
            body: [
              "Dokumentasikan safest rollback path, decision owner, dan signals yang harus menghentikan atau membalik rollout."
            ],
            callout: {
              title: "Operational clarity",
              text: "Rollback section yang baik menyebutkan person atau role yang punya authority untuk pause rollout."
            }
          }
        ]
      }
    }
  ]
};

window.DOC_DATA.pages = [];

window.DOC_DATA.pages.push({
  slug: "project-overview",
  en: {
    navTitle: "Project Overview",
    eyebrow: "Dark Crystal",
    title: "Dark Crystal Production Overview",
    lead: "Dark Crystal is a PvP conversion map for Minecraft Education Edition where one Crystal Bearer spreads corruption until one Survivor remains. This page defines the brief, scope, and delivery boundaries for MIVUBI and DAIGON.",
    summary: {
      title: "Project scope and delivery model",
      body: "This page establishes the map's audience, objective, format, and production responsibilities so the build and development teams can align before implementation.",
      points: ["The map is a PvP conversion experience for 8 to 16 students aged 8 to 15.", "The main objective is last uncorrupted Survivor, with session scoring based on rounds survived.", "MIVUBI delivers the playable map and command block baseline while DAIGON handles downstream platform integration after delivery."]
    },
    meta: [
      { label: "Client", value: "DAIGON ESPORTS" },
      { label: "Platform", value: "Minecraft Education Edition" },
      { label: "Status", value: "Confidential" },
      { label: "Version", value: "1.1" }
    ],
    sections: [
      {
        id: "overview-summary",
        heading: "Project summary",
        body: [
          "Dark Crystal is a branded DAIGON Esports arena experience where students alternate between being the pursuer and becoming the last remaining Survivor. The tone is adventurous and magical rather than horror, with a ruined town setting energized by corruption.",
          "The map is expected to create memorable classroom moments through live scoreboard feedback, visible corruption spread, and theatrical round resolution."
        ],
        table: {
          columns: ["Item", "Detail"],
          rows: [
            ["Map title", "Dark Crystal"],
            ["Audience", "Students aged 8 to 15"],
            ["Max players", "16 players per session"],
            ["Format", "PvP - Conversion / Last Survivor"],
            ["Round count", "3 to 4 rounds per session"],
            ["Source date", "April 2026"]
          ]
        }
      },
      {
        id: "core-specifications",
        heading: "Core specifications",
        body: [
          "The core requirement is to keep rounds fast, readable, and exciting while preserving enough map space for evasive movement and visible pursuit."
        ],
        table: {
          columns: ["Specification", "Value"],
          rows: [
            ["Players", "8 to 16"],
            ["Teams", "Free for all. Crystal Bearers vs Survivors."],
            ["Round length", "3 to 5 minutes, teacher configurable"],
            ["Win condition", "Last uncorrupted Survivor, or most rounds survived at session end"],
            ["Capture object", "Dark Crystal on a branded obsidian pedestal"],
            ["Ready system", "NPC click in Spawn Hub with a live ready or waiting wall"],
            ["Spawn system", "Shared Spawn Hub with leaderboard, rules board, Crystal pedestal, and ready wall"],
            ["Map theme", "Ancient ruined town with warm stone streets, overgrown archways, glowing crystal accents, and lantern lighting"]
          ]
        }
      },
      {
        id: "production-alignment",
        heading: "Production alignment",
        body: [
          "MIVUBI is expected to deliver the complete playable arena build, branded environment, and all command block systems listed in the brief. The delivered map must already support ready flow, random Bearer assignment, conversion logic, scoring, reset flow, and baseline event instrumentation.",
          "DAIGON's role after delivery is to connect the delivered scoreboard objectives and event triggers to its wider platform pipeline for student and club profile reporting."
        ],
        callout: {
          title: "Production note",
          text: "The source brief does not ask MIVUBI to implement DAIGON platform integration directly. MIVUBI must provide a complete baseline map and reliable event surface for DAIGON to validate and extend."
        }
      }
    ]
  },
  id: {
    navTitle: "Ikhtisar Proyek",
    eyebrow: "Dark Crystal",
    title: "Ikhtisar Produksi Dark Crystal",
    lead: "Dark Crystal adalah map PvP conversion untuk Minecraft Education Edition di mana satu Crystal Bearer menyebarkan corruption sampai hanya satu Survivor yang tersisa. Halaman ini mendefinisikan brief, scope, dan batas delivery untuk MIVUBI dan DAIGON.",
    summary: {
      title: "Ruang lingkup proyek dan model delivery",
      body: "Halaman ini menetapkan audiens, objective, format, dan tanggung jawab produksi map agar tim build dan development selaras sebelum implementasi.",
      points: ["Map ini adalah pengalaman PvP conversion untuk 8 sampai 16 siswa usia 8 sampai 15 tahun.", "Objective utamanya adalah Survivor terakhir yang belum terkorupsi, dengan penilaian sesi berdasarkan rounds survived.", "MIVUBI mengirimkan map playable dan baseline command block sementara DAIGON menangani integrasi platform lanjutan setelah delivery."]
    },
    meta: [
      { label: "Klien", value: "DAIGON ESPORTS" },
      { label: "Platform", value: "Minecraft Education Edition" },
      { label: "Status", value: "Confidential" },
      { label: "Versi", value: "1.1" }
    ],
    sections: [
      {
        id: "overview-summary",
        heading: "Ringkasan proyek",
        body: [
          "Dark Crystal adalah pengalaman arena DAIGON Esports yang kuat secara branding, di mana siswa bergantian menjadi pengejar dan menjadi Survivor terakhir. Nadanya petualangan dan magis, bukan horor, dengan setting kota reruntuhan yang digerakkan oleh corruption.",
          "Map ini diharapkan menciptakan momen kelas yang berkesan melalui feedback scoreboard langsung, penyebaran corruption yang terlihat, dan resolusi round yang teatrikal."
        ],
        table: {
          columns: ["Item", "Detail"],
          rows: [
            ["Judul map", "Dark Crystal"],
            ["Audiens", "Siswa usia 8 sampai 15 tahun"],
            ["Maksimum pemain", "16 pemain per sesi"],
            ["Format", "PvP - Conversion / Last Survivor"],
            ["Jumlah round", "3 sampai 4 round per sesi"],
            ["Tanggal sumber", "April 2026"]
          ]
        }
      },
      {
        id: "core-specifications",
        heading: "Spesifikasi inti",
        body: [
          "Kebutuhan paling inti adalah menjaga round tetap cepat, mudah dibaca, dan menarik sambil mempertahankan ruang map yang cukup untuk gerakan menghindar dan pursuit yang terlihat."
        ],
        table: {
          columns: ["Spesifikasi", "Nilai"],
          rows: [
            ["Pemain", "8 sampai 16"],
            ["Tim", "Free for all. Crystal Bearers vs Survivors."],
            ["Durasi round", "3 sampai 5 menit, teacher configurable"],
            ["Win condition", "Survivor terakhir yang belum terkorupsi, atau pemain dengan rounds survived terbanyak di akhir sesi"],
            ["Objek inti", "Dark Crystal di atas branded obsidian pedestal"],
            ["Ready system", "NPC click di Spawn Hub dengan live ready atau waiting wall"],
            ["Spawn system", "Spawn Hub bersama dengan leaderboard, rules board, Crystal pedestal, dan ready wall"],
            ["Tema map", "Kota reruntuhan kuno dengan warm stone streets, overgrown archways, glowing crystal accents, dan lantern lighting"]
          ]
        }
      },
      {
        id: "production-alignment",
        heading: "Penyelarasan produksi",
        body: [
          "MIVUBI diharapkan mengirimkan build arena playable lengkap, environment yang diberi branding, dan semua sistem command block yang tercantum pada brief. Map yang dikirim harus sudah mendukung ready flow, random Bearer assignment, conversion logic, scoring, reset flow, dan baseline event instrumentation.",
          "Peran DAIGON setelah delivery adalah menghubungkan scoreboard objectives dan event triggers yang dikirim ke pipeline platform yang lebih luas untuk pelaporan student dan club profile."
        ],
        callout: {
          title: "Catatan produksi",
          text: "Brief sumber tidak meminta MIVUBI untuk mengimplementasikan integrasi platform DAIGON secara langsung. MIVUBI harus menyediakan baseline map lengkap dan event surface yang andal untuk divalidasi dan diperluas oleh DAIGON."
        }
      }
    ]
  }
});

window.DOC_DATA.pages = [
  "project-overview",
  "spawn-hub",
  "central-arena",
  "vertical-play-zones",
  "gameplay-systems",
  "player-flow",
  "branding",
  "command-block-logic",
  "data-capture",
  "final-production-checklist"
].map((slug) => window.DOC_DATA.pages.find((page) => page.slug === slug)).filter(Boolean);

window.DOC_DATA.pages.push({
  slug: "final-production-checklist",
  en: {
    navTitle: "Final Checklist",
    eyebrow: "Delivery",
    title: "Final Production Checklist",
    lead: "This checklist converts the source delivery requirements into an implementation-ready signoff page for build, development, QA, and final export review.",
    summary: {
      title: "Delivery signoff structure",
      body: "This page groups the original checklist into practical signoff tracks so MIVUBI can confirm the map is built, functional, and ready for DAIGON review.",
      points: ["Build signoff focuses on arena construction, decoration, and branded world objects.", "Development signoff focuses on round systems, conversion logic, scoreboard behavior, and event support.", "QA signoff focuses on player-count testing, export readiness, and final delivery checks."]
    },
    meta: [
      { label: "Delivery target", value: "DAIGON review" },
      { label: "Export platform", value: "Minecraft Education Edition" },
      { label: "Review mode", value: "Build, development, and QA signoff" }
    ],
    sections: [
      {
        id: "build-team-checklist",
        heading: "Build team checklist",
        body: [
          "The build signoff should confirm that the ruined town arena, Spawn Hub, branded centerpiece objects, and environmental identity are complete and readable."
        ],
        list: [
          "Ancient ruined town build is complete across all required zones.",
          "Spawn Hub includes leaderboard wall, ready wall, rules board, exit gate, and the required DAIGON presentation.",
          "Dark Crystal pedestal is complete, glowing, and fully branded.",
          "Town Square, Street Network, buildings, rooftops, and alleys all match the intended route structure.",
          "All DAIGON branding elements from the branding page are present and readable."
        ]
      },
      {
        id: "development-team-checklist",
        heading: "Development team checklist",
        body: [
          "The development signoff should confirm that the round loop, state transitions, and scoring systems are complete and stable in multiplayer conditions."
        ],
        list: [
          "Ready system, player NPC flow, gate release, and teacher override work correctly.",
          "Bearer selection, Crystal Blade grant, Speed II, particle aura, and BEARER tag work correctly.",
          "Conversion on hit, gear swap, flash effect, and boom sound work correctly.",
          "Survivor gold glow, Last Two alert, Last Survivor logic, and auto-reset work correctly.",
          "Round timer, escalating music, streak shoutout, and Bearer conversion counter work correctly.",
          "Spectator mode and session-end victory fireworks work correctly.",
          "All scoreboard objectives and event triggers from the data capture page are implemented and firing."
        ]
      },
      {
        id: "qa-and-delivery-checklist",
        heading: "QA and delivery checklist",
        body: [
          "QA signoff should confirm the map behaves consistently across supported player counts and is ready for formal review and export."
        ],
        list: [
          "Test the map with 8, 12, and 16 player counts.",
          "Confirm no softlock, unreadable route, or broken reset remains in repeated sessions.",
          "Validate scoreboard updates, event firing, and final session scoring.",
          "Confirm the map exports and remains fully playable in Minecraft Education Edition.",
          "Package the map for DAIGON review only after the build and development checklists are complete."
        ],
        callout: {
          title: "Delivery contact",
          text: "Questions? Contact DAIGON Operations - younesalakhir@daigon.gg"
        }
      }
    ]
  },
  id: {
    navTitle: "Checklist Final",
    eyebrow: "Delivery",
    title: "Checklist Produksi Final",
    lead: "Checklist ini mengubah kebutuhan delivery dari sumber menjadi halaman signoff yang siap diimplementasikan untuk build, development, QA, dan final export review.",
    summary: {
      title: "Struktur signoff delivery",
      body: "Halaman ini mengelompokkan checklist asli ke jalur signoff yang praktis agar MIVUBI dapat memastikan map selesai dibangun, berfungsi, dan siap untuk review DAIGON.",
      points: ["Signoff build berfokus pada konstruksi arena, dekorasi, dan world objects yang diberi branding.", "Signoff development berfokus pada round systems, conversion logic, scoreboard behavior, dan event support.", "Signoff QA berfokus pada pengujian jumlah pemain, export readiness, dan pemeriksaan final sebelum delivery."]
    },
    meta: [
      { label: "Target delivery", value: "DAIGON review" },
      { label: "Platform export", value: "Minecraft Education Edition" },
      { label: "Mode review", value: "Build, development, and QA signoff" }
    ],
    sections: [
      {
        id: "build-team-checklist",
        heading: "Checklist tim build",
        body: [
          "Signoff build harus memastikan bahwa arena kota reruntuhan, Spawn Hub, objek centerpiece ber-brand, dan identitas lingkungan sudah lengkap dan mudah dibaca."
        ],
        list: [
          "Build kota reruntuhan kuno sudah lengkap di semua zona yang dibutuhkan.",
          "Spawn Hub mencakup leaderboard wall, ready wall, rules board, exit gate, dan presentasi DAIGON yang diwajibkan.",
          "Dark Crystal pedestal selesai, glowing, dan sepenuhnya diberi branding.",
          "Town Square, Street Network, buildings, rooftops, dan alleys semuanya sesuai struktur rute yang dimaksud.",
          "Semua elemen branding DAIGON dari halaman branding sudah hadir dan terbaca."
        ]
      },
      {
        id: "development-team-checklist",
        heading: "Checklist tim development",
        body: [
          "Signoff development harus memastikan bahwa round loop, state transitions, dan scoring systems selesai dan stabil dalam kondisi multiplayer."
        ],
        list: [
          "Ready system, player NPC flow, gate release, dan teacher override bekerja dengan benar.",
          "Bearer selection, pemberian Crystal Blade, Speed II, particle aura, dan BEARER tag bekerja dengan benar.",
          "Conversion on hit, gear swap, flash effect, dan boom sound bekerja dengan benar.",
          "Survivor gold glow, Last Two alert, Last Survivor logic, dan auto-reset bekerja dengan benar.",
          "Round timer, escalating music, streak shoutout, dan Bearer conversion counter bekerja dengan benar.",
          "Spectator mode dan session-end victory fireworks bekerja dengan benar.",
          "Semua scoreboard objectives dan event triggers dari halaman data capture sudah diimplementasikan dan menembak dengan benar."
        ]
      },
      {
        id: "qa-and-delivery-checklist",
        heading: "Checklist QA dan delivery",
        body: [
          "Signoff QA harus memastikan map berperilaku konsisten di seluruh jumlah pemain yang didukung dan siap untuk review formal serta export."
        ],
        list: [
          "Uji map pada jumlah pemain 8, 12, dan 16.",
          "Pastikan tidak ada softlock, rute yang sulit dibaca, atau reset yang rusak pada sesi berulang.",
          "Validasi scoreboard updates, event firing, dan final session scoring.",
          "Pastikan map dapat diekspor dan tetap sepenuhnya playable di Minecraft Education Edition.",
          "Kemasi map untuk review DAIGON hanya setelah checklist build dan development selesai."
        ],
        callout: {
          title: "Kontak delivery",
          text: "Pertanyaan? Hubungi DAIGON Operations - younesalakhir@daigon.gg"
        }
      }
    ]
  }
});

window.DOC_DATA.pages = [
  "project-overview",
  "spawn-hub",
  "central-arena",
  "vertical-play-zones",
  "gameplay-systems",
  "player-flow",
  "branding",
  "command-block-logic",
  "data-capture",
  "final-production-checklist"
].map((slug) => window.DOC_DATA.pages.find((page) => page.slug === slug)).filter(Boolean);

window.DOC_DATA.pages.push({
  slug: "command-block-logic",
  en: {
    navTitle: "Command Logic",
    eyebrow: "Implementation",
    title: "Command Block Implementation",
    lead: "The command block layer is the map's operational backbone. It must control role assignment, conversion, scoring, timing, reset, music escalation, and spectator routing with predictable multiplayer behavior.",
    summary: {
      title: "Implementation-critical command systems",
      body: "This page organizes the source command block brief into production-facing groups so the logic can be built, tested, and validated in manageable slices.",
      points: ["Round control systems govern readiness, role assignment, timing, and final-survivor detection.", "Conversion and score systems need reliable tagging, counting, and player feedback.", "Reset, music, fireworks, and spectator tools must finish each round cleanly without leaving bad state behind."]
    },
    meta: [
      { label: "Implementation mode", value: "Command block baseline" },
      { label: "Validation owner", value: "DAIGON test session" },
      { label: "Runtime priority", value: "Reliable multiplayer state" }
    ],
    sections: [
      {
        id: "round-control-systems",
        heading: "Round control systems",
        body: [
          "These mechanics determine whether the round starts cleanly, whether roles are assigned correctly, and whether the map recognizes end states at the right moment. They are foundational and should be treated as high-risk systems for testing."
        ],
        table: {
          columns: ["Mechanic", "Implementation"],
          rows: [
            ["Ready System", "Ready NPC applies the ready tag, repeating logic checks all active players, the ready wall updates, and the gate opens automatically when everyone is ready or the teacher override is used."],
            ["Bearer Selection", "Round-start sequence randomly selects one active player, applies bearer tag, gives the Crystal Blade, and applies Speed II while all others receive survivor tag."],
            ["Bearer Particle Aura", "Repeating logic fires purple particles on all bearer-tagged players every tick, with intensity increasing as bearer count rises."],
            ["Survivor Glow", "Survivor-tagged players receive the glow effect at round start and lose it on conversion."],
            ["Last Survivor Detection", "Repeating logic counts survivor-tagged players, announces FINAL TWO at count 2, and triggers the win chain at count 1."],
            ["Round Timer", "Sidebar countdown runs between 3 and 5 minutes and evaluates win or draw rules at expiry."]
          ]
        }
      },
      {
        id: "conversion-and-score-systems",
        heading: "Conversion and score systems",
        body: [
          "Conversion, streak, and scoring systems create the visible game outcome and the session-level sense of progression. They also provide the data surface required for later platform integration."
        ],
        table: {
          columns: ["Mechanic", "Implementation"],
          rows: [
            ["Conversion on Hit", "When a bearer-tagged player damages a survivor-tagged player, survivor state is removed, bearer state is applied, gear is swapped, effects update, and feedback cues fire."],
            ["Conversion Flash", "Converted player receives a flash-style title cue and a boom sound is played around the conversion site."],
            ["Survival Streak", "Player streak scoreboard increments on round wins, resets on non-win rounds, and announces UNTOUCHABLE at streak 3."],
            ["Bearer Conversion Count", "Per-player conversion count increments whenever that Bearer converts a Survivor and resets at round start."],
            ["Leaderboard Wall", "Scoreboard objectives such as rounds_won and streak are mirrored from sidebar logic onto the wall display on round-end updates."]
          ]
        }
      },
      {
        id: "reset-audio-and-spectator",
        heading: "Reset, audio, and spectator systems",
        body: [
          "These systems close the round, preserve theatrical pacing, and keep converted players engaged. They must be stable across repeated rounds so the session does not accumulate broken state."
        ],
        table: {
          columns: ["Mechanic", "Implementation"],
          rows: [
            ["Auto-Reset", "Round end triggers a 10-second countdown, clears player states, teleports everyone to the hub, removes role tags, resets round scoreboards, and clears ready state."],
            ["Escalating Music", "Survivor count thresholds at 6, 4, and 2 trigger increasingly tense tracks from the resource pack."],
            ["Spectator Mode", "Converted player receives a compass that moves them to spectator mode and teleports them to an overhead camera point."],
            ["Victory Firework Show", "Session end triggers a staggered 10-second fireworks and sound sequence from the Crystal pedestal."]
          ]
        },
        callout: {
          title: "Specification gap",
          text: "Exact resource pack filenames and exact camera coordinates are not specified in the source brief. Those values should be locked during implementation and QA so repeated resets remain deterministic."
        }
      }
    ]
  },
  id: {
    navTitle: "Command Logic",
    eyebrow: "Implementasi",
    title: "Implementasi Command Block",
    lead: "Lapisan command block adalah tulang punggung operasional map. Lapisan ini harus mengontrol role assignment, conversion, scoring, timing, reset, music escalation, dan spectator routing dengan perilaku multiplayer yang dapat diprediksi.",
    summary: {
      title: "Sistem command yang kritis untuk implementasi",
      body: "Halaman ini mengelompokkan brief command block sumber ke dalam kelompok yang berorientasi produksi agar logic dapat dibangun, diuji, dan divalidasi dalam potongan yang lebih mudah dikelola.",
      points: ["Round control systems mengatur readiness, role assignment, timing, dan final-survivor detection.", "Conversion dan score systems membutuhkan tagging, counting, dan feedback pemain yang andal.", "Reset, music, fireworks, dan spectator tools harus menutup setiap round dengan bersih tanpa meninggalkan bad state."]
    },
    meta: [
      { label: "Mode implementasi", value: "Command block baseline" },
      { label: "Pemilik validasi", value: "DAIGON test session" },
      { label: "Prioritas runtime", value: "Reliable multiplayer state" }
    ],
    sections: [
      {
        id: "round-control-systems",
        heading: "Round control systems",
        body: [
          "Mekanik ini menentukan apakah round dimulai dengan bersih, apakah role ditetapkan dengan benar, dan apakah map mengenali end state pada saat yang tepat. Mekanik ini bersifat fondasional dan harus diperlakukan sebagai sistem berisiko tinggi dalam pengujian."
        ],
        table: {
          columns: ["Mechanic", "Implementation"],
          rows: [
            ["Ready System", "Ready NPC menerapkan ready tag, repeating logic memeriksa semua pemain aktif, ready wall diperbarui, dan gate terbuka otomatis saat semua ready atau teacher override digunakan."],
            ["Bearer Selection", "Urutan awal round memilih satu pemain aktif secara acak, menerapkan bearer tag, memberikan Crystal Blade, dan menerapkan Speed II sementara semua pemain lain menerima survivor tag."],
            ["Bearer Particle Aura", "Repeating logic memicu purple particles pada semua pemain bertag bearer setiap tick, dengan intensitas meningkat saat jumlah bearer bertambah."],
            ["Survivor Glow", "Pemain bertag survivor menerima glow effect saat round dimulai dan kehilangan efek itu saat conversion."],
            ["Last Survivor Detection", "Repeating logic menghitung pemain bertag survivor, mengumumkan FINAL TWO pada jumlah 2, dan memicu rangkaian kemenangan pada jumlah 1."],
            ["Round Timer", "Sidebar countdown berjalan antara 3 dan 5 menit dan mengevaluasi aturan win atau draw saat expiry."]
          ]
        }
      },
      {
        id: "conversion-and-score-systems",
        heading: "Conversion dan score systems",
        body: [
          "Sistem conversion, streak, dan scoring menciptakan hasil permainan yang terlihat dan rasa progression pada tingkat sesi. Sistem ini juga menyediakan permukaan data yang diperlukan untuk integrasi platform di tahap berikutnya."
        ],
        table: {
          columns: ["Mechanic", "Implementation"],
          rows: [
            ["Conversion on Hit", "Saat pemain bertag bearer merusak pemain bertag survivor, state survivor dihapus, state bearer diterapkan, gear ditukar, effects diperbarui, dan feedback cues dipicu."],
            ["Conversion Flash", "Pemain yang terkonversi menerima flash-style title cue dan boom sound diputar di sekitar lokasi conversion."],
            ["Survival Streak", "Player streak scoreboard bertambah pada round wins, di-reset pada round tanpa kemenangan, dan mengumumkan UNTOUCHABLE pada streak 3."],
            ["Bearer Conversion Count", "Jumlah conversion per pemain bertambah setiap kali Bearer tersebut mengonversi Survivor dan di-reset pada awal round."],
            ["Leaderboard Wall", "Scoreboard objectives seperti rounds_won dan streak dicerminkan dari sidebar logic ke wall display pada update akhir round."]
          ]
        }
      },
      {
        id: "reset-audio-and-spectator",
        heading: "Reset, audio, dan spectator systems",
        body: [
          "Sistem ini menutup round, menjaga pacing teatrikal, dan membuat pemain yang terkonversi tetap terlibat. Sistem ini harus stabil di round berulang agar sesi tidak menumpuk broken state."
        ],
        table: {
          columns: ["Mechanic", "Implementation"],
          rows: [
            ["Auto-Reset", "Akhir round memicu countdown 10 detik, membersihkan state pemain, memindahkan semua orang ke hub, menghapus role tags, me-reset round scoreboards, dan membersihkan ready state."],
            ["Escalating Music", "Ambang survivor count pada 6, 4, dan 2 memicu track yang semakin tegang dari resource pack."],
            ["Spectator Mode", "Pemain yang terkonversi menerima compass yang memindahkannya ke spectator mode dan men-teleport ke overhead camera point."],
            ["Victory Firework Show", "Akhir sesi memicu rangkaian fireworks dan sound selama 10 detik dari Crystal pedestal."]
          ]
        },
        callout: {
          title: "Kesenjangan spesifikasi",
          text: "Nama file resource pack yang tepat dan koordinat camera yang tepat tidak ditentukan di brief sumber. Nilai-nilai itu harus dikunci saat implementasi dan QA agar reset berulang tetap deterministik."
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "data-capture",
  en: {
    navTitle: "Data Capture",
    eyebrow: "Platform handoff",
    title: "Data Capture and Event Contract",
    lead: "Dark Crystal must expose a reliable scoreboard and event surface so DAIGON can connect student and club profile reporting after map delivery.",
    summary: {
      title: "Scoreboard data and trigger contract",
      body: "This page preserves the player metrics, club metrics, and event triggers that MIVUBI must implement so DAIGON can collect downstream platform data safely.",
      points: ["Player-level data tracks survival, role assignment, conversions, and tactical activity across the session.", "Club-level data aggregates attendance, engagement, and comparative performance across sessions.", "Event triggers must fire with consistent identifiers and timing so the server pipeline can ingest them later."]
    },
    meta: [
      { label: "Integration mode", value: "Server pipeline handoff" },
      { label: "Required output", value: "Scoreboard objectives and event triggers" },
      { label: "Post-delivery owner", value: "DAIGON platform team" }
    ],
    sections: [
      {
        id: "player-level-data",
        heading: "Player-level data",
        body: [
          "Player-level data is captured per player, per session, and is intended to populate the DAIGON student profile. MIVUBI does not need to implement the external profile system, but it must ensure the relevant objectives and event triggers are present and reliable."
        ],
        table: {
          columns: ["Data point", "How captured", "Platform use"],
          rows: [
            ["Player ID", "Player join event", "Identifies the student across sessions and maps"],
            ["Session ID", "Generated at session start", "Links all events in one session record"],
            ["School ID", "World tag set at session start", "Assigns data to the correct club and school"],
            ["Map ID", "Static world tag dark_crystal", "Identifies the source map"],
            ["Rounds played", "Increment per ROUND_END", "Measures total participation"],
            ["Rounds won", "Increment on ROUND_WIN", "Primary performance metric"],
            ["Times as Bearer", "Increment on BEARER_ASSIGNED", "Shows Bearer selection frequency"],
            ["Total conversions made", "Increment on PLAYER_CONVERTED where bearer is the player", "Measures Bearer output"],
            ["Survival time per round", "Delta from ROUND_START to PLAYER_CONVERTED or ROUND_WIN", "Core survival metric"],
            ["Snowballs used", "Increment on snowball throw", "Tactical tool usage"],
            ["Times converted", "Increment on PLAYER_CONVERTED where player is the target", "Capture frequency metric"],
            ["Session duration", "Delta from SESSION_START to SESSION_END", "Engagement time"]
          ]
        }
      },
      {
        id: "club-level-data",
        heading: "Club-level data",
        body: [
          "Club-level data aggregates the session across all players and feeds the club profile layer on the DAIGON platform. The map should provide the measurable events needed to support this reporting even though the aggregation happens later."
        ],
        table: {
          columns: ["Data point", "How captured", "Platform use"],
          rows: [
            ["Club ID / School ID", "World tag at session start", "Assigns the session to the correct club profile"],
            ["Total sessions played on map", "Count of SESSION_END events per school", "Measures map engagement frequency"],
            ["Club average survival time", "Mean of all player average survival times in session", "Benchmarks club skill"],
            ["Club top survivor", "Highest rounds_won in session", "Drives club leaderboard visibility"],
            ["Club top Bearer", "Highest total_conversions in session", "Tracks Bearer performance"],
            ["Average rounds per session", "Total rounds played divided by sessions count", "Measures session depth"],
            ["Session completion rate", "Completed sessions divided by total sessions", "Measures engagement quality"],
            ["Average players per session", "Player count at SESSION_START averaged", "Tracks attendance scale"]
          ]
        }
      },
      {
        id: "event-trigger-contract",
        heading: "Event trigger contract",
        body: [
          "These events must fire at the correct moment and expose the listed data fields. Their timing consistency matters because DAIGON's pipeline will use them as authoritative signals after delivery."
        ],
        table: {
          columns: ["Event", "Trigger condition", "Data fields"],
          rows: [
            ["SESSION_START", "Player joins the map world", "player_id, session_id, school_id, map_id, timestamp"],
            ["PLAYER_READY", "Player clicks ready NPC", "player_id, session_id, timestamp"],
            ["ROUND_START", "Gate opens and round begins", "session_id, round_number, bearer_id, survivor_count, timestamp"],
            ["BEARER_ASSIGNED", "Player selected as Crystal Bearer", "player_id, session_id, round_number, timestamp"],
            ["PLAYER_CONVERTED", "Survivor is hit and converted", "player_id, converted_by_id, time_survived_seconds, round_number, session_id"],
            ["SNOWBALL_USED", "Survivor throws a snowball", "player_id, round_number, session_id, timestamp"],
            ["CONVERSION_MADE", "Bearer converts a Survivor", "bearer_id, target_id, bearer_conversion_count_this_round, session_id"],
            ["FINAL_TWO", "Survivor count reaches 2", "survivor_ids, round_number, session_id, timestamp"],
            ["ROUND_WIN", "Last Survivor is identified", "player_id, session_id, round_number, survival_time_seconds, timestamp"],
            ["ROUND_DRAW", "Timer expires with multiple Survivors", "session_id, round_number, surviving_player_ids, timestamp"],
            ["ROUND_END", "Round concludes and reset begins", "session_id, round_number, outcome, round_duration_seconds, total_conversions"],
            ["STREAK_MILESTONE", "Player reaches 3 consecutive wins", "player_id, streak_count, session_id, timestamp"],
            ["SESSION_END", "All rounds complete", "session_id, school_id, player_ids, rounds_played, timestamp"]
          ]
        }
      }
    ]
  },
  id: {
    navTitle: "Data Capture",
    eyebrow: "Platform handoff",
    title: "Data Capture dan Event Contract",
    lead: "Dark Crystal harus mengekspos scoreboard dan event surface yang andal agar DAIGON dapat menghubungkan pelaporan student dan club profile setelah map dikirim.",
    summary: {
      title: "Kontrak scoreboard data dan trigger",
      body: "Halaman ini mempertahankan player metrics, club metrics, dan event triggers yang harus diimplementasikan MIVUBI agar DAIGON dapat mengumpulkan data platform lanjutan dengan aman.",
      points: ["Data tingkat pemain melacak survival, role assignment, conversions, dan aktivitas taktis sepanjang sesi.", "Data tingkat klub menggabungkan attendance, engagement, dan performa komparatif antar sesi.", "Event triggers harus menembak dengan identifier dan timing yang konsisten agar server pipeline dapat mengingest-nya nanti."]
    },
    meta: [
      { label: "Mode integrasi", value: "Server pipeline handoff" },
      { label: "Output yang dibutuhkan", value: "Scoreboard objectives and event triggers" },
      { label: "Pemilik setelah delivery", value: "DAIGON platform team" }
    ],
    sections: [
      {
        id: "player-level-data",
        heading: "Data tingkat pemain",
        body: [
          "Data tingkat pemain ditangkap per pemain, per sesi, dan dimaksudkan untuk mengisi DAIGON student profile. MIVUBI tidak perlu mengimplementasikan sistem profile eksternal, tetapi harus memastikan objectives dan event triggers terkait tersedia dan andal."
        ],
        table: {
          columns: ["Data point", "How captured", "Platform use"],
          rows: [
            ["Player ID", "Player join event", "Mengidentifikasi siswa di seluruh sesi dan map"],
            ["Session ID", "Dibuat saat sesi dimulai", "Menghubungkan semua event dalam satu record sesi"],
            ["School ID", "World tag yang diatur saat sesi dimulai", "Menetapkan data ke club dan school yang benar"],
            ["Map ID", "Static world tag dark_crystal", "Mengidentifikasi map sumber"],
            ["Rounds played", "Bertambah per ROUND_END", "Mengukur total partisipasi"],
            ["Rounds won", "Bertambah pada ROUND_WIN", "Metrik performa utama"],
            ["Times as Bearer", "Bertambah pada BEARER_ASSIGNED", "Menunjukkan frekuensi pemilihan Bearer"],
            ["Total conversions made", "Bertambah pada PLAYER_CONVERTED saat bearer adalah pemain tersebut", "Mengukur output Bearer"],
            ["Survival time per round", "Selisih dari ROUND_START ke PLAYER_CONVERTED atau ROUND_WIN", "Metrik survival inti"],
            ["Snowballs used", "Bertambah saat snowball dilempar", "Penggunaan tactical tool"],
            ["Times converted", "Bertambah pada PLAYER_CONVERTED saat pemain menjadi target", "Metrik frekuensi tertangkap"],
            ["Session duration", "Selisih dari SESSION_START ke SESSION_END", "Waktu engagement"]
          ]
        }
      },
      {
        id: "club-level-data",
        heading: "Data tingkat klub",
        body: [
          "Data tingkat klub menggabungkan sesi di seluruh pemain dan memberi makan lapisan club profile pada platform DAIGON. Map harus menyediakan event terukur yang dibutuhkan untuk mendukung pelaporan ini walaupun agregasinya terjadi belakangan."
        ],
        table: {
          columns: ["Data point", "How captured", "Platform use"],
          rows: [
            ["Club ID / School ID", "World tag saat sesi dimulai", "Menetapkan sesi ke club profile yang benar"],
            ["Total sessions played on map", "Jumlah SESSION_END events per school", "Mengukur frekuensi engagement dengan map"],
            ["Club average survival time", "Rata-rata semua average survival time pemain di sesi", "Menjadi tolok ukur skill klub"],
            ["Club top survivor", "Rounds_won tertinggi di sesi", "Mendorong visibilitas club leaderboard"],
            ["Club top Bearer", "Total_conversions tertinggi di sesi", "Melacak performa Bearer"],
            ["Average rounds per session", "Total rounds played dibagi jumlah sesi", "Mengukur kedalaman sesi"],
            ["Session completion rate", "Sesi selesai dibagi total sesi", "Mengukur kualitas engagement"],
            ["Average players per session", "Rata-rata player count pada SESSION_START", "Melacak skala kehadiran"]
          ]
        }
      },
      {
        id: "event-trigger-contract",
        heading: "Event trigger contract",
        body: [
          "Event-event ini harus menembak pada momen yang benar dan mengekspos data fields yang tercantum. Konsistensi timing-nya penting karena pipeline DAIGON akan menggunakannya sebagai sinyal otoritatif setelah delivery."
        ],
        table: {
          columns: ["Event", "Trigger condition", "Data fields"],
          rows: [
            ["SESSION_START", "Pemain bergabung ke map world", "player_id, session_id, school_id, map_id, timestamp"],
            ["PLAYER_READY", "Pemain mengklik ready NPC", "player_id, session_id, timestamp"],
            ["ROUND_START", "Gate terbuka dan round dimulai", "session_id, round_number, bearer_id, survivor_count, timestamp"],
            ["BEARER_ASSIGNED", "Pemain dipilih menjadi Crystal Bearer", "player_id, session_id, round_number, timestamp"],
            ["PLAYER_CONVERTED", "Survivor terkena dan terkonversi", "player_id, converted_by_id, time_survived_seconds, round_number, session_id"],
            ["SNOWBALL_USED", "Survivor melempar snowball", "player_id, round_number, session_id, timestamp"],
            ["CONVERSION_MADE", "Bearer mengonversi Survivor", "bearer_id, target_id, bearer_conversion_count_this_round, session_id"],
            ["FINAL_TWO", "Jumlah Survivor mencapai 2", "survivor_ids, round_number, session_id, timestamp"],
            ["ROUND_WIN", "Survivor terakhir teridentifikasi", "player_id, session_id, round_number, survival_time_seconds, timestamp"],
            ["ROUND_DRAW", "Timer habis dengan beberapa Survivors", "session_id, round_number, surviving_player_ids, timestamp"],
            ["ROUND_END", "Round selesai dan reset dimulai", "session_id, round_number, outcome, round_duration_seconds, total_conversions"],
            ["STREAK_MILESTONE", "Pemain mencapai 3 kemenangan berturut-turut", "player_id, streak_count, session_id, timestamp"],
            ["SESSION_END", "Semua round selesai", "session_id, school_id, player_ids, rounds_played, timestamp"]
          ]
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "player-flow",
  en: {
    navTitle: "Player Flow",
    eyebrow: "Session design",
    title: "Round Flow and Engagement Features",
    lead: "Dark Crystal depends on a clear, repeatable round structure that students can learn quickly and a set of theatrical signals that make each conversion, chase climax, and session victory feel memorable.",
    summary: {
      title: "Session rhythm and audience moments",
      body: "This page documents the full round sequence and the engagement features that turn the base chase loop into a spectator-friendly classroom event.",
      points: ["The round sequence must stay easy to follow from ready-up to auto-reset.", "Each phase needs visible state changes so players and teachers understand what is happening.", "Engagement systems amplify visibility, drama, and memory without changing the core win condition."]
    },
    meta: [
      { label: "Flow type", value: "Repeatable round loop" },
      { label: "Round transition", value: "Automatic" },
      { label: "Session finale", value: "Most rounds survived" }
    ],
    sections: [
      {
        id: "session-sequence",
        heading: "Session sequence",
        body: [
          "The full session should read as a loop of staging, release, chase, conversion, resolution, and reset. This sequence needs to be visible enough that students understand the rhythm after one round and teachers can supervise without manual intervention.",
          "The source brief defines the sequence as Spawn Hub to ready-up to Bearer selection to gate release to conversions to last-Survivor resolution to auto-reset and the next round."
        ],
        list: [
          "Spawn Hub",
          "Players ready up",
          "Bearer selected",
          "Gate opens",
          "Survivors scatter",
          "Conversions happen",
          "Last Survivor wins",
          "Auto-reset begins",
          "Next round starts"
        ]
      },
      {
        id: "phase-by-phase-flow",
        heading: "Phase-by-phase flow",
        body: [
          "Each phase needs a clear duration or trigger, an obvious player-facing message, and a clean handoff to the next state. The round should never feel ambiguous about whether players are waiting, chasing, resolving, or resetting."
        ],
        table: {
          columns: ["Phase", "Duration", "What happens"],
          rows: [
            ["Spawn Hub", "Until all ready", "Players gather, review leaderboard, click ready NPC, and wait for gate release or teacher override."],
            ["Bearer Selection", "Instant", "One player is selected, receives the Bearer role package, and the role announcement fires."],
            ["Countdown", "5 seconds", "Animated title countdown leads to gate opening and bell sound."],
            ["Combat", "3 to 5 minutes", "Bearers hunt Survivors and conversion count is tracked."],
            ["Last Survivor", "Instant", "Final survivor is announced, fireworks launch, and scoring updates."],
            ["Auto-Reset", "10 seconds", "Players are cleared, teleported, reset, and prepared for the next round."],
            ["Session End", "After final round", "Overall winner is announced and the final firework show plays."]
          ]
        }
      },
      {
        id: "engagement-features",
        heading: "Engagement features",
        body: [
          "The source brief intentionally adds high-visibility spectacle systems so the experience remains entertaining even for converted players and students waiting for the round result. These features should be treated as part of the core product identity, not optional polish."
        ],
        table: {
          columns: ["Feature", "How it works", "Why it matters"],
          rows: [
            ["Corruption Aura", "Purple particles pulse from every Bearer and intensify as Bearer count rises.", "Makes corruption visible and dramatic across the map."],
            ["Conversion Flash", "Converted player receives a flash while a boom sound is heard widely.", "Turns each conversion into a shared event."],
            ["Last Two Alert", "Map-wide title announces the final two Survivors.", "Creates a theatrical late-round climax."],
            ["Bearer Conversion Count", "Sidebar tracks per-round conversions for Bearers.", "Adds personal performance goals to the role."],
            ["Survival Streak Shoutout", "A 3-round streak triggers a map-wide title shoutout.", "Builds long-session narrative and rivalry."],
            ["Spectator Mode", "Converted players can teleport to an overhead view with a compass.", "Keeps converted students engaged."],
            ["Victory Firework Show", "Session winner triggers a 10-second firework sequence.", "Makes final victory memorable and shareable."]
          ]
        }
      }
    ]
  },
  id: {
    navTitle: "Player Flow",
    eyebrow: "Desain sesi",
    title: "Round Flow dan Engagement Features",
    lead: "Dark Crystal bergantung pada struktur round yang jelas dan berulang sehingga siswa dapat mempelajarinya dengan cepat, serta kumpulan sinyal teatrikal yang membuat setiap conversion, puncak pengejaran, dan kemenangan sesi terasa berkesan.",
    summary: {
      title: "Ritme sesi dan momen untuk audiens",
      body: "Halaman ini mendokumentasikan urutan round penuh dan engagement features yang mengubah chase loop dasar menjadi event kelas yang ramah penonton.",
      points: ["Urutan round harus tetap mudah diikuti dari ready-up sampai auto-reset.", "Setiap fase membutuhkan perubahan state yang terlihat agar pemain dan teacher memahami apa yang sedang terjadi.", "Sistem engagement memperkuat visibilitas, drama, dan daya ingat tanpa mengubah win condition inti."]
    },
    meta: [
      { label: "Tipe flow", value: "Repeatable round loop" },
      { label: "Transisi round", value: "Automatic" },
      { label: "Finale sesi", value: "Most rounds survived" }
    ],
    sections: [
      {
        id: "session-sequence",
        heading: "Urutan sesi",
        body: [
          "Seluruh sesi harus terbaca sebagai loop staging, release, chase, conversion, resolution, dan reset. Urutan ini perlu cukup terlihat sehingga siswa memahami ritmenya setelah satu round dan teacher dapat mengawasi tanpa intervensi manual.",
          "Brief sumber mendefinisikan urutan tersebut sebagai Spawn Hub ke ready-up ke Bearer selection ke gate release ke conversions ke resolusi last-Survivor ke auto-reset dan round berikutnya."
        ],
        list: [
          "Spawn Hub",
          "Players ready up",
          "Bearer selected",
          "Gate opens",
          "Survivors scatter",
          "Conversions happen",
          "Last Survivor wins",
          "Auto-reset begins",
          "Next round starts"
        ]
      },
      {
        id: "phase-by-phase-flow",
        heading: "Flow per fase",
        body: [
          "Setiap fase memerlukan durasi atau trigger yang jelas, player-facing message yang mudah dikenali, dan handoff yang bersih ke state berikutnya. Round tidak boleh terasa ambigu apakah pemain sedang menunggu, mengejar, menyelesaikan, atau di-reset."
        ],
        table: {
          columns: ["Fase", "Durasi", "Apa yang terjadi"],
          rows: [
            ["Spawn Hub", "Sampai semua ready", "Pemain berkumpul, melihat leaderboard, mengklik ready NPC, dan menunggu gate release atau teacher override."],
            ["Bearer Selection", "Instan", "Satu pemain dipilih, menerima paket role Bearer, dan role announcement dipicu."],
            ["Countdown", "5 detik", "Animated title countdown menuju gate opening dan bell sound."],
            ["Combat", "3 sampai 5 menit", "Bearers memburu Survivors dan conversion count dilacak."],
            ["Last Survivor", "Instan", "Survivor terakhir diumumkan, fireworks diluncurkan, dan scoring diperbarui."],
            ["Auto-Reset", "10 detik", "Pemain dibersihkan, diteleportasi, di-reset, dan disiapkan untuk round berikutnya."],
            ["Session End", "Setelah round terakhir", "Pemenang keseluruhan diumumkan dan firework show final dimainkan."]
          ]
        }
      },
      {
        id: "engagement-features",
        heading: "Fitur engagement",
        body: [
          "Brief sumber dengan sengaja menambahkan sistem spectacle dengan visibilitas tinggi agar pengalaman tetap menghibur bahkan bagi pemain yang sudah terkonversi dan siswa yang menunggu hasil round. Fitur-fitur ini harus diperlakukan sebagai bagian dari identitas produk inti, bukan polish opsional."
        ],
        table: {
          columns: ["Fitur", "Cara kerja", "Mengapa penting"],
          rows: [
            ["Corruption Aura", "Purple particles berdenyut dari setiap Bearer dan meningkat saat jumlah Bearer bertambah.", "Membuat corruption terlihat dan dramatis di seluruh map."],
            ["Conversion Flash", "Pemain yang terkonversi menerima flash sementara boom sound terdengar luas.", "Mengubah setiap conversion menjadi peristiwa bersama."],
            ["Last Two Alert", "Title map-wide mengumumkan dua Survivor terakhir.", "Menciptakan klimaks akhir round yang teatrikal."],
            ["Bearer Conversion Count", "Sidebar melacak conversion per round untuk Bearers.", "Menambah target performa personal pada role tersebut."],
            ["Survival Streak Shoutout", "Streak 3 round memicu title shoutout map-wide.", "Membangun narasi sesi panjang dan rivalitas."],
            ["Spectator Mode", "Pemain yang terkonversi dapat teleport ke overhead view dengan compass.", "Menjaga siswa yang terkonversi tetap terlibat."],
            ["Victory Firework Show", "Pemenang sesi memicu rangkaian fireworks selama 10 detik.", "Membuat kemenangan akhir mudah diingat dan dibagikan."]
          ]
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "branding",
  en: {
    navTitle: "Branding",
    eyebrow: "Client requirements",
    title: "DAIGON Branding Requirements",
    lead: "Branding is a delivery requirement, not a decorative suggestion. The map must feel like an official DAIGON Esports product from first load to session end.",
    summary: {
      title: "Brand placement and readability",
      body: "This page preserves the non-negotiable DAIGON branding spec so the environment, sightlines, and key surfaces all reinforce the client identity.",
      points: ["Branding must appear in all major zones, especially the Spawn Hub and Town Square.", "The most prominent placements must remain readable from the intended player viewpoints.", "Brand elements should feel premium and deliberate rather than pasted onto finished spaces."]
    },
    meta: [
      { label: "Brand owner", value: "DAIGON ESPORTS" },
      { label: "Requirement level", value: "Non-negotiable" },
      { label: "Primary colors", value: "Navy, purple, white" }
    ],
    sections: [
      {
        id: "brand-intent",
        heading: "Brand intent",
        body: [
          "The source brief is explicit that students should immediately recognize the map as a DAIGON Esports arena. Branding therefore needs to be integrated into the architecture, floor treatments, banners, and hero objects rather than applied as an afterthought.",
          "The visual goal is premium, theatrical, and consistent. Brand placements should support orientation and memory while reinforcing the event-like atmosphere of the map."
        ]
      },
      {
        id: "brand-placement-spec",
        heading: "Brand placement specification",
        body: [
          "All placements below are part of the delivery spec and should be treated as required unless the client revises the brief."
        ],
        table: {
          columns: ["Location", "Element", "Specification"],
          rows: [
            ["Spawn Hub above leaderboard", "DAIGON ESPORTS pixel-art logo", "20 x 8 block banner mosaic in navy and purple, centered above the wall"],
            ["Spawn Hub entrance arch", "Arena welcome text", "DAIGON ESPORTS ARENA text with purple banners on both sides"],
            ["Spawn Hub floor", "DAIGON shield inlay", "Colored concrete shield visible from player standing height"],
            ["Town Square floor", "DAIGON shield inlay", "Colored concrete emblem visible from rooftops"],
            ["Crystal pedestal", "DAIGON-branded pedestal", "Obsidian and blackstone base with purple glass accents and flanking banners"],
            ["Main streets", "Hanging DAIGON banners", "DAIGON ESPORTS banners every 15 blocks"],
            ["Building rooftops", "DAIGON flag poles", "Small purple and white flags on rooftop corners"],
            ["Spawn Hub ceiling", "Geometric pattern", "Ceiling treatment using DAIGON color palette"]
          ]
        }
      },
      {
        id: "brand-production-risks",
        heading: "Production risks and controls",
        body: [
          "Brand elements should remain readable from the player positions the brief cares about, especially the leaderboard zone, the Town Square, and rooftop views. Decorative density must not bury logos or signage.",
          "Builder requirements: Treat logos, inlays, and banners as core environment landmarks and protect their readability during later decoration passes. Developer requirements: Avoid placing UI prompts, titles, particles, or technical fixtures in ways that obscure major brand surfaces during key moments."
        ],
        list: [
          "Keep the largest logo centered and unobstructed in the Spawn Hub.",
          "Preserve floor emblem readability from elevated viewpoints.",
          "Use consistent DAIGON palette application across banners, signs, and premium surfaces."
        ],
        callout: {
          title: "Branding control",
          text: "The brief calls branding non-negotiable. If any production tradeoff would reduce brand readability, that decision should be escalated before implementation."
        }
      }
    ]
  },
  id: {
    navTitle: "Branding",
    eyebrow: "Kebutuhan klien",
    title: "Kebutuhan Branding DAIGON",
    lead: "Branding adalah persyaratan delivery, bukan saran dekoratif. Map harus terasa seperti produk resmi DAIGON Esports sejak pertama kali dimuat sampai sesi berakhir.",
    summary: {
      title: "Penempatan brand dan keterbacaan",
      body: "Halaman ini mempertahankan spesifikasi branding DAIGON yang tidak bisa dinegosiasikan agar environment, sightline, dan permukaan utama semuanya memperkuat identitas klien.",
      points: ["Branding harus muncul di semua zona utama, terutama Spawn Hub dan Town Square.", "Penempatan paling menonjol harus tetap terbaca dari sudut pandang pemain yang dituju.", "Elemen brand harus terasa premium dan disengaja, bukan ditempelkan setelah ruang selesai dibangun."]
    },
    meta: [
      { label: "Pemilik brand", value: "DAIGON ESPORTS" },
      { label: "Tingkat kebutuhan", value: "Non-negotiable" },
      { label: "Warna utama", value: "Navy, purple, white" }
    ],
    sections: [
      {
        id: "brand-intent",
        heading: "Tujuan branding",
        body: [
          "Brief sumber secara eksplisit menyatakan bahwa siswa harus langsung mengenali map sebagai arena DAIGON Esports. Karena itu, branding perlu diintegrasikan ke arsitektur, floor treatment, banners, dan hero objects, bukan diterapkan sebagai tambahan belakangan.",
          "Tujuan visualnya adalah premium, teatrikal, dan konsisten. Penempatan brand harus mendukung orientasi dan daya ingat sambil memperkuat atmosfer seperti event di dalam map."
        ]
      },
      {
        id: "brand-placement-spec",
        heading: "Spesifikasi penempatan brand",
        body: [
          "Semua penempatan di bawah ini adalah bagian dari delivery spec dan harus diperlakukan sebagai keharusan kecuali klien merevisi brief."
        ],
        table: {
          columns: ["Lokasi", "Elemen", "Spesifikasi"],
          rows: [
            ["Spawn Hub di atas leaderboard", "Logo pixel-art DAIGON ESPORTS", "Mosaik banner 20 x 8 blocks berwarna navy dan purple, di tengah di atas wall"],
            ["Spawn Hub entrance arch", "Arena welcome text", "Teks DAIGON ESPORTS ARENA dengan purple banners di kedua sisi"],
            ["Lantai Spawn Hub", "Inlay shield DAIGON", "Shield dari colored concrete yang terlihat dari tinggi pandang pemain"],
            ["Lantai Town Square", "Inlay shield DAIGON", "Emblem colored concrete yang terlihat dari rooftops"],
            ["Crystal pedestal", "Pedestal ber-brand DAIGON", "Basis obsidian dan blackstone dengan aksen purple glass dan banner di kedua sisi"],
            ["Main streets", "Hanging DAIGON banners", "Banner DAIGON ESPORTS setiap 15 blocks"],
            ["Building rooftops", "DAIGON flag poles", "Bendera kecil purple dan white di sudut rooftop"],
            ["Ceiling Spawn Hub", "Pola geometris", "Perlakuan ceiling dengan palet warna DAIGON"]
          ]
        }
      },
      {
        id: "brand-production-risks",
        heading: "Risiko produksi dan kontrol",
        body: [
          "Elemen brand harus tetap terbaca dari posisi pemain yang dianggap penting oleh brief sumber, terutama zona leaderboard, Town Square, dan pandangan dari rooftop. Kepadatan dekorasi tidak boleh menenggelamkan logo atau signage.",
          "Kebutuhan builder: Perlakukan logo, inlay, dan banner sebagai landmark environment inti dan lindungi keterbacaannya pada decoration pass berikutnya. Kebutuhan developer: Hindari menempatkan UI prompt, titles, particles, atau fixture teknis yang menutupi permukaan brand utama selama momen penting."
        ],
        list: [
          "Jaga logo terbesar tetap terpusat dan tidak terhalang di Spawn Hub.",
          "Pertahankan keterbacaan floor emblem dari viewpoint yang lebih tinggi.",
          "Gunakan aplikasi palet DAIGON yang konsisten pada banners, signs, dan premium surfaces."
        ],
        callout: {
          title: "Kontrol branding",
          text: "Brief menyebut branding sebagai non-negotiable. Jika ada tradeoff produksi yang mengurangi keterbacaan brand, keputusan itu harus dieskalasikan sebelum implementasi."
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "vertical-play-zones",
  en: {
    navTitle: "Vertical Zones",
    eyebrow: "Area breakdown",
    title: "Building District, Rooftops, and Side Alleys",
    lead: "The vertical play layer gives Dark Crystal its evasive depth. Multi-floor buildings, rooftop routes, and narrow alleys create high-risk choices for Survivors and route compression opportunities for Bearers.",
    summary: {
      title: "Vertical movement and escape pressure",
      body: "This page defines the elevated and narrow traversal spaces that turn the map from a flat chase arena into a layered pursuit experience.",
      points: ["Buildings and rooftops provide cover, elevation, and visual drama.", "Side alleys create tense but non-horror escape routes behind the main streets.", "Traversal balance matters because too much safety or too much compression can break round tempo."]
    },
    meta: [
      { label: "Buildings", value: "3 multi-floor buildings" },
      { label: "Rooftops", value: "Connected by rope bridges" },
      { label: "Alleys", value: "Two narrow back routes" }
    ],
    sections: [
      {
        id: "building-rooftop-alley-layout",
        heading: "Layout and visual direction",
        body: [
          "The Building District should offer internal staircases, crystal window accents, and enough floor variation to support short-term hiding without creating permanent safe spots. Rooftops should reward confident movement, while alleys should feel tight and dramatic rather than frightening.",
          "This part of the map is where the adventure tone becomes most visible through vines, ivy, bridges, crystal highlights, and lantern lighting."
        ],
        table: {
          columns: ["Zone", "Description", "Production purpose"],
          rows: [
            ["Building District", "Three 2 to 3 floor buildings with internal stairs", "Cover, elevation play, and route splitting"],
            ["Rooftop Layer", "Connected rooftop paths with rope bridges", "High ground and confident movement reward"],
            ["Side Alleys", "Two narrow alleys with ivy and lanterns", "Tense evasion routes behind the main play space"]
          ]
        }
      },
      {
        id: "vertical-gameplay-simulation",
        heading: "Gameplay simulation",
        body: [
          "A Survivor who escapes into a building gains a brief sightline break and a choice between interior descent, upper-floor hesitation, or rooftop transition. The best version of this area creates meaningful route decisions rather than guaranteed escapes.",
          "Bearers should be able to pressure rooftops from more than one side and collapse alley play if Survivors repeat the same route."
        ],
        steps: [
          "A Survivor enters a building to break immediate visual contact.",
          "The player chooses stairs, windows, or a rooftop transition based on pressure.",
          "Rooftops create dramatic but exposed movement across bridges.",
          "Alleys provide temporary relief but must still reconnect to at least one other route."
        ]
      },
      {
        id: "vertical-build-dev",
        heading: "Builder and developer requirements",
        body: [
          "Builder requirements: Maintain at least two access routes to rooftops, one per side of the Building District, and keep rooftop edges readable so players do not feel tricked by jumps or unclear bridge entries. Preserve clear gameplay space around staircases and alley choke points.",
          "Developer requirements: Support reliable pursuit through stairs, roof transitions, and narrow alleys without pathing confusion. If interactive elements are added in these zones, their reset behavior must be round-safe."
        ],
        list: [
          "Use ivy, banners, and crystal accents for atmosphere without blocking movement.",
          "Keep alley widths within the brief's 1 to 2 block expectation while avoiding softlock geometry.",
          "Reserve headroom and hidden technical space for particles, sounds, and possible entity checks."
        ],
        callout: {
          title: "Risk note",
          text: "The source brief does not specify exact jump distances, ladder use, or bridge safety rails. Final build decisions should avoid movement ambiguity that could make losses feel unfair."
        }
      }
    ]
  },
  id: {
    navTitle: "Zona Vertikal",
    eyebrow: "Rincian area",
    title: "Building District, Rooftops, dan Side Alleys",
    lead: "Lapisan vertical play memberi Dark Crystal kedalaman untuk menghindar. Bangunan bertingkat, rute rooftop, dan alley sempit menciptakan pilihan berisiko tinggi bagi Survivors dan peluang kompresi rute bagi Bearers.",
    summary: {
      title: "Pergerakan vertikal dan tekanan melarikan diri",
      body: "Halaman ini mendefinisikan ruang traversal yang tinggi dan sempit yang mengubah map dari arena kejar datar menjadi pengalaman pursuit yang berlapis.",
      points: ["Buildings dan rooftops memberi cover, elevasi, dan drama visual.", "Side alleys menciptakan rute kabur yang tegang namun bukan horor di belakang main streets.", "Keseimbangan traversal penting karena terlalu banyak keamanan atau terlalu banyak kompresi dapat merusak tempo round."]
    },
    meta: [
      { label: "Bangunan", value: "3 multi-floor buildings" },
      { label: "Rooftops", value: "Terhubung dengan rope bridges" },
      { label: "Alleys", value: "Dua rute belakang yang sempit" }
    ],
    sections: [
      {
        id: "building-rooftop-alley-layout",
        heading: "Layout dan arah visual",
        body: [
          "Building District harus menawarkan internal staircases, crystal window accents, dan variasi lantai yang cukup untuk mendukung persembunyian jangka pendek tanpa menciptakan safe spot permanen. Rooftops harus memberi penghargaan pada gerakan yang percaya diri, sementara alleys harus terasa rapat dan dramatis, bukan menakutkan.",
          "Bagian map ini adalah tempat nada petualangan paling terlihat melalui vines, ivy, bridges, crystal highlights, dan lantern lighting."
        ],
        table: {
          columns: ["Zona", "Deskripsi", "Tujuan produksi"],
          rows: [
            ["Building District", "Tiga bangunan 2 sampai 3 lantai dengan tangga internal", "Cover, elevasi, dan pemisahan rute"],
            ["Rooftop Layer", "Rute rooftop terhubung dengan rope bridges", "High ground dan penghargaan untuk gerakan percaya diri"],
            ["Side Alleys", "Dua alley sempit dengan ivy dan lanterns", "Rute menghindar yang tegang di belakang ruang bermain utama"]
          ]
        }
      },
      {
        id: "vertical-gameplay-simulation",
        heading: "Simulasi gameplay",
        body: [
          "Survivor yang masuk ke bangunan mendapat jeda line of sight singkat dan pilihan antara turun melalui interior, ragu di lantai atas, atau berpindah ke rooftop. Versi terbaik area ini menciptakan keputusan rute yang bermakna, bukan pelarian yang dijamin aman.",
          "Bearers harus bisa menekan rooftops dari lebih dari satu sisi dan menutup alley play jika Survivors mengulangi rute yang sama."
        ],
        steps: [
          "Survivor masuk ke bangunan untuk memutus kontak visual langsung.",
          "Pemain memilih tangga, jendela, atau transisi rooftop berdasarkan tekanan.",
          "Rooftops menciptakan gerakan dramatis namun terekspos di atas bridges.",
          "Alleys memberi jeda sementara tetapi tetap harus tersambung ke setidaknya satu rute lain."
        ]
      },
      {
        id: "vertical-build-dev",
        heading: "Kebutuhan builder dan developer",
        body: [
          "Kebutuhan builder: Pertahankan setidaknya dua access route ke rooftops, satu per sisi Building District, dan buat tepi rooftop tetap mudah dibaca agar pemain tidak merasa tertipu oleh lompatan atau bridge entry yang tidak jelas. Jaga ruang gameplay tetap jelas di sekitar staircases dan alley choke points.",
          "Kebutuhan developer: Dukung pursuit yang andal melalui tangga, transisi roof, dan alleys sempit tanpa kebingungan pathing. Jika ada interactive element yang ditambahkan di zona ini, reset behavior-nya harus aman untuk round."
        ],
        list: [
          "Gunakan ivy, banners, dan crystal accents untuk atmosfer tanpa menghalangi movement.",
          "Jaga lebar alley sesuai ekspektasi brief yaitu 1 sampai 2 blocks sambil menghindari geometri yang menyebabkan softlock.",
          "Sisakan headroom dan ruang teknis tersembunyi untuk particles, sounds, dan kemungkinan entity checks."
        ],
        callout: {
          title: "Catatan risiko",
          text: "Brief sumber tidak menentukan jarak lompatan yang tepat, penggunaan ladder, atau bridge safety rail. Keputusan build final harus menghindari ambiguitas movement yang bisa membuat kekalahan terasa tidak adil."
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "gameplay-systems",
  en: {
    navTitle: "Gameplay Systems",
    eyebrow: "Core design",
    title: "Dark Crystal, Survivors, and Round Outcomes",
    lead: "The gameplay loop depends on a simple asymmetry: the Crystal Bearer is strong, visible, and contagious, while Survivors are mobile, limited, and under growing pressure as each conversion adds another pursuer.",
    summary: {
      title: "Core round rules and balance intent",
      body: "This page translates the source brief into explicit gameplay rules for Bearer powers, Survivor tools, and round-end logic.",
      points: ["The Bearer role must feel powerful and public through speed, weapon identity, and particle presence.", "Survivors are allowed to delay and evade but not to eliminate Bearers.", "Round outcome rules must handle normal wins, timer expiry, and draw states consistently."]
    },
    meta: [
      { label: "Bearer role", value: "Corruption pursuer" },
      { label: "Survivor role", value: "Delay and evade" },
      { label: "Core tension", value: "One role grows stronger with every conversion" }
    ],
    sections: [
      {
        id: "dark-crystal-mechanic",
        heading: "Dark Crystal and Bearer mechanic",
        body: [
          "At round start, one player is randomly selected as the Crystal Bearer. The role must be announced clearly and must immediately change how the whole map reads through audio, title messaging, weapon identity, and an always-visible corruption aura.",
          "The Dark Crystal is not only a visual prop. It is the symbolic origin point of the role and should anchor round-start and victory spectacle throughout the experience."
        ],
        list: [
          "Speed II for the full round",
          "Crystal Blade with Sharpness I and a renamed presentation",
          "Purple particle aura pulsing every tick",
          "Visible BEARER tag above the player's head",
          "Immediate conversion of any Survivor the Bearer hits"
        ]
      },
      {
        id: "survivor-tools-and-balance",
        heading: "Survivor tools and balance rules",
        body: [
          "Survivors are designed to buy time, maintain spacing, and identify each other rather than to fight back directly. Their kit should support evasion and short disruption without undermining the fantasy that corruption becomes harder to stop as the round progresses.",
          "The balance direction is intentional: the map should grow more dangerous over time, not more even."
        ],
        list: [
          "3 snowballs on spawn that slow a Bearer for 1 second on hit",
          "Speed I boots for evasive movement",
          "Faint gold glow on uncorrupted players so Survivors can identify allies"
        ],
        callout: {
          title: "Intentional power balance",
          text: "Survivors cannot eliminate Bearers. The power dynamic must increasingly favor the Bearers as the round advances."
        }
      },
      {
        id: "round-outcomes-and-risks",
        heading: "Win conditions, expiry rules, and risks",
        body: [
          "A normal win happens when one uncorrupted Survivor remains. That state must trigger the title callout, fireworks from the Crystal pedestal, a victory sound, a scoreboard increment, and a 10-second auto-reset.",
          "If the timer ends before a normal final-Survivor state is reached, the system must evaluate remaining uncorrupted players and award the round only if exactly one remains. If multiple Survivors remain, the round is a draw and no point is awarded."
        ],
        list: [
          "Normal win: one Survivor remains uncorrupted",
          "Expiry win: exactly one Survivor remains when the timer ends",
          "Expiry draw: multiple Survivors remain when the timer ends",
          "Session winner: player with the most rounds survived after the final round"
        ],
        callout: {
          title: "Risk note",
          text: "The source brief does not define tie-break behavior beyond the draw state. If later product requirements need ranking beyond round wins, that must be specified separately."
        }
      }
    ]
  },
  id: {
    navTitle: "Gameplay Systems",
    eyebrow: "Desain inti",
    title: "Dark Crystal, Survivors, dan Hasil Round",
    lead: "Gameplay loop bergantung pada asimetri yang sederhana: Crystal Bearer kuat, terlihat, dan menular, sementara Survivors mobile, terbatas, dan berada di bawah tekanan yang terus tumbuh saat setiap conversion menambah satu pengejar baru.",
    summary: {
      title: "Aturan inti round dan arah balance",
      body: "Halaman ini menerjemahkan brief sumber menjadi aturan gameplay yang eksplisit untuk kekuatan Bearer, tools Survivor, dan logika akhir round.",
      points: ["Role Bearer harus terasa kuat dan publik melalui speed, identitas weapon, dan kehadiran particle.", "Survivors boleh menunda dan menghindar tetapi tidak boleh mengeliminasi Bearers.", "Aturan hasil round harus menangani kemenangan normal, timer expiry, dan draw state secara konsisten."]
    },
    meta: [
      { label: "Role Bearer", value: "Corruption pursuer" },
      { label: "Role Survivor", value: "Delay and evade" },
      { label: "Tegangan inti", value: "Satu role menjadi lebih kuat pada setiap conversion" }
    ],
    sections: [
      {
        id: "dark-crystal-mechanic",
        heading: "Dark Crystal dan mekanik Bearer",
        body: [
          "Pada awal round, satu pemain dipilih secara acak menjadi Crystal Bearer. Role ini harus diumumkan dengan jelas dan harus langsung mengubah cara seluruh map terbaca melalui audio, title message, identitas weapon, dan corruption aura yang selalu terlihat.",
          "Dark Crystal sendiri bukan sekadar properti visual. Objek ini adalah titik asal simbolik dari role tersebut dan harus menjadi jangkar spectacle pada awal round dan momen kemenangan sepanjang pengalaman bermain."
        ],
        list: [
          "Speed II untuk seluruh round",
          "Crystal Blade dengan Sharpness I dan presentasi nama khusus",
          "Purple particle aura yang berdenyut setiap tick",
          "BEARER tag yang terlihat di atas kepala pemain",
          "Conversion langsung terhadap Survivor mana pun yang dipukul Bearer"
        ]
      },
      {
        id: "survivor-tools-and-balance",
        heading: "Tools Survivor dan aturan balance",
        body: [
          "Survivors dirancang untuk membeli waktu, menjaga jarak, dan saling mengenali, bukan untuk melawan secara langsung. Kit mereka harus mendukung gerakan menghindar dan gangguan singkat tanpa merusak fantasi bahwa corruption menjadi semakin sulit dihentikan saat round berkembang.",
          "Arah balance ini disengaja: map harus terasa semakin berbahaya dari waktu ke waktu, bukan semakin seimbang."
        ],
        list: [
          "3 snowballs saat spawn yang memperlambat Bearer selama 1 detik saat mengenai target",
          "Speed I boots untuk evasive movement",
          "Faint gold glow pada pemain yang belum terkorupsi agar Survivors dapat mengenali rekan"
        ],
        callout: {
          title: "Balance yang disengaja",
          text: "Survivors tidak dapat mengeliminasi Bearers. Dinamika kekuatan harus semakin berpihak pada Bearers seiring round berjalan."
        }
      },
      {
        id: "round-outcomes-and-risks",
        heading: "Win condition, expiry rules, dan risiko",
        body: [
          "Kemenangan normal terjadi saat hanya satu Survivor yang belum terkorupsi tersisa. State ini harus memicu title callout, fireworks dari Crystal pedestal, victory sound, penambahan skor pada scoreboard, dan auto-reset selama 10 detik.",
          "Jika timer habis sebelum state final-Survivor normal tercapai, sistem harus mengevaluasi pemain yang belum terkorupsi dan hanya memberikan round jika tepat satu pemain tersisa. Jika beberapa Survivors masih tersisa, round menjadi draw dan tidak ada poin yang diberikan."
        ],
        list: [
          "Kemenangan normal: satu Survivor masih belum terkorupsi",
          "Kemenangan saat expiry: tepat satu Survivor tersisa ketika timer habis",
          "Draw saat expiry: beberapa Survivors tersisa ketika timer habis",
          "Pemenang sesi: pemain dengan rounds survived terbanyak setelah round terakhir"
        ],
        callout: {
          title: "Catatan risiko",
          text: "Brief sumber tidak mendefinisikan tie-break di luar state draw. Jika kebutuhan produk nanti memerlukan ranking selain round wins, hal itu harus ditentukan secara terpisah."
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "spawn-hub",
  en: {
    navTitle: "Spawn Hub",
    eyebrow: "Area breakdown",
    title: "Spawn Hub Production Breakdown",
    lead: "The Spawn Hub is the pre-round control room, social staging area, and systems handoff point for readiness, leaderboard visibility, Bearer announcement, and reset flow.",
    summary: {
      title: "Spawn Hub build and systems focus",
      body: "This page defines the shared hub layout, player interactions, and command block responsibilities that control round start, round end, and scoreboard visibility.",
      points: ["The hub must combine spectacle with operational clarity around ready flow and leaderboard visibility.", "The Dark Crystal pedestal, ready wall, rules board, and exit gate are gameplay-critical objects.", "The area must leave clean space for command logic, sign updates, and repeated round resets."]
    },
    meta: [
      { label: "Area role", value: "Pre-round control hub" },
      { label: "Minimum room size", value: "20 x 12 blocks" },
      { label: "Core object", value: "Dark Crystal pedestal" }
    ],
    sections: [
      {
        id: "spawn-hub-purpose",
        heading: "Purpose and layout",
        body: [
          "All players return to the Spawn Hub before every round. The hub communicates the rules, presents live stats, collects ready confirmation, and stages the transition from calm preparation to active pursuit.",
          "The room should read as the ceremonial heart of the arena, with the Dark Crystal as the centerpiece and all essential teaching, tracking, and release controls arranged around it for fast scanning."
        ],
        table: {
          columns: ["Element", "Requirement"],
          rows: [
            ["Central room", "Minimum 20 x 12 blocks and visually open"],
            ["Dark Crystal pedestal", "End Crystal on obsidian and blackstone base with purple glass accents"],
            ["Leaderboard wall", "Minimum 16 blocks wide and prominent"],
            ["Ready wall", "Adjacent to leaderboard and updated in real time"],
            ["Rules board", "Five simple mechanic bullets readable by an 8-year-old"],
            ["Exit gate", "Barrier-based gate that opens on all ready or teacher override"],
            ["Arena branding", "DAIGON ESPORTS banner above the exit arch"]
          ]
        }
      },
      {
        id: "spawn-hub-gameplay",
        heading: "Gameplay and player flow",
        body: [
          "The hub sequence is simple: players gather, review standings, confirm ready with the NPC, wait for the ready wall to complete, then receive the Bearer announcement and countdown before the gate opens.",
          "The leaderboard wall must remain readable from the main standing zone, and the ready wall must make waiting state obvious so teachers and students can understand round readiness without extra explanation."
        ],
        steps: [
          "Players spawn into the shared hub and gather near the Dark Crystal pedestal.",
          "Each player clicks the ready NPC to receive the ready tag.",
          "The ready wall updates from waiting to ready for each player.",
          "When all active players are ready, or the teacher override is used, the exit gate opens.",
          "The selected Bearer receives the role announcement, then all players enter the round."
        ],
        callout: {
          title: "Platform handoff note",
          text: "DAIGON's scripting team will connect scoreboard output to the wider DAIGON platform after delivery. MIVUBI still needs to ship a complete working leaderboard and ready wall baseline inside the map."
        }
      },
      {
        id: "spawn-hub-build-dev",
        heading: "Builder and developer requirements",
        body: [
          "Builder requirements: Keep the hub visually premium, symmetrical enough for orientation, and open enough that the leaderboard wall, rules board, ready wall, and exit gate remain visible from the main standing area. Leave protected space behind walls, signs, and the gate for command block updates and reset logic.",
          "Developer requirements: Implement ready tagging, ready wall state updates, gate control, Bearer announcement timing, reset cleanup, and leaderboard output so the hub can operate as the round's authoritative control state without teacher intervention except for override."
        ],
        list: [
          "Reserve clear sign surfaces for leaderboard and ready status text.",
          "Prevent decorative clutter from blocking gate pathing or line of sight to the rules board.",
          "Make the pedestal, gate, and main standing area easy to target with command block effects, sounds, and fireworks."
        ],
        callout: {
          title: "Risk note",
          text: "Exact sign counts and exact player name layout are not specified in the source brief. The final hub should still be designed for the full 16-player roster without causing unreadable wall density."
        }
      }
    ]
  },
  id: {
    navTitle: "Spawn Hub",
    eyebrow: "Rincian area",
    title: "Rincian Produksi Spawn Hub",
    lead: "Spawn Hub adalah ruang kontrol sebelum round, area staging sosial, dan titik handoff sistem untuk readiness, visibilitas leaderboard, pengumuman Bearer, dan reset flow.",
    summary: {
      title: "Fokus build dan sistem Spawn Hub",
      body: "Halaman ini mendefinisikan layout hub bersama, interaksi pemain, dan tanggung jawab command block yang mengontrol awal round, akhir round, dan visibilitas scoreboard.",
      points: ["Hub harus menggabungkan spectacle dengan kejelasan operasional untuk ready flow dan visibilitas leaderboard.", "Dark Crystal pedestal, ready wall, rules board, dan exit gate adalah objek yang kritis bagi gameplay.", "Area ini harus menyisakan ruang bersih untuk command logic, sign updates, dan reset round yang berulang."]
    },
    meta: [
      { label: "Peran area", value: "Pre-round control hub" },
      { label: "Ukuran minimum ruangan", value: "20 x 12 blocks" },
      { label: "Objek inti", value: "Dark Crystal pedestal" }
    ],
    sections: [
      {
        id: "spawn-hub-purpose",
        heading: "Tujuan dan layout",
        body: [
          "Semua pemain kembali ke Spawn Hub sebelum setiap round. Hub mengomunikasikan aturan, menampilkan statistik live, mengumpulkan ready confirmation, dan menyiapkan transisi dari persiapan tenang ke pursuit aktif.",
          "Ruangan ini harus terbaca sebagai jantung seremonial arena, dengan Dark Crystal sebagai centerpiece dan semua kontrol teaching, tracking, dan release disusun di sekitarnya agar cepat dipindai."
        ],
        table: {
          columns: ["Elemen", "Kebutuhan"],
          rows: [
            ["Ruangan utama", "Minimum 20 x 12 blocks dan terasa terbuka"],
            ["Dark Crystal pedestal", "End Crystal di atas basis obsidian dan blackstone dengan aksen purple glass"],
            ["Leaderboard wall", "Lebar minimum 16 blocks dan sangat terlihat"],
            ["Ready wall", "Berdekatan dengan leaderboard dan diperbarui secara real time"],
            ["Rules board", "Lima bullet mechanic sederhana yang bisa dibaca anak usia 8 tahun"],
            ["Exit gate", "Gate berbasis barrier yang terbuka saat semua ready atau teacher override"],
            ["Branding arena", "Banner DAIGON ESPORTS di atas exit arch"]
          ]
        }
      },
      {
        id: "spawn-hub-gameplay",
        heading: "Gameplay dan player flow",
        body: [
          "Urutan hub sederhana: pemain berkumpul, melihat standings, mengonfirmasi ready melalui NPC, menunggu ready wall selesai, lalu menerima pengumuman Bearer dan countdown sebelum gate terbuka.",
          "Leaderboard wall harus tetap mudah dibaca dari area berdiri utama, dan ready wall harus membuat status waiting terlihat jelas agar teacher dan siswa memahami kesiapan round tanpa penjelasan tambahan."
        ],
        steps: [
          "Pemain spawn ke hub bersama dan berkumpul di dekat Dark Crystal pedestal.",
          "Setiap pemain mengklik ready NPC untuk menerima ready tag.",
          "Ready wall berubah dari waiting menjadi ready untuk setiap pemain.",
          "Saat semua pemain aktif ready, atau saat teacher override digunakan, exit gate terbuka.",
          "Bearer terpilih menerima role announcement, lalu semua pemain masuk ke round."
        ],
        callout: {
          title: "Catatan handoff platform",
          text: "Tim scripting DAIGON akan menghubungkan output scoreboard ke platform DAIGON yang lebih luas setelah delivery. MIVUBI tetap perlu mengirimkan baseline leaderboard dan ready wall yang lengkap dan berfungsi di dalam map."
        }
      },
      {
        id: "spawn-hub-build-dev",
        heading: "Kebutuhan builder dan developer",
        body: [
          "Kebutuhan builder: Jaga hub tetap terasa premium, cukup simetris untuk orientasi, dan cukup terbuka agar leaderboard wall, rules board, ready wall, dan exit gate tetap terlihat dari area berdiri utama. Sisakan ruang terlindungi di balik wall, sign, dan gate untuk command block updates dan reset logic.",
          "Kebutuhan developer: Implementasikan ready tagging, ready wall state updates, gate control, Bearer announcement timing, reset cleanup, dan leaderboard output agar hub dapat berfungsi sebagai control state round yang otoritatif tanpa intervensi teacher kecuali override."
        ],
        list: [
          "Sediakan permukaan sign yang jelas untuk teks leaderboard dan ready status.",
          "Hindari clutter dekoratif yang menghalangi gate pathing atau line of sight ke rules board.",
          "Buat pedestal, gate, dan area berdiri utama mudah ditarget oleh efek, sound, dan fireworks dari command block."
        ],
        callout: {
          title: "Catatan risiko",
          text: "Jumlah sign yang tepat dan layout nama pemain yang tepat tidak dijelaskan di brief sumber. Hub final tetap harus dirancang untuk roster penuh 16 pemain tanpa membuat wall terlalu padat dan sulit dibaca."
        }
      }
    ]
  }
});

window.DOC_DATA.pages.push({
  slug: "central-arena",
  en: {
    navTitle: "Central Arena",
    eyebrow: "Area breakdown",
    title: "Town Square and Street Network",
    lead: "The central arena combines the Town Square and the main Street Network into the primary confrontation layer of the map. It must support pursuit, evasive rotations, visibility, and repeated conversions without dead-end frustration.",
    summary: {
      title: "Open-space confrontation design",
      body: "This page defines the map footprint, the open confrontation zone, and the movement corridors that keep rounds fast and readable.",
      points: ["The map should stay compact enough to prevent slow rounds while still allowing distance creation.", "Town Square is the high-visibility conflict core and the Street Network is the rotation spine.", "No corridor should become a trap, and lighting must preserve tension without creating fear or darkness."]
    },
    meta: [
      { label: "Recommended footprint", value: "100 x 100 blocks" },
      { label: "Main plaza", value: "20 x 20 blocks" },
      { label: "Street width", value: "3 blocks" }
    ],
    sections: [
      {
        id: "zones-and-layout",
        heading: "Zones and layout",
        body: [
          "The Town Square should feel like the obvious center of activity, while the Street Network gives players clean movement choices to break line of sight or rotate toward vertical play zones.",
          "The source brief requires no dead ends and no fully dark areas. These two constraints must govern every corridor and decorative decision in this part of the map."
        ],
        table: {
          columns: ["Zone", "Description", "Purpose"],
          rows: [
            ["Town Square", "Open stone plaza with warm lantern lighting", "Primary confrontation zone with high visibility"],
            ["Street Network", "Four intersecting streets, each 3 blocks wide", "Movement corridors, rotations, and ambush setup"],
            ["Crystal veins", "Decorative purple veins spreading from the pedestal", "Visual identity only, no gameplay effect"],
            ["Destructible elements", "Selected fences and wooden doors", "Prevent camping and force circulation"]
          ]
        }
      },
      {
        id: "town-square-gameplay",
        heading: "Gameplay simulation",
        body: [
          "After the gate opens, Survivors can cross the square quickly, but the openness makes them easy to track if they linger. The area should reward decisive movement rather than stationary hiding.",
          "Bearers use the square to pressure multiple routes at once, then push Survivors into streets, rooftops, or alleys where conversions can chain across the map."
        ],
        steps: [
          "Survivors scatter from the hub and choose an immediate escape route.",
          "The Town Square exposes hesitant players to early visual tracking.",
          "Street intersections create repeated chase pivots and fast reversals.",
          "Bearers pressure sightlines and force rotation errors until the chase spills into the wider arena."
        ]
      },
      {
        id: "central-arena-build-dev",
        heading: "Builder and developer requirements",
        body: [
          "Builder requirements: Use warm stone, oak, mossy cobblestone, lanterns, and crystal accents to create a readable ancient arena. Maintain at least two exits from every corridor branch and ensure destructible elements are obvious but not messy.",
          "Developer requirements: Support clear traversal, conversion detection, and movement visibility in the open plaza and street intersections. Any breakable object used to stop camping must be safe to reset between rounds."
        ],
        list: [
          "Keep main streets readable from ground level and rooftops.",
          "Avoid decorative clutter that blocks snowball use or melee pursuit.",
          "Preserve enough clear space for particle effects, sound cues, and player clustering during high-pressure moments."
        ],
        callout: {
          title: "Risk note",
          text: "If the plaza becomes too large, the round pace may drop. If it becomes too tight, the Bearer role may overwhelm Survivors before the map's other zones can contribute."
        }
      }
    ]
  },
  id: {
    navTitle: "Arena Tengah",
    eyebrow: "Rincian area",
    title: "Town Square dan Street Network",
    lead: "Arena tengah menggabungkan Town Square dan Street Network utama menjadi lapisan konfrontasi utama map. Area ini harus mendukung pursuit, rotasi untuk menghindar, visibilitas, dan conversion berulang tanpa menimbulkan frustrasi akibat dead end.",
    summary: {
      title: "Desain konfrontasi area terbuka",
      body: "Halaman ini mendefinisikan footprint map, zona konfrontasi terbuka, dan koridor pergerakan yang menjaga round tetap cepat dan mudah dibaca.",
      points: ["Map harus tetap cukup kompak untuk mencegah round terasa lambat sambil tetap memungkinkan pemain menciptakan jarak.", "Town Square adalah inti konflik dengan visibilitas tinggi dan Street Network adalah tulang punggung rotasi.", "Tidak ada koridor yang boleh menjadi jebakan, dan lighting harus menjaga ketegangan tanpa membuat area gelap atau menakutkan."]
    },
    meta: [
      { label: "Footprint yang direkomendasikan", value: "100 x 100 blocks" },
      { label: "Plaza utama", value: "20 x 20 blocks" },
      { label: "Lebar jalan", value: "3 blocks" }
    ],
    sections: [
      {
        id: "zones-and-layout",
        heading: "Zona dan layout",
        body: [
          "Town Square harus terasa sebagai pusat aktivitas yang jelas, sementara Street Network memberi pemain pilihan gerak yang bersih untuk memutus line of sight atau berotasi ke zona vertical play.",
          "Brief sumber mensyaratkan tidak ada dead end dan tidak ada area yang benar-benar gelap. Kedua batasan ini harus mengarahkan setiap keputusan koridor dan dekorasi di bagian map ini."
        ],
        table: {
          columns: ["Zona", "Deskripsi", "Tujuan"],
          rows: [
            ["Town Square", "Plaza batu terbuka dengan warm lantern lighting", "Zona konfrontasi utama dengan visibilitas tinggi"],
            ["Street Network", "Empat jalan berpotongan, masing-masing lebar 3 blocks", "Koridor pergerakan, rotasi, dan setup ambush"],
            ["Crystal veins", "Urat crystal ungu dekoratif yang menyebar dari pedestal", "Identitas visual saja, tanpa efek gameplay"],
            ["Destructible elements", "Fences dan wooden doors tertentu", "Mencegah camping dan memaksa sirkulasi"]
          ]
        }
      },
      {
        id: "town-square-gameplay",
        heading: "Simulasi gameplay",
        body: [
          "Setelah gate terbuka, Survivors dapat melintasi plaza dengan cepat, tetapi keterbukaan area membuat mereka mudah dilacak jika terlalu lama berhenti. Area ini harus memberi penghargaan pada gerakan yang tegas, bukan berdiam diri.",
          "Bearers menggunakan square untuk menekan banyak rute sekaligus, lalu mendorong Survivors ke streets, rooftops, atau alleys tempat conversion dapat berantai di seluruh map."
        ],
        steps: [
          "Survivors menyebar dari hub dan memilih rute kabur awal.",
          "Town Square mengekspos pemain yang ragu-ragu pada pelacakan visual dini.",
          "Persimpangan jalan menciptakan pivot kejar-mengejar berulang dan pembalikan arah yang cepat.",
          "Bearers menekan sightline dan memaksa kesalahan rotasi sampai pengejaran meluas ke arena yang lebih besar."
        ]
      },
      {
        id: "central-arena-build-dev",
        heading: "Kebutuhan builder dan developer",
        body: [
          "Kebutuhan builder: Gunakan warm stone, oak, mossy cobblestone, lanterns, dan crystal accents untuk menciptakan arena kuno yang mudah dibaca. Pertahankan minimal dua exit dari setiap cabang koridor dan pastikan destructible elements terlihat jelas tetapi tidak berantakan.",
          "Kebutuhan developer: Dukung traversal yang jelas, conversion detection, dan movement visibility di plaza terbuka dan persimpangan jalan. Objek breakable apa pun yang dipakai untuk menghentikan camping harus aman untuk di-reset setiap round."
        ],
        list: [
          "Jaga main streets tetap terbaca dari ground level dan rooftops.",
          "Hindari clutter dekoratif yang menghalangi penggunaan snowball atau pursuit jarak dekat.",
          "Pertahankan ruang kosong yang cukup untuk particle effects, sound cues, dan pengelompokan pemain saat momen bertekanan tinggi."
        ],
        callout: {
          title: "Catatan risiko",
          text: "Jika plaza terlalu besar, tempo round bisa turun. Jika terlalu sempit, role Bearer bisa terlalu mendominasi sebelum zona lain di map sempat berkontribusi."
        }
      }
    ]
  }
});

window.DOC_DATA.pages = [
  "project-overview",
  "spawn-hub",
  "central-arena",
  "vertical-play-zones",
  "gameplay-systems",
  "player-flow",
  "branding",
  "command-block-logic",
  "data-capture",
  "final-production-checklist"
].map((slug) => window.DOC_DATA.pages.find((page) => page.slug === slug)).filter(Boolean);

