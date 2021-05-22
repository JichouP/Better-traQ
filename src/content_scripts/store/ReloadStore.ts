type ReloadStateType = {
  latestMessage: HTMLDivElement | null;
  reloader: number;
};

class ReloadStore {
  private reload: ReloadStateType;

  constructor() {
    this.reload = {
      latestMessage: null,
      reloader: 0,
    };
  }

  get = () => {
    return { ...this.reload };
  };

  set = (data: Partial<ReloadStateType>) => {
    this.reload = { ...this.reload, ...data };
  };
}

const reloadStore = new ReloadStore();
export default reloadStore;
