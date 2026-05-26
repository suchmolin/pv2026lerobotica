/**
 * Icono de robot del logo. Sustituir por imagen en:
 * src/assets/images/logo/robot-icon.svg
 */
export default function RobotIcon({ className = 'h-8 w-8', ...props }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect
        x="8"
        y="14"
        width="32"
        height="28"
        rx="6"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <line
        x1="24"
        y1="14"
        x2="24"
        y2="6"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="24" cy="4" r="3" fill="currentColor" />
      <circle cx="17" cy="26" r="3.5" fill="currentColor" />
      <circle cx="31" cy="26" r="3.5" fill="currentColor" />
      <path
        d="M16 34c3 4 13 4 16 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
