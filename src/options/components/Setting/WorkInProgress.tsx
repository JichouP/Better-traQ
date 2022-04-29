import React from 'react';

const WorkInProgress = () => (
  <div className="ml-auto mr-auto shadow-lg alert alert-info w-fit">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="flex-shrink-0 w-6 h-6 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-base">
        キーバインド設定は機能しますが仮実装です。手伝ってくれる方は{' '}
        <code>
          <a
            className="link"
            href={`https://${process.env.HOST}/channels/gps/times/JichouP`}
            target="_blank"
            rel="noopener noreferrer"
          >
            #gps/times/JichouP
          </a>
        </code>{' '}
        まで
      </span>
    </div>
  </div>
);

export default WorkInProgress;
