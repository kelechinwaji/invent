import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={12}
      cy={12.802}
      r={10}
      transform="rotate(60 12 12.802)"
      stroke="#092C4C"
      strokeWidth={2}
    />
    <path
      d="m16.95 8.09-4.596 4.597L7.05 17.99"
      stroke="#092C4C"
      strokeWidth={2}
    />
    <path
      d="M7.05 8.092a8562737.922 8562737.922 0 0 0 9.9 9.9"
      stroke="#092C4C"
      strokeWidth={2}
    />
  </svg>
)

export default SvgComponent