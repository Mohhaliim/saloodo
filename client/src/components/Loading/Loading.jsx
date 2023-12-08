function Loading() {
  return (
    <div className={'flex gap-4 flex-col items-center mb-4 w-full h-full justify-center spinner'}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 200 200"
          color="#1e88e5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='spinner'
        >
          <defs>
              <linearGradient id="spinner-secondHalf">
              <stop offset="0%" stopOpacity="0" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
              </linearGradient>
              <linearGradient id="spinner-firstHalf">
              <stop offset="0%" stopOpacity="1" stopColor="currentColor" />
              <stop offset="100%" stopOpacity="0.5" stopColor="currentColor" />
              </linearGradient>
          </defs>
          <g strokeWidth="8">
              <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
              <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
              <path stroke="currentColor" strokeLinecap="round" d="M 4 100 A 96 96 0 0 1 4 98" />
          </g>
        </svg>
    </div>
  )
}

export default Loading