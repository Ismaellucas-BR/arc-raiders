const PlayYoutube = (props: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={280}
    height={60}
    fill="#FF0000"
    style={{
      pointerEvents: "none",
      display: "inherit",
    }}
    viewBox="0 0 67 60"
    {...props}>
    <path d="M63 14.87a7.885 7.885 0 0 0-5.56-5.56C52.54 8 32.88 8 32.88 8S13.23 8 8.32 9.31c-2.7.72-4.83 2.85-5.56 5.56C1.45 19.77 1.45 30 1.45 30s0 10.23 1.31 15.13c.72 2.7 2.85 4.83 5.56 5.56C13.23 52 32.88 52 32.88 52s19.66 0 24.56-1.31c2.7-.72 4.83-2.85 5.56-5.56C64.31 40.23 64.31 30 64.31 30s0-10.23-1.31-15.13z" />
    <path
      fill="#FFF"
      d="M26.6 39.43 42.93 30 26.6 20.57z"
      className="logo-arrow"
    />
  </svg>
);
export default PlayYoutube;
