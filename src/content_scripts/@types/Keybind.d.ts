type Keybind = {
  key: string;
  shiftKey?: boolean;
  ctrlKey?: boolean;
  altKey?: boolean;
  metaKey?: boolean;
  conditions: import('@/store/zCondition').ConditionEnum[];
};
