function SvgComponent(props) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <defs>
        <style>
          {
            `.prefix__cls-1{fill:none;stroke:${props.color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}`
          }
        </style>
      </defs>
      <g data-name="Layer 22" id="prefix__world">
        <circle className="prefix__cls-1" cx={32.08} cy={31.92} r={30.08} />
        <path
          className="prefix__cls-1"
          d="M7.92 14H23a2.16 2.16 0 012.15 2.16A2.15 2.15 0 0123 18.31h-2.69A1.69 1.69 0 0018.62 20a1.69 1.69 0 001.69 1.69h15a2.75 2.75 0 012.75 2.75 2.75 2.75 0 01-2.75 2.75h-22.4a2 2 0 00-2 2 2 2 0 002 2H22a2.54 2.54 0 012.53 2.54A2.53 2.53 0 0122 36.19H2.3M61.09 39.94h-19.4a2.62 2.62 0 00-2.63 2.62 2.63 2.63 0 002.63 2.63h4a1.66 1.66 0 011.66 1.65 1.66 1.66 0 01-1.66 1.66H34.31a2.69 2.69 0 00-2.69 2.69 2.7 2.7 0 002.69 2.69h18.34M27.83 15.75H36M39.33 15.75h2.75M27.83 51.08h-7.65M17.17 51.08h-2.42M25.08 56.92h-9.53M11.75 9.75h16.08"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;

