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
                shiftKey: z.boolean().optional(),
                ctrlKey: z.boolean().optional(),
                altKey: z.boolean().optional(),
                metaKey: z.boolean().optional(),
                conditions: schemaForType<Condition[]>()(
                  z.array(
                    z.union([
                      z.literal('isSelectedInputOrTextarea'),
                      z.literal('notIsSelectedInputOrTextarea'),
                      z.literal('isSelectedInputOrTextareaEmpty'),
                      z.literal('notIsSelectedInputOrTextareaEmpty'),
                      z.literal('isOpenSidebar'),
                      z.literal('notIsOpenSidebar'),
                      z.literal('homeChannelExists'),
                      z.literal('notHomeChannelExists'),
                      z.literal('unreadChannelExists'),
                      z.literal('notUnreadChannelExists'),
                    ])
                  )
                ),
              })
            ),
            actions: z.array(
              z.union([
                z.literal('clickPreviousPage'),
                z.literal('clickNextPage'),
                z.literal('scrollTopOfNavigationBar'),
                z.literal('clickNavigationSelectorHomeTab'),
                z.literal('clickNavigationBarHomeHomeChannel'),
                z.literal('clickNavigationBarHomeTopUnreadChannel'),
                z.literal('clickNavigationSelectorChannelsTab'),
                z.literal('focusNavigationBarChannelsChannelFilterInput'),
                z.literal(
                  'inputCurrentChannelNameNavigationBarChannelsChannelFilter'
                ),
                z.literal('clickNavigationBarChannelsChannelFilterStar'),
                z.literal('expandNavigationBarChannelsTreeToCurrentChannel'),
                z.literal('clickNavigationBarChannelsNextChannel'),
                z.literal('clickNavigationBarChannelsPreviousChannel'),
                z.literal(
                  'clickNavigationBarChannelsChannelCurrentChannelHash'
                ),
                z.literal('scrollNavigationBarChannelsToCurrentChannel'),
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
                z.literal('clickSidebarContentViewers'),
                z.literal('blurActiveInputElement'),
                z.literal('mouseleaveChannelViewAllMessages'),
                z.literal('sleep100ms'),
              ])
            ),
          })
        )
        .default([]),
    })
    .strict()
);

export default zStorageSchema;
