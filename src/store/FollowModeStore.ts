export class FollowModeStore {
  handler: number;

  latestMsg: HTMLDivElement | null;

  constructor() {
    this.handler = 0;
    this.latestMsg = null;
  }

  isFollowMode(): boolean {
    return this.handler !== 0;
  }

  getHandler(): number {
    return this.handler;
  }

  setHandler(handler: number): void {
    this.handler = handler;
  }

  getLatestMsg(): HTMLDivElement | null {
    return this.latestMsg;
  }

  setLatestMsg(latestMsg: HTMLDivElement): void {
    this.latestMsg = latestMsg;
  }
}

const followModeStore = new FollowModeStore();

export default followModeStore;
