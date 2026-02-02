export const DEFAULT_SHADCN_COMPONENTS = [
  "button",
  "input",
  "dialog",
  "card",
  "dropdown-menu",
  "form",
  "label",
  "select",
  "textarea",
  "accordion",
  "alert",
  "avatar",
  "badge",
  "breadcrumb",
  "checkbox",
  "separator",
  "tooltip",
] as const;

export type ShadcnComponent = (typeof DEFAULT_SHADCN_COMPONENTS)[number];
