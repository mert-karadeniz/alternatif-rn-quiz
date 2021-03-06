import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BalanceIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29.928}
      height={25}
      viewBox="0 0 29.928 25"
      {...props}
    >
      <Path
        d="M29 11.274a7.6 7.6 0 00-6.677-3.96h-.474A11.276 11.276 0 00.371 14.091a11.285 11.285 0 002.445 4.589 1.47 1.47 0 002.209-1.938 8.356 8.356 0 01-1.808-3.392 8.335 8.335 0 0116.133-4.2 1.47 1.47 0 001.423 1.1h1.549a4.662 4.662 0 014.094 2.427 4.641 4.641 0 01-1.868 6.3 1.468 1.468 0 001.406 2.577A7.57 7.57 0 0029 11.271z"
        fill={props.color}
      />
      <Path
        d="M16.024 11.184a1.507 1.507 0 00-.74-.4l-.023-.007a1.493 1.493 0 00-.3-.031 1.414 1.414 0 00-.2.02c-.032 0-.064 0-.1.01a1.5 1.5 0 00-.788.431l-4.978 4.979a1.5 1.5 0 002.121 2.121l2.436-2.436v7.63a1.5 1.5 0 003 0v-7.638l2.442 2.443a1.5 1.5 0 002.122-2.121z"
        fill={props.color}
      />
    </Svg>
  )
}

export default BalanceIcon
