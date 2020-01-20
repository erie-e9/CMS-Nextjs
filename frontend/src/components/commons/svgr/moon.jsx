function SvgComponent(props) {
  return (
    <svg
      width={props.size}
      height={props.size}
      id="prefix__moon"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M248.082 263.932c-31.52-31.542-39.979-77.104-26.02-116.542-15.25 5.395-29.668 13.833-41.854 26.02-43.751 43.75-43.751 114.667 0 158.395 43.729 43.73 114.625 43.752 158.374 0 12.229-12.186 20.646-26.604 26.021-41.854-39.415 13.959-84.999 5.5-116.521-26.019z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgComponent;

