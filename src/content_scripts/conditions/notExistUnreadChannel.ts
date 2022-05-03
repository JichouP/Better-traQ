import existUnreadChannel from './existUnreadChannel';

const notExistUnreadChannel = (): boolean => !existUnreadChannel();

export default notExistUnreadChannel;
