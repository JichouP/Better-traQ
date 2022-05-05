import eUnreadChannel from './eUnreadChannel';

const notExistUnreadChannel = (): boolean => !eUnreadChannel();

export default notExistUnreadChannel;
