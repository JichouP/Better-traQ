import React, { FC } from 'react';

type TemplateProps = { version: string; children: JSX.Element[] };

const Template: FC<TemplateProps> = ({ version, children }) => (
  <div className="mt-8 mb-8">
    <h1 className="text-2xl">{version}</h1>
    <ul className="mt-4 ml-8 list-disc">{children}</ul>
  </div>
);

const Changelog = () => (
  <div className="flex flex-col items-center justify-start h-full overflow-y-scroll text-base">
    <div className="w-[48rem] mt-8 mb-16">
      <div className="mt-8 mb-8">
        <h1 className="text-4xl font-bold">更新履歴</h1>
      </div>
      <Template version="v3.0.0.0">
        <li>Chrome に加えて、Firefox と Edge もサポート</li>
        <li>キーバインドをカスタマイズできるように設計を変更</li>
        <li>Manifest v3 に移行</li>
      </Template>
    </div>
  </div>
);

export default Changelog;
