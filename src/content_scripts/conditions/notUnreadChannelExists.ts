import unreadChannelExists from './unreadChannelExists';

const notUnreadChannelExists = (): boolean => !unreadChannelExists();

export default notUnreadChannelExists;
