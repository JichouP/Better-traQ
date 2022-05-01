/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import CHANGELOG from '@/../CHANGELOG.md';

const removeHeads = (s: string, n: number): string =>
  s.split('\n').slice(n).join('\n');

const md = removeHeads(CHANGELOG, 7);

const A = (props: any) => <a className="link link-primary" {...props} />;
const H2 = (props: any) => (
  <h2 className="mt-8 text-2xl font-bold" {...props} />
);
const H3 = (props: any) => <h2 className="mt-4 text-xl font-bold" {...props} />;
const Ul = ({ children }: any) => (
  <ul className="mt-2 ml-8 list-disc">{children}</ul>
);

const Changelog = () => (
  <div className="flex flex-col items-center justify-start h-full overflow-y-scroll text-base">
    <div className="w-[48rem] mt-8 mb-16">
      <div className="mt-8 mb-8">
        <h1 className="text-4xl font-bold">更新履歴</h1>
      </div>
      <ReactMarkdown
        className="mt-8 mb-8"
        components={{
          a: A,
          h2: H2,
          h3: H3,
          ul: Ul,
        }}
      >
        {md}
      </ReactMarkdown>
    </div>
  </div>
);

export default Changelog;
