/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import * as actions from './actions';
import * as conditions from './conditions';
import storage from '@/store/Storage';
import lazy from '@/utils/lazy';

type TaskHandler = (ev: KeyboardEvent) => void;

const taskHandlerBuilder = async (): Promise<TaskHandler> => {
  const { task } = await storage.get();

  return async (ev) => {
    const { key, shiftKey, ctrlKey, altKey, metaKey } = ev;
    const targetTasks = task.filter(
      ({ keybinds }) =>
        keybinds[0].key === key &&
        Boolean(keybinds[0].shiftKey) === shiftKey &&
        Boolean(keybinds[0].ctrlKey) === ctrlKey &&
        Boolean(keybinds[0].altKey) === altKey &&
        Boolean(keybinds[0].metaKey) === metaKey
    );

    // null check
    if (targetTasks.length === 0) return;
    // 同じキーに複数割り振っている可能性があるので、先頭から順番に処理する
    targetTasks.forEach(
      async ({ actions: actionNames, keybinds: [keybind] }) => {
        // check condition
        if (
          keybind &&
          keybind.conditions
            .map((conditionName) => conditions[conditionName]())
            .some((v) => v === false) // 条件が一つでもfalseならreturn
        ) {
          return;
        }

        ev.preventDefault();

        const actionList = actionNames.map((actionName) => actions[actionName]);
        for (const action of actionList) {
          await lazy(action);
        }
      }
    );
  };
};

export default taskHandlerBuilder;
