import homeChannelExists from './homeChannelExists';

const notHomeChannelExists = (): boolean => !homeChannelExists();

export default notHomeChannelExists;
