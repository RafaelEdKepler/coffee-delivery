export const COLOR_OPTIONS = {
  purple: "purple-dark",
  yellow: "yellow-light"
} as const

export interface CartProps {
  color: keyof typeof COLOR_OPTIONS
}