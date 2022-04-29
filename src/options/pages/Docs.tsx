/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRecoilState } from 'recoil';
import pageState from '../states/pageState';
import onKeyDownHandler from '../utils/onKeyDownHandler';

const Docs = () => {
  const [, setPage] = useRecoilState(pageState);
  return (
    <div className="flex flex-col items-center justify-start overflow-y-scroll text-base">
      <div className="w-[48rem] mt-8 mb-16 h-screen">
        <div className="mt-8 mb-8">
          <h1 className="text-4xl font-bold">ドキュメント</h1>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold">使い方</h2>
          <p className="mt-2">
            {process.env.SERVICE || 'traQ'}{' '}
            を開いてアクションに対応するキーを押すだけです。アクションの一覧は{' '}
            <a
              className="link link-primary"
              onClick={() => {
                setPage('setting');
              }}
              onKeyDown={onKeyDownHandler}
            >
              設定
            </a>{' '}
            のキーバインド一覧をご覧ください。キーバインドは{' '}
            <a
              className="link link-primary"
              onClick={() => {
                setPage('setting');
              }}
              onKeyDown={onKeyDownHandler}
            >
              設定
            </a>{' '}
            からお好みでカスタマイズすることができます。1つのキーで複数のアクションを組み合わせることもできます。
          </p>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold">タスク (task)</h2>
          <p className="mt-2">
            <span className="font-bold">条件 (condition)</span> と{' '}
            <span className="font-bold">アクション (action)</span>{' '}
            を組み合わせたものを{' '}
            <span className="font-bold">タスク (Task)</span>{' '}
            と呼びます。このタスクにキーを割り当てることで、キーボードから traQ
            を操作できるようになります。
          </p>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold">条件 (condition)</h2>
          <p className="mt-2">
            <span className="font-bold">条件 (condition)</span> とはキーを押して
            Better traQ
            がタスクを実行するときに満たしているべき状態を指します。条件は複数指定することができます。これらの条件のうち
            <span className="font-bold">どれかひとつでも</span>
            満たしていない場合は Better traQ はタスクを実行しません。
          </p>
          <p>
            例として、メッセージの入力を考えます。このとき Better traQ
            が反応してしまうと、メッセージの入力中にもかかわらず、別のチャンネルを開くタスクを実行したりしてしまいます。こうなると正常に
            traQ
            を使用できなくなってしまうため、デフォルトのほとんどのタスクには{' '}
            <code>notIsFocusedInputOrTextarea</code>{' '}
            という条件がついています。これによって、メッセージの入力中にBetter
            traQが反応することを防いでいます。
          </p>
          <p>
            使用可能な条件の一覧については{' '}
            <a
              href="https://github.com/JichouP/Better-traQ/blob/main/src/store/zCondition.ts"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              こちら
            </a>{' '}
            をご覧ください。
          </p>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold">アクション (action)</h2>
          <p className="mt-2">
            <span className="font-bold">アクション (action)</span>{' '}
            とは、キーを押したときに実行する処理（関数）を指します。ひとつのタスクに対して、複数のアクションを指定する事ができます。タスクはこれらのアクションを先頭からひとつずつ順番に実行します。もし、同時に複数のアクションを起こしたい場合は、複数のタスクを同じキーに登録してください。ただし、想定外の挙動をする可能性があるためご注意ください。通常は、ひとつのタスクに複数のアクションを設定すれば十分です。
          </p>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold">制約</h2>
          <p className="mt-2">
            syncStorage
            の仕様上、8192バイト以上のデータを格納できません。もしこれを超える場合は、{' '}
            <a
              className="link link-primary"
              onClick={() => {
                setPage('setting');
              }}
              onKeyDown={onKeyDownHandler}
            >
              設定
            </a>{' '}
            から localStorageに変更してください。
          </p>
        </div>
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold">正しく動かなくなったら</h2>
          <p className="mt-2">
            まずは{' '}
            <a
              className="link link-primary"
              onClick={() => {
                setPage('setting');
              }}
              onKeyDown={onKeyDownHandler}
            >
              設定
            </a>{' '}
            からキーバインドをデフォルトに戻してみてください。それでも動かない場合は、お手数ですが{' '}
            <a
              href="https://github.com/JichouP/Better-traQ/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary"
            >
              Issue
            </a>{' '}
            を立てていただけると助かります。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Docs;
