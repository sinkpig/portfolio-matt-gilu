function Close(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12L7 7m5 5l5 5m-5-5l5-5m-5 5l-5 5"
      />
    </svg>
  )
}

export default Close
