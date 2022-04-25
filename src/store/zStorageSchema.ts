import z from 'zod';
import schemaForType from '@/utils/schemaForType';

type StorageSchema = {
  migrationVersion: number;
  task: Task[];
};

export const zStorageSchema = schemaForType<StorageSchema>()(
  z
    .object({
      migrationVersion: z.number().default(-1),
      task: z
        .array(
          z.object({
            name: z.string(),
            keybinds: z.array(
              z.object({
                key: z.string(),
                shiftKey: z.boolean(),
                ctrlKey: z.boolean(),
                altKey: z.boolean(),
                metaKey: z.boolean(),
                conditions: schemaForType<Condition[]>()(
                  z.array(
                    z.union([
                      z.literal('isSelectedInputOrTextarea'),
                      z.literal('!isSelectedInputOrTextarea'),
                      z.literal('isOpenSidebar'),
                      z.literal('!isOpenSidebar'),
                      z.literal('homeChannelExists'),
                      z.literal('!homeChannelExists'),
                      z.literal('unreadChannelExists'),
                      z.literal('!unreadChannelExists'),
                    ])
                  )
                ),
              })
            ),
            actions: z.array(
              z.union([
                z.literal('clickPreviousPage'),
                z.literal('clickNextPage'),
                z.literal('clickNavigationSelectorHomeTab'),
                z.literal('clickNavigationBarHomeHomeChannel'),
                z.literal('clickNavigationBarHomeTopUnreadChannel'),
                z.literal('clickNavigationSelectorChannelsTab'),
                z.literal('focusNavigationBarChannelsChannelFilterInput'),
                z.literal(
                  'inputCurrentChannelNameNavigationBarChannelsChannelFilter'
                ),
                z.literal('clickNavigationBarChannelsChannelFilterStar'),
                z.literal(
                  'clickNavigationBarChannelsExpandTreeToCurrentChannel'
                ),
                z.literal('clickNavigationBarChannelsNextChannel'),
                z.literal('clickNavigationBarChannelsPreviousChannel'),
                z.literal(
                  'clickNavigationBarChannelsChannelSelectedChannelHash'
                ),
                z.literal('clickNavigationSelectorActivityTab'),
                z.literal('clickNavigationBarActivityIsNotAllToggleButton'),
                z.literal('clickNavigationBarActivityIsPerChannelToggleButton'),
                z.literal('toggleNavigationBarActivityFollowMode'),
                z.literal('clickNavigationSelectorUsersTab'),
                z.literal('focusNavigationBarUsersUserFilterInput'),
                z.literal('clickNavigationSelectorClipTab'),
                z.literal('clickChannelHeaderChannelNameParentChannelName'),
                z.literal('mouseoverChannelViewMessageListNextMessage'),
                z.literal('mouseoverChannelViewMessageListPreviousMessage'),
                z.literal('scrollToBottomOfChannelView'),
                z.literal('clickChannelViewLatestMessageStampPicker'),
                z.literal('clickChannelView2ndLatestMessageStampPicker'),
                z.literal('clickChannelView3rdLatestMessageStampPicker'),
                z.literal('clickChannelView4thLatestMessageStampPicker'),
                z.literal('clickChannelView5thLatestMessageStampPicker'),
                z.literal('clickChannelView6thLatestMessageStampPicker'),
                z.literal('clickChannelView7thLatestMessageStampPicker'),
                z.literal('clickChannelView8thLatestMessageStampPicker'),
                z.literal('clickChannelView9thLatestMessageStampPicker'),
                z.literal('clickChannelViewLatestMessageContextMenuRemovePin'),
                z.literal('clickChannelViewLatestMessageContextMenuAddPin'),
                z.literal(
                  'clickChannelViewLatestMessageContextMenuClipMessage'
                ),
                z.literal(
                  'clickChannelViewLatestMessageContextMenuEditMessage'
                ),
                z.literal('clickChannelViewLatestMessageContextMenuCopyLink'),
                z.literal(
                  'clickChannelViewLatestMessageContextMenuEmbedMessage'
                ),
                z.literal(
                  'clickChannelViewLatestMessageContextMenuCopyMarkdown'
                ),
                z.literal(
                  'clickChannelViewLatestMessageContextMenuDeleteMessage'
                ),
                z.literal(
                  'clickChannelViewSelectedMessageContextMenuRemovePin'
                ),
                z.literal('clickChannelViewSelectedMessageContextMenuAddPin'),
                z.literal(
                  'clickChannelViewSelectedMessageContextMenuClipMessage'
                ),
                z.literal(
                  'clickChannelViewSelectedMessageContextMenuEditMessage'
                ),
                z.literal('clickChannelViewSelectedMessageContextMenuCopyLink'),
                z.literal(
                  'clickChannelViewSelectedMessageContextMenuEmbedMessage'
                ),
                z.literal(
                  'clickChannelViewSelectedMessageContextMenuCopyMarkdown'
                ),
                z.literal(
                  'clickChannelViewSelectedMessageContextMenuDeleteMessage'
                ),
                z.literal('clickSpoilersOfSelectedMessage'),
                z.literal('focusChannelViewMessageInput'),
                z.literal('clickChannelViewMessageInputStampButton'),
                z.literal('clickSidebarOpener'),
                z.literal('clickSidebarCloser'),
                z.literal('toggleSidebar'),
                z.literal('clickSidebarContentViewers'),
                z.literal('blurActiveInputElement'),
              ])
            ),
          })
        )
        .default([]),
    })
    .strict()
);

export default zStorageSchema;
