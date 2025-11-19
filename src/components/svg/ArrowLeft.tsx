const ArrowLeft = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={60}
    fill="none"
    className="rotate-180"
    {...props}>
    <path
      fill="#130918"
      d="M1.61.251 27.207 29.53a.73.73 0 0 1 0 .951L1.611 59.76c-.43.491-1.228.178-1.228-.48V.721c0-.659.798-.973 1.228-.481z"
    />
  </svg>
);
export default ArrowLeft;
