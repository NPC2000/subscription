import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baidu.tieba',
  name: '百度贴吧',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '数字倒计时广告,圆形倒计时广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: 'TextView[text^="跳过"][text.length<=10]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775906',
            'https://i.gkd.li/import/12566191',
            'https://i.gkd.li/import/12870916',
            'https://i.gkd.li/import/13233500',
          ],
        },
        { key: 1, matches: '[id="com.byted.pangle:id/tt_splash_skip_btn"]' }, // 需要补充快照
        {
          key: 3,
          matches:
            'TextView[text="广告"] - @LinearLayout[clickable=true] > [text="关闭"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13168386',
        },
      ],
    },
    {
      key: 1,
      name: '任意界面-选择不喜欢理由-不感兴趣',
      rules: '@View[text=null] - TextView[text="选择不喜欢理由"][index=0]',
      snapshotUrls: 'https://i.gkd.li/import/12775914',
    },
    {
      key: 2,
      name: '首页/吧内-帖子列表-推荐列表-长得像帖子的广告卡片',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.frs.FrsActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'TextView[text$="广告"] <n RelativeLayout <n LinearLayout - RelativeLayout > LinearLayout > FrameLayout +n RelativeLayout > LinearLayout',
          snapshotUrls: [
            'https://i.gkd.li/import/12775930',
            'https://gkd-kit.gitee.io/import/12840951',
          ],
        },
        {
          key: 1,
          matches:
            'RelativeLayout[childCount=2] > RelativeLayout[childCount=1][clickable=true] > ImageView',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13060892',
        },
      ],
    },
    {
      key: 3,
      name: '某个广告卡片',
      desc: '忘记是哪个卡片了',
      activityIds: [
        'com.baidu.tieba.tblauncher.MainTabActivity',
        'com.baidu.tieba.pb.pb.main.PbActivity',
      ],
      rules:
        'TextView[text=`广告`] <n FrameLayout <n LinearLayout - RelativeLayout @FrameLayout > ImageView', // 需要补充快照
    },
    // key=4 的规则组已经删除, 后续不可添加 key=4 的规则组
    {
      key: 5,
      name: '帖子评论区广告卡片',
      activityIds: [
        'com.baidu.tieba.pb.pb.main.PbActivity',
        'com.baidu.tieba.frs.FrsActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] <n FrameLayout +n RelativeLayout[id="com.baidu.tieba:id/obfuscated"] >n ImageView',
        },
        {
          key: 1,
          matches:
            'TextView[text$="广告"] +n FrameLayout[id="com.baidu.tieba:id/obfuscated"] >n @FrameLayout[clickable=true] > ImageView[id=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775913', // com.baidu.tieba.pb.pb.main.PbActivity
            'https://i.gkd.li/import/13043133', // com.baidu.tieba.tblauncher.MainTabActivity
            'https://i.gkd.li/import/13054256',
          ],
        },
        {
          key: 2,
          matches:
            'TextView[text$="广告"] < RelativeLayout <n LinearLayout - RelativeLayout >n @FrameLayout > ImageView[id=null][desc=null]',
          snapshotUrls: [
            'https://i.gkd.li/import/12775916',
            'https://i.gkd.li/import/12775892', // 指定点击目标为具备 clickable=true 属性的 @FrameLayout，防止在这个快照误触点击收藏
          ],
        },
      ],
    },
    // 在"我的"界面中出现不停点击，问题快照: https://gkd-kit.gitee.io/import/12839905
    // 且现有规则缺少快照核实问题所在,故暂时移除规则
    // {
    //   key: 6,
    //   name: '首页左侧游戏广告小图标',
    //   activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
    //   rules: [
    //     'ImageView[clickable=true] - RelativeLayout[clickable=false][childCount=1] > ImageView[clickable=true]',
    //   ],
    // },

    {
      key: 7,
      name: '升级弹窗',
      activityIds: 'com.baidu.tieba.UpdateDialog',
      rules: '[text="稍后再说"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12496934',
    },
    {
      key: 8,
      name: '帖子底部广告卡片',
      activityIds: 'com.baidu.tieba.pb.pb.main.PbActivity',
      rules:
        'LinearLayout > RelativeLayout > ImageView[id=null][clickable=true]',
      snapshotUrls: 'https://i.gkd.li/import/12775882',
    },
    {
      key: 9,
      name: '应用内广告弹窗',
      activityIds: [
        'com.baidu.tbadk.browser.TBWebContainerActivity',
        'com.baidu.tieba.tblauncher.MainTabActivity',
      ],
      rules: [
        {
          key: 0,
          desc: '点击右上角x关闭',
          matches: 'View[childCount=3] > @View[clickable=true] > Image',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13060891',
        },
        {
          key: 1,
          desc: '点击正下方x关闭',
          matches:
            '@TextView[clickable=true && text=null] - FrameLayout TextView[text="广告"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/13168383',
        },
      ],
    },
    {
      key: 10,
      name: '首页-悬浮小广告',
      activityIds: 'com.baidu.tieba.tblauncher.MainTabActivity',
      rules: 'TextView[text="广告"] + ImageView[clickable=true]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/13115167',
    },
  ],
});
