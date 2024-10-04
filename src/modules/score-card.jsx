const BestScore = ({ bestScore }) => {
  return (
    <div className="absolute right-5 md:right-8 lg:right-20 -top-10  md:-top-14 score-card flex items-center gap-2  justify-end  w-fit h-fit bg-gray-800/60 px-4 rounded-tl-3xl  rounded-bl-full ">
      <p className="pokemon-solid flex h-fit items-center gap-2 py-1 md:py-0 leading-tight text-base ">
        Best{" "}
        <span className="pokemon-solid text-amber-300 text-3xl md:text-4xl leading-[50%]">
          {bestScore}
        </span>
      </p>
      <svg
        // width="21"
        // height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 md:size-8"
      >
        <rect
          x="0.118652"
          y="0.471924"
          width="20"
          height="20"
          rx="10"
          fill="url(#paint0_radial_11_8337)"
        />
        <rect
          x="0.535319"
          y="0.88859"
          width="19.1667"
          height="19.1667"
          rx="9.58333"
          stroke="url(#paint1_linear_11_8337)"
          strokeOpacity="0.5"
          strokeWidth="0.833333"
        />
        <g filter="url(#filter0_f_11_8337)">
          <circle cx="8.03528" cy="7.5553" r="3.75" fill="white" />
        </g>
        <g filter="url(#filter1_d_11_8337)">
          <path
            d="M7.63195 17.1387C6.74362 15.2895 7.21695 14.2303 7.89945 13.232C8.64695 12.1387 8.84028 11.057 8.84028 11.057C8.84028 11.057 9.42862 11.8212 9.19278 13.017C10.2311 11.8612 10.4278 10.0187 10.2703 9.31284C12.6178 10.9537 13.6211 14.5062 12.2695 17.1395L12.2709 17.1387C19.4612 13.0695 14.0586 6.98113 13.1178 6.29534C13.4311 6.98117 13.4911 8.14201 12.857 8.70617C11.7845 4.64034 9.13362 3.80701 9.13362 3.80701C9.44695 5.90367 7.99695 8.19701 6.59862 9.91034C6.54945 9.07451 6.49695 8.49701 6.05778 7.69701C5.95945 9.21617 4.79862 10.4545 4.48362 11.9762C4.05778 14.037 4.80278 15.5462 7.63112 17.1403L7.63195 17.1387Z"
            fill="#0C0C0C"
          />
        </g>
        <g filter="url(#filter2_d_11_8337)">
          <path
            d="M8.12009 14.0504C7.54157 14.6632 7.3671 16.0035 8.1201 17.1386C8.1201 17.1386 9.40604 16.8829 10.2292 16.8829C10.9309 16.8829 12.0259 17.1309 12.0589 17.1385C13.2039 15.522 12.5391 12.3124 10.5495 11.3053C10.683 11.7386 9.81005 13.684 8.92991 14.3935C9.12981 13.6595 8.9299 12.3347 8.9299 12.3347C8.9299 12.3347 8.75371 13.3792 8.12009 14.0504Z"
            fill="url(#paint2_linear_11_8337)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_11_8337"
            x="2.61861"
            y="2.13863"
            width="10.8333"
            height="10.8333"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="0.833333"
              result="effect1_foregroundBlur_11_8337"
            />
          </filter>
          <filter
            id="filter1_d_11_8337"
            x="1.87244"
            y="2.97367"
            width="16.5768"
            height="18.3333"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.66667" />
            <feGaussianBlur stdDeviation="1.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.994277 0 0 0 0 0.59925 0 0 0 0 0.0826752 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11_8337"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11_8337"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_11_8337"
            x="5.11865"
            y="10.472"
            width="10"
            height="10.8333"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1.66667" />
            <feGaussianBlur stdDeviation="1.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.994277 0 0 0 0 0.59925 0 0 0 0 0.0826752 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_11_8337"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_11_8337"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial_11_8337"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(10.1187 10.4719) rotate(90) scale(11.25)"
          >
            <stop stopColor="#FE853E" />
            <stop offset="1" stopColor="#990000" />
          </radialGradient>
          <linearGradient
            id="paint1_linear_11_8337"
            x1="10.1187"
            y1="0.471924"
            x2="10.1187"
            y2="20.4719"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#DBDBDB" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_11_8337"
            x1="10.1187"
            y1="11.3053"
            x2="10.1187"
            y2="17.1386"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E62C17" />
            <stop offset="1" stopColor="#FE6A3C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
const Score = ({ score }) => {
  return (
    <div className="absolute left-5 md:left-8 lg:left-20 -top-0 score-card flex items-center gap-2  justify-end  w-fit h-fit bg-blue-800/60 pl-4 pr-8  rounded-br-3xl rounded-tr-xl ">
      <p className="pokemon-solid  items-center gap-2 leading-none text-sm ">
        Score
      </p>
      <p className="pokemon-solid text-white text-3xl md:text-4xl leading-[70%] md:leading-[70%] ">
        {score}
      </p>
    </div>
  );
};

export { BestScore, Score };
