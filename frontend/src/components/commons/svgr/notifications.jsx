import React from 'react'

const SvgComponentMemorized = React.memo(function SvgComponent(props) {
  return (
    <svg    
    width={props.size}
    height={props.size}
    viewBox="0 0 48 48" {...props}>
      <style>
        {
          `.prefix__st1{fill:none;stroke:${props.color};stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}`
        }
      </style>
      <g id="prefix__notifications">
        <path
          className="prefix__st1"
          d="M20.686 13.854c1.501-.218 2.983.04 4.307.632 1.917.85 3.497 2.39 4.308 4.505l1.323 3.438M17.01 15.257c-2.983 2.114-4.268 6.026-2.904 9.563l1.324 3.458M15.89 22.433c.006.385.046.772.12 1.158M18.755 16.793a6.788 6.788 0 00-2.646 3.823M33.139 28.981l-15.197 5.844"
        />
        <path
          className="prefix__st1"
          d="M17.004 15.265l-.114-.295a1.982 1.982 0 011.135-2.554 1.982 1.982 0 012.554 1.135l.113.295M15.43 28.28c.47 1.24.516 2.573.176 3.993a1.758 1.758 0 00-.172 1.59 1.805 1.805 0 002.324 1.033l.184-.071L33.14 28.98l.147-.057A1.805 1.805 0 0034.32 26.6a1.96 1.96 0 00-.377-.595 1.857 1.857 0 00-.702-.45l-.034-.012c-1.22-.83-2.096-1.853-2.576-3.113"
        />
        <path
          className="prefix__st1"
          d="M24.637 32.25c.49 1.273-.165 2.71-1.437 3.2l-.259.099c-1.272.489-2.72-.14-3.21-1.412"
        />
      </g>
    </svg>
  );
})

export default SvgComponentMemorized;

