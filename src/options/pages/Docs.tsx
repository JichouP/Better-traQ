/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useRecoilState } from 'recoil';
import pageState from '../states/pageState';
import onKeyDownHandler from '../utils/onKeyDownHandler';

const Docs = () => {
  const [, setPage] = useRecoilState(pageState);
  return (
    <div className="flex flex-col items-center h-full overflow-y-scroll text-base">
      <div className="w-[48rem] mt-8 mb-16">
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
            のタスク一覧をご覧ください。タスクは{' '}
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
            キーを押して Better traQ
            がタスクを実行するときに満たしているべき状態のことを{' '}
            <span className="font-bold">条件 (condition)</span>{' '}
            と呼びます。条件は複数指定することができます。これらの条件を
            <span className="font-bold">すべて満たしている場合のみ</span> Better
            traQ はタスクを実行します。
          </p>
          <p>
            例として、新規メッセージの入力を考えます。このとき Better traQ
            が反応してしまうと、メッセージの入力中にもかかわらず、別のチャンネルを開くタスクを実行したりしてしまいます。こうなると正常に
            traQ
            を使用できなくなってしまうため、デフォルトのほとんどのタスクには{' '}
            <code>niFInputOrTextarea</code> (
            <code>notIsFocusedInputOrTextarea</code> の略){' '}
            という条件がついています。これによって、メッセージの入力中に Better
            traQ が反応することを防いでいます。
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
            キーを押したときに実行する処理（関数）のことを{' '}
            <span className="font-bold">アクション (action)</span>{' '}
            と呼びます。ひとつのタスクに対して、複数のアクションを指定する事ができます。タスクはこれらのアクションを先頭からひとつずつ順番に実行します。もし、同時に複数のアクションを起こしたい場合は、複数のタスクを同じキーに登録してください。ただし、想定外の挙動をする可能性があるためご注意ください。通常は、ひとつのタスクに複数のアクションを設定すれば十分です。
          </p>
          <p>
            使用可能なアクションの一覧については{' '}
            <a
              href="https://github.com/JichouP/Better-traQ/blob/main/src/store/zAction.ts"
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
            からタスクの設定をデフォルトに戻してみてください。それでも動かない場合は、{' '}
            <a
              className="link link-primary"
              onClick={() => {
                setPage('setting');
              }}
              onKeyDown={onKeyDownHandler}
            >
              設定
            </a>{' '}
            からストレージを初期化してみてください。もし、それでも動かない場合はお手数ですが{' '}
            <code>
              <a
                className="link link-primary"
                href={`https://${process.env.HOST}/channels/gps/times/JichouP`}
                target="_blank"
                rel="noopener noreferrer"
              >
                #gps/times/JichouP
              </a>
            </code>{' '}
            までご連絡いただくか、
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
