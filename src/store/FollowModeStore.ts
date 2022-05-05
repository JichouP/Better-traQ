export class FollowModeStore {
  handler: number;

  latestMessage: HTMLDivElement | null;

  constructor() {
    this.handler = 0;
    this.latestMessage = null;
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

  getLatestMessage(): HTMLDivElement | null {
    return this.latestMessage;
  }

  setLatestMessage(latestMessage: HTMLDivElement): void {
    this.latestMessage = latestMessage;
  }
}

const followModeStore = new FollowModeStore();

export default followModeStore;
