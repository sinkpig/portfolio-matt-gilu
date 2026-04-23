function Burger(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666"
      />
    </svg>
  )
}

export default Burger
