import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '50' : '25';
  const fontStyle = props.xl
    ? 'font-tilitium font-bold text-3xl'
    : 'font-tilitium font-bold text-xl';

  return (
    <span
      className={`inline-flex items-center text-primeBlue-dark ${fontStyle}`}
    >
      <svg
        className="mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        zoomAndPan="magnify"
        viewBox="0 15 800 809.999993"
        height={size}
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
      >
        <defs>
          <clipPath id="1873808914">
            <path
              d="M 17 28 L 785 28 L 785 789 L 17 789 Z M 17 28 "
              clipRule="nonzero"
            />
          </clipPath>
          <clipPath id="21dff5c921">
            <path
              d="M 770.550781 137.648438 L 675.28125 42.394531 C 657.167969 24.265625 627.53125 24.265625 609.414062 42.394531 L 529.425781 122.371094 C 526.695312 122.246094 523.992188 122.164062 521.230469 122.164062 L 274.90625 122.164062 C 178.828125 122.164062 100.203125 200.777344 100.203125 296.851562 L 100.203125 543.183594 C 100.203125 556.480469 101.738281 569.40625 104.582031 581.867188 C 102.132812 583.460938 99.757812 585.277344 97.546875 587.382812 L 30.863281 651.125 C 12.324219 668.820312 12.644531 697.453125 31.546875 714.730469 L 98.8125 776.1875 C 117.710938 793.464844 147.609375 792.398438 165.21875 773.824219 L 222.4375 713.496094 C 223.351562 712.550781 224.179688 711.535156 224.984375 710.539062 C 240.847656 715.289062 257.589844 717.878906 274.914062 717.878906 L 521.238281 717.878906 C 617.3125 717.878906 695.917969 639.265625 695.917969 543.191406 L 695.917969 296.859375 C 695.917969 290.855469 695.628906 284.917969 695.035156 279.058594 L 770.558594 203.539062 C 788.671875 185.40625 788.671875 155.769531 770.550781 137.648438 Z M 770.550781 137.648438 "
              clipRule="nonzero"
            />
          </clipPath>
          <linearGradient
            x1="193.3165"
            gradientTransform="matrix(7.444689, 0, 0, 7.444596, -1420.702494, -973.979392)"
            y1="238.239501"
            x2="297.118984"
            gradientUnits="userSpaceOnUse"
            y2="134.437001"
            id="f67ddeceb2"
          >
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 15.299988%, 32.499695%)"
              offset="0"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 15.299988%, 32.499695%)"
              offset="0.125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 15.319824%, 32.53479%)"
              offset="0.140625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 15.447998%, 32.756042%)"
              offset="0.148437"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 15.663147%, 33.126831%)"
              offset="0.15625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 15.878296%, 33.499146%)"
              offset="0.164062"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 16.094971%, 33.869934%)"
              offset="0.171875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 16.31012%, 34.240723%)"
              offset="0.179688"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 16.525269%, 34.613037%)"
              offset="0.1875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 16.741943%, 34.983826%)"
              offset="0.195312"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 16.957092%, 35.354614%)"
              offset="0.203125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 17.172241%, 35.726929%)"
              offset="0.210938"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 17.38739%, 36.097717%)"
              offset="0.21875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 17.604065%, 36.470032%)"
              offset="0.226563"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 17.819214%, 36.84082%)"
              offset="0.234375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 18.034363%, 37.211609%)"
              offset="0.242188"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 18.251038%, 37.583923%)"
              offset="0.25"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 18.466187%, 37.954712%)"
              offset="0.257812"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 18.681335%, 38.3255%)"
              offset="0.265625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 18.896484%, 38.697815%)"
              offset="0.273438"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 19.113159%, 39.068604%)"
              offset="0.28125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 19.328308%, 39.440918%)"
              offset="0.289062"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 19.543457%, 39.811707%)"
              offset="0.296875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 19.760132%, 40.182495%)"
              offset="0.304687"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 19.975281%, 40.55481%)"
              offset="0.3125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 20.19043%, 40.925598%)"
              offset="0.320312"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 20.405579%, 41.297913%)"
              offset="0.328125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 20.622253%, 41.668701%)"
              offset="0.335938"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 20.837402%, 42.03949%)"
              offset="0.34375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 21.052551%, 42.411804%)"
              offset="0.351562"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 21.269226%, 42.782593%)"
              offset="0.359375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 21.484375%, 43.153381%)"
              offset="0.367188"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 21.699524%, 43.525696%)"
              offset="0.375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 21.914673%, 43.896484%)"
              offset="0.382812"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 22.131348%, 44.268799%)"
              offset="0.390625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 22.346497%, 44.639587%)"
              offset="0.398438"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 22.561646%, 45.010376%)"
              offset="0.40625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 22.77832%, 45.38269%)"
              offset="0.414062"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 22.993469%, 45.753479%)"
              offset="0.421875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 23.208618%, 46.124268%)"
              offset="0.429687"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 23.423767%, 46.496582%)"
              offset="0.4375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 23.640442%, 46.867371%)"
              offset="0.445312"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 23.855591%, 47.239685%)"
              offset="0.453125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 24.07074%, 47.610474%)"
              offset="0.460938"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 24.287415%, 47.981262%)"
              offset="0.46875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 24.502563%, 48.353577%)"
              offset="0.476562"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 24.717712%, 48.724365%)"
              offset="0.484375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 24.932861%, 49.09668%)"
              offset="0.492187"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 25.149536%, 49.467468%)"
              offset="0.49769"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 25.257874%, 49.653625%)"
              offset="0.5"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 25.364685%, 49.838257%)"
              offset="0.50231"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 25.473022%, 50.024414%)"
              offset="0.507813"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 25.579834%, 50.210571%)"
              offset="0.515625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 25.796509%, 50.58136%)"
              offset="0.523438"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 26.011658%, 50.952148%)"
              offset="0.53125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 26.226807%, 51.324463%)"
              offset="0.539062"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 26.441956%, 51.695251%)"
              offset="0.546875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 26.65863%, 52.067566%)"
              offset="0.554688"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 26.873779%, 52.438354%)"
              offset="0.5625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 27.088928%, 52.809143%)"
              offset="0.570312"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 27.305603%, 53.181458%)"
              offset="0.578125"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 27.520752%, 53.552246%)"
              offset="0.585938"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 27.735901%, 53.924561%)"
              offset="0.59375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 27.95105%, 54.295349%)"
              offset="0.601562"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.167725%, 54.666138%)"
              offset="0.609375"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.382874%, 55.038452%)"
              offset="0.617187"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.598022%, 55.409241%)"
              offset="0.625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.814697%, 55.780029%)"
              offset="0.632812"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.961182%, 56.031799%)"
              offset="0.640625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.999329%, 56.098938%)"
              offset="0.65625"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.999329%, 56.098938%)"
              offset="0.6875"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.999329%, 56.098938%)"
              offset="0.75"
            />
            <stop
              stopOpacity="1"
              stopColor="rgb(0%, 28.999329%, 56.098938%)"
              offset="1"
            />
          </linearGradient>
        </defs>
        <path
          fill="#f58220"
          d="M 695.027344 279.050781 C 695.621094 284.910156 695.910156 290.851562 695.910156 296.851562 L 695.910156 543.183594 C 695.910156 638.914062 617.863281 717.292969 522.265625 717.835938 L 571.199219 717.835938 C 657.824219 717.835938 728.699219 646.960938 728.699219 560.34375 L 728.699219 338.242188 C 728.699219 311.472656 721.914062 286.203125 709.996094 264.070312 Z M 695.027344 279.050781 "
          fillOpacity="1"
          fillRule="nonzero"
        />
        <g clipPath="url(#1873808914)">
          <g clipPath="url(#21dff5c921)">
            <path
              fill="url(#f67ddeceb2)"
              d="M 12.324219 24.265625 L 12.324219 793.464844 L 788.671875 793.464844 L 788.671875 24.265625 Z M 12.324219 24.265625 "
              fillRule="nonzero"
            />
          </g>
        </g>
        <path
          fill="#ffffff"
          d="M 707.667969 153.035156 L 659.386719 104.773438 C 650.351562 95.710938 635.503906 95.710938 626.4375 104.773438 L 319.269531 411.921875 L 270.21875 362.875 C 261.15625 353.816406 246.34375 353.816406 237.304688 362.875 L 181.910156 418.242188 C 172.871094 427.300781 172.871094 442.125 181.910156 451.183594 L 247.453125 516.703125 L 266.671875 535.925781 L 295.714844 564.980469 C 304.777344 574.027344 319.589844 574.027344 328.652344 564.980469 L 707.667969 185.976562 C 716.703125 176.917969 716.703125 162.101562 707.667969 153.035156 Z M 707.667969 153.035156 "
          fillOpacity="1"
          fillRule="nonzero"
        />
        <path
          fill="#f58220"
          d="M 97.550781 587.382812 C 99.761719 585.285156 102.136719 583.460938 104.585938 581.867188 C 101.742188 569.40625 100.210938 556.480469 100.210938 543.183594 L 100.210938 296.851562 C 100.210938 201.617188 177.457031 123.585938 272.382812 122.230469 L 219.78125 122.230469 C 133.136719 122.230469 62.273438 193.101562 62.273438 279.71875 L 62.273438 501.824219 C 62.273438 535.761719 73.199219 567.261719 91.640625 593.042969 Z M 97.550781 587.382812 "
          fillOpacity="1"
          fillRule="nonzero"
        />
      </svg>

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
