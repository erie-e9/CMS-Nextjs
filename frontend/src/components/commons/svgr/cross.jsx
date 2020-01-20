function SvgComponent(props) {
  return (
    <svg viewBox="0 0 32 32" {...props}>
      <defs>
        <style>
          {
            `.prefix__cls-1{fill:none;stroke:${props.color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}`
          }
        </style>
      </defs>
      <g id="prefix__cross">
        <path className="prefix__cls-1" d="M7 7l18 18M7 25L25 7" />
      </g>
    </svg>
  );
}

export default SvgComponent;

