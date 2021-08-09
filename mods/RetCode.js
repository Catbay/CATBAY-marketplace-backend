
var RET_CODE = {
  SUCCESS: {code: 0, msg: "成功", jpMsg: "成功しました"},
  FAIL: {code: -1, msg: "失败！", jpMsg: "失敗しました"},
  EMPTY: {code: -2, msg: "暂无数据", jpMsg: "データ無し"},
  CODE_3003: {code: -3, msg: "登录失败", jpMsg: "ログインに失敗しました"},
  NONLOGIN: {code: -6, msg: "请登录", jpMsg: "ログインしてください"},
  PARAMFAIL: {code: -4, msg: "参数错误", jpMsg: "パラメータが正しくありません"},
  PARAMNULL: {code: -5, msg: "参数不能为空", jpMsg: "パラメータが未記入です"},
  NO_MINIPRO: {code: -6, msg: "商户不存在", jpMsg: "パラメータが未記入です"},
  NO_UPDATE: {code: -7, msg: "使用中,禁止修改", jpMsg: "使用中のため変更禁止"},
  LOGINFAIL: {code: 401, msg: "登录失效,请重新登录", jpMsg: "有効期限を経過しました、改めてログインしてください"},
  CODE_1001: {code: 1001, msg: "小程序名称未填写", jpMsg: "ミニプログラム名称が未記入です"},
  CODE_1002: {code: 1002, msg: "小程序头像未提交", jpMsg: "アイコンが未提出です"},
  CODE_1003: {code: 1003, msg: "小程序描述未填写", jpMsg: "紹介文が未記入です"},
  CODE_1004: {code: 1004, msg: "小程序版本未填写", jpMsg: "ミニプログラムバージョンが未記入です"},
  CODE_1005: {code: 1005, msg: "小程序主体信息未填写", jpMsg: "ミニプログラムの主体情報が未記入です"},
  CODE_1006: {code: 1006, msg: "微信公众号未填写", jpMsg: "公式アカウントが未記入です"},
  CODE_1007: {code: 1007, msg: "appid未填写", jpMsg: "appidが未記入です"},
  CODE_1008: {code: 1008, msg: "secretKey未填写", jpMsg: "secretKeyが未記入です"},
  CODE_1009: {code: 1009, msg: "用户名称未填写", jpMsg: "ユーザー名が未記入です"},
  CODE_1010: {code: 1010, msg: "企业id未填写", jpMsg: "企業idが未記入です"},
  CODE_1011: {code: 1011, msg: "商户号未填写", jpMsg: "加盟店商号が未記入です"},
  CODE_1012: {code: 1012, msg: "appId格式不正确", jpMsg: "appidの書式が正しくありません"},
  CODE_2001: {code: 2001, msg: "公司名称未填写", jpMsg: "会社名が未記入です"},
  CODE_2002: {code: 2002, msg: "公司简称未填写", jpMsg: "会社名略称が未記入です"},
  CODE_2003: {code: 2003, msg: "用户注册邮箱未填写", jpMsg: "ユーザーの登録メールアドレスが未記入です"},
  CODE_2004: {code: 2004, msg: "注册时间未填写", jpMsg: "登録日時が未記入です"},
  CODE_2005: {code: 2005, msg: "服务到期时间", jpMsg: "サービス有効期限"},
  CODE_2006: {code: 2006, msg: "计费方式未填写", jpMsg: "料金の計算方法が未記入です"},
  CODE_2007: {code: 2007, msg: "服务类型未填写", jpMsg: "サービスカテゴリーが未記入です"},
  CODE_2008: {code: 2008, msg: "成员最大用户数未填写", jpMsg: "最大ユーザー数が未記入です"},
  CODE_2009: {code: 2009, msg: "注册邮箱验证码未填写", jpMsg: "検証コードが未記入です"},
  CODE_2010: {code: 2010, msg: "来源未填写", jpMsg: "アクセス元が未記入です"},
  CODE_2011: {code: 2011, msg: "公司类型未填写", jpMsg: "会社属性が未記入です"},
  CODE_2012: {code: 2012, msg: "公司规模未填写", jpMsg: "会社規模が未記入です"},
  CODE_2013: {code: 2013, msg: "行业未填写", jpMsg: "業種が未記入です"},
  CODE_2014: {code: 2014, msg: "商务电话未填写", jpMsg: "電話番号が未記入です"},
  CODE_2015: {code: 2015, msg: "移动电话未填写", jpMsg: "携帯番号が未記入です"},
  CODE_2016: {code: 2016, msg: "详细地址1未填写", jpMsg: "住所1が未記入です"},
  CODE_2017: {code: 2017, msg: "详细地址2未填写", jpMsg: "住所2が未記入です"},
  CODE_2018: {code: 2018, msg: "区未填写", jpMsg: "地区が未記入です"},
  CODE_2019: {code: 2019, msg: "城市未填写", jpMsg: "都市が未記入です"},
  CODE_2020: {code: 2020, msg: "州省未填写", jpMsg: "省級が未記入です"},
  CODE_2021: {code: 2021, msg: "邮编未填写", jpMsg: "郵便番号が未記入です"},
  CODE_2022: {code: 2022, msg: "国家未填写", jpMsg: "国家が未記入です"},
  CODE_2023: {code: 2023, msg: "日期格式未填写", jpMsg: "日時が未記入です"},
  CODE_2024: {code: 2024, msg: "时区未填写", jpMsg: "タイムゾーンが未記入です"},
  CODE_2025: {code: 2025, msg: "企业logo未填写", jpMsg: "企業ロゴが未記入です"},
  CODE_2026: {code: 2026, msg: "传真号未填写", jpMsg: "FAX番号が未記入です"},
  CODE_2027: {code: 2027, msg: "邮箱未填写", jpMsg: "メールアドレスが未記入です"},
  CODE_2028: {code: 2028, msg: "网址未填写", jpMsg: "URLが未記入です"},
  CODE_2029: {code: 2029, msg: "公司电话未填写", jpMsg: "会社の電話番号が未記入です"},
  CODE_2030: {code: 2030, msg: "货币未填写", jpMsg: "通貨種類が未記入です"},
  CODE_3001: {code: 3001, msg: "缺少小程序id！", jpMsg: "APPIDが未記入です"},
  CODE_3002: {code: 3002, msg: "缺少微页面id！", jpMsg: "画面IDが未記入です"},
  CODE_3004: {code: 3004, msg: "微页面不存在！", jpMsg: "画面IDが存在しません"},
  CODE_4001: {code: 4001, msg: "修改成功", jpMsg: "変更しました"},
  CODE_4002: {code: 4002, msg: "删除成功", jpMsg: "削除しました"},
  CODE_4003: {code: 4003, msg: "复制成功", jpMsg: "コピーしました"},
  CODE_4004: {code: 4004, msg: "创建公司成功", jpMsg: "会社の作成が成功しました"},
  CODE_4005: {code: 4005, msg: "修改小程序成功", jpMsg: "ミニプログラム名を変更しました"},
  CODE_4006: {code: 4006, msg: "小程序名字未传入", jpMsg: "ミニプログラム名が渡されていません"},
  CODE_4007: {code: 4007, msg: "logoUrl未传入", jpMsg: "ロゴUrlが渡されていません"},
  CODE_4008: {code: 4008, msg: "描述未传入", jpMsg: "紹介文が渡されていません"},
  CODE_4009: {code: 4009, msg: "版本未传入", jpMsg: "バージョンが渡されていません"},
  CODE_4010: {code: 4010, msg: "微信公众号未传入", jpMsg: "公式アカウントが渡されていません"},
  CODE_4011: {code: 4011, msg: "appId未传入", jpMsg: "appidが渡されていません"},
  CODE_4012: {code: 4012, msg: "secretKey未传入", jpMsg: "seretKeyが渡されていません"},
  CODE_4013: {code: 4013, msg: "公司Id未传入", jpMsg: "会社idが渡されていません"},
  CODE_4014: {code: 4014, msg: "商户号未传入", jpMsg: "加盟店番号が渡されていません"},
  CODE_4015: {code: 4015, msg: "公司名称未传入", jpMsg: "会社名が渡されていません"},
  CODE_4016: {code: 4016, msg: "钱方APPID未传入", jpMsg: "QFpay appidが渡されていません"},
  CODE_4017: {code: 4017, msg: "钱方secret未传入", jpMsg: "QFpay secretが渡されていません"},
  CODE_4018: {code: 4018, msg: "钱方erchantId未传入", jpMsg: "QFpay erchantIdが渡されていません"},
  CODE_4019: {code: 4019, msg: "不存在分组", jpMsg: "該当する分類は存在しません"},
  CODE_4020: {code: 4020, msg: "不存在商品", jpMsg: "該当する商品は存在しません"},
  CODE_4021: {code: 4021, msg: "今日此商品已点赞", jpMsg: "今日の「いいね！」は既に押しました"},
  CODE_4022: {code: 4022, msg: "无此商品", jpMsg: "該当商品が見つかりません"},
  CODE_4023: {code: 4023, msg: "小程序无商品", jpMsg: "ミニプログラム内には商品がありません"},
  CODE_4024: {code: 4024, msg: "已打过卡", jpMsg: "既にチェックをつけました"},
  CODE_4025: {code: 4025, msg: "距离过远，打卡失败", jpMsg: "距離が遠すぎるため、チェックが失敗しました"},
  CODE_4026: {code: 4026, msg: "打卡成功", jpMsg: "チェックをつけました"},
  CODE_4027: {code: 4027, msg: "领取福利红包失败", jpMsg: "受領が失敗しました"},
  CODE_4028: {code: 4028, msg: "未全部完成打卡活动", jpMsg: "チェックイベントが全て完成していません"},
  CODE_4029: {code: 4029, msg: "领取福利红包成功", jpMsg: "ラッキーマネーの受領が成功しました"},
  CODE_4030: {code: 4030, msg: "更新商品页模板成功", jpMsg: "商品ページのテンプレートを更新しました"},
  CODE_4031: {code: 4031, msg: "新建商品页模板成功", jpMsg: "商品頁の新規テンプレートを作成しました"},
  CODE_5001: {code: 5001, msg: "资讯模板名称重复", jpMsg: "テンプレート名は既に存在しています"},
  CODE_5002: {code: 5002, msg: "资讯模板组件JSON数据为空", jpMsg: "JSONデータが未記入です"},
  CODE_5003: {code: 5003, msg: "新增资讯模板组件的JSON数据orders有重复", jpMsg: "JSONデータのordersに重複があります"},
  CODE_5004: {code: 5004, msg: "新增资讯模板组件的JSON数据和已存在的orders有重复", jpMsg: "JSONデータは既に存在しているordersと重複があります"},
  CODE_5005: {code: 5005, msg: "资讯模板不存在", jpMsg: "記事テンプレートが存在しません"},
  CODE_5006: {code: 5006, msg: "资讯模板组件不存在", jpMsg: "記事テンプレートモジュールが存在しません"},
  CODE_5007: {code: 5007, msg: "资讯组件不存在", jpMsg: "記事モジュールが存在しません"},
  CODE_5008: {code: 5008, msg: "资讯分组id不能为空", jpMsg: "記事分類idが未記入です"},
  CODE_5009: {code: 5009, msg: "默认资讯分组不能编辑", jpMsg: "デフォルトの記事分類は編集できません"},
  CODE_6001: {code: 6001, msg: "订单明细为空", jpMsg: "注文詳細が未記入です"},
  CODE_6002: {code: 6002, msg: "订单金额计算错误", jpMsg: "注文金額の計算にエラーが発生しました"},
  CODE_6003: {code: 6003, msg: "订单优惠金额计算错误", jpMsg: "割引金額の計算にエラーが発生しました"},
  CODE_6004: {code: 6004, msg: "无可使用的优惠券", jpMsg: "ご利用いただけるクーポンがございません"},
  CODE_6005: {code: 6005, msg: "不满足优惠券使用门槛", jpMsg: "クーポンの利用条件を満たされておりません"},
  CODE_6006: {code: 6006, msg: "订单不存在", jpMsg: "この注文は存在しません"},
  CODE_6007: {code: 6007, msg: "订单待发货，不可关闭", jpMsg: "注文は出荷待ちのため、クローズできません"},
  CODE_6008: {code: 6008, msg: "订单已发货，不可关闭", jpMsg: "商品は既に発送されたため、クローズできません"},
  CODE_6009: {code: 6009, msg: "订单已完成，不可关闭", jpMsg: "注文は既に完了したため、クローズできません"},
  CODE_6010: {code: 6010, msg: "订单不可重复关闭", jpMsg: "注文を再度クローズできません"},
  CODE_6011: {code: 6011, msg: "订单退款中，不可关闭", jpMsg: "注文は返金中のため、クローズできません"},
  CODE_6012: {code: 6012, msg: "订单非待支付状态", jpMsg: "注文は支払い待ちの状態ではありません"},
  CODE_6013: {code: 6013, msg: "优惠券折扣不正确", jpMsg: "クーポンの割引が正しくありません"},
  CODE_6014: {code: 6014, msg: "无优惠券，优惠金额不正确", jpMsg: "クーポンが見つかりません、割引金額が正しくありません"},
  CODE_6015: {code: 6015, msg: "订单核销码错误", jpMsg: "注文の消込コードが正しくありません"},
  CODE_6016: {code: 6016, msg: "小程序核销码错误", jpMsg: "ミニプログラムの消込コードが正しくありません"},
  CODE_6017: {code: 6017, msg: "订单待使用，不可关闭", jpMsg: "注文が未使用のため、クローズできません"},
  CODE_6018: {code: 6018, msg: "订单已完成，不可关闭", jpMsg: "注文は既に完了したため、クローズできません"},
  CODE_6019: {code: 6019, msg: "订单已取消，不可关闭", jpMsg: "注文はキャンセルされたため、クローズできません"},
  CODE_6020: {code: 6020, msg: "小程序核销码存在错误，建议逐一核销", jpMsg: "ミニプログラムの消込コードが正しくありません、逐一消込することをお勧めします"},
  CODE_6021: {code: 6022, msg: "该码已核销，请勿重复操作", jpMsg: "このコードは使用済みです、消込作業を繰り返さないでください"},
  CODE_6022: {code: 6022, msg: "订单状态异常，不可核销", jpMsg: "注文ステータスに異常があるため、消込できません"},
  CODE_6023: {code: 6023, msg: "订单使用时间非今日，不可核销", jpMsg: "注文の利用日は本日ではありません、消込できません"},
  CODE_6024: {code: 6024, msg: "顺丰物流必须填写手机号", jpMsg: "SFエクスプレスには携帯番号の記入が必須です"},
  CODE_6050: {code: -6050, msg: "不存在!", jpMsg: "存在しません"},
  CODE_6051: {code: -6051, msg: "来晚了!优惠券没有了!", jpMsg: "申し訳ございません、クーポンの配布は終了しました。"},
  CODE_6052: {code: -6052, msg: "不在活动范围内", jpMsg: "イベント対象外です"},
  CODE_6053: {code: -6053, msg: "领取达到上限", jpMsg: "受領回数の上限を達しました"},
  CODE_6054: {code: -6054, msg: "只限新用户!", jpMsg: "新規ユーザー限定です"},
  CODE_6055: {code: -6055, msg: "只限老用户!", jpMsg: "既存ユーザー限定です"},
  CODE_6056: {code: -6056, msg: "无可用优惠券!", jpMsg: "ご利用いただけるクーポンはございません"},
  CODE_6501: {code: 6501, msg: "已有参赛作品，不可再修改比赛信息", jpMsg: "提出済み作品がございますため、参加情報は変更できません"},
  CODE_6502: {code: 6502, msg: "已有参赛作品，不可删除比赛信息", jpMsg: "提出済み作品がございますため、参加情報は削除できません"},
  CODE_6503: {code: 6503, msg: "比赛时间不符合：现在 < 开始时间 < 结束时间", jpMsg: "開催時間が正しくありません：現在<開始時間<終了時間に設定してください"},
  CODE_6504: {code: 6504, msg: "无比赛信息", jpMsg: "大会情報はございません"},
  CODE_6505: {code: 6505, msg: "比赛未开始，无法报名", jpMsg: "開催前のため、エントリーできません"},
  CODE_6506: {code: 6506, msg: "比赛已结束，无法报名", jpMsg: "終了したため、エントリーできません"},
  CODE_6507: {code: 6507, msg: "已参赛，无法重复报名", jpMsg: "参加済みのため、重複エントリーはできません"},
  CODE_12: {code: 12, msg: "小程序不存在", jpMsg: "ミニプログラムが存在しません"},
  CODE_14: {code: 14, msg: "公司不存在", jpMsg: "会社が存在しません"},
  CODE_15: {code: 15, msg: "资讯不存在", jpMsg: "記事が存在しません"},
  CODE_16: {code: 16, msg: "资讯分组不存在", jpMsg: "記事分類が存在しません"},
  CODE_17: {code: 17, msg: "资讯模板不存在", jpMsg: "記事テンプレートが存在しません"},
  CODE_18: {code: 18, msg: "小程序id不可更改", jpMsg: "appidの変更は禁止です"},
  CODE_19: {code: 19, msg: "JSON解析失败", jpMsg: "JSONの解析が失敗しました"},
  CODE_20: {code: 20, msg: "用户不存在", jpMsg: "ユーザーが存在しません"},
  CODE_21: {code: 21, msg: "商品不存在", jpMsg: "商品が存在しません"},
  CODE_22: {code: 22, msg: "商品库存不足", jpMsg: "商品が在庫不足しています"},
  CODE_23: {code: 23, msg: "商品规格不存在", jpMsg: "商品規格が存在しません"},
  CODE_24: {code: 24, msg: "地址不存在", jpMsg: "住所が存在しません"},
  CODE_25: {code: 25, msg: "门店不存在", jpMsg: "店舗が存在しません"},
  CODE_26: {code: 26, msg: "抱歉，用户信息异常", jpMsg: "申し訳ございません、ユーザー情報に異常がございます"},
  CODE_27: {code: 27, msg: "抱歉，身份认证数已达最大值", jpMsg: "申し訳ございません、身分証明書は登録可能の最大個数に達しました"},
  CODE_28: {code: 28, msg: "抱歉，身份证号不可重复认证", jpMsg: "申し訳ございません、同じ身分証明書番号は重複認証できません"},
  CODE_29: {code: 29, msg: "抱歉，该身份信息异常", jpMsg: "申し訳ございません、身分証明書情報に異常がございます"},
  CODE_30: {code: 30, msg: "默认中，请勿重复设置", jpMsg: "null"},
  CODE_31: {code: 31, msg: "验证成功", jpMsg: "認証が成功しました"},
  CODE_62: {code: 62, msg: "验证失败", jpMsg: "認証が失敗しました"},
  CODE_32: {code: 32, msg: "抱歉，您无删除该条记录的权限", jpMsg: "申し訳ございません、この記録の削除権限はございません"},
  CODE_33: {code: 33, msg: "抱歉，该地址已存在", jpMsg: "申し訳ございません、この住所は既に存在しています"},
  CODE_34: {code: 34, msg: "抱歉，地址数已达最大值", jpMsg: "申し訳ございません、住所の登録数は上限を達しました"},
  CODE_35: {code: 35, msg: "抱歉，该地址信息异常", jpMsg: "申し訳ございません、この住所情報に異常がございます"},
  CODE_36: {code: 36, msg: "抱歉，地址信息不可重复", jpMsg: "申し訳ございません、同じ住所情報を重複登録できません"},
  CODE_37: {code: 37, msg: "抱歉，订单金额计算异常-1", jpMsg: "申し訳ございません、注文金額の計算に異常がございます-1"},
  CODE_38: {code: 38, msg: "抱歉，订单金额计算异常-2", jpMsg: "申し訳ございません、注文金額の計算に異常がございます-2"},
  CODE_39: {code: 39, msg: "抱歉，商品价格已发生变化", jpMsg: "申し訳ございません、商品価格が変わりました"},
  CODE_40: {code: 40, msg: "抱歉，商品规格信息异常", jpMsg: "申し訳ございません、商品規格に異常がございます"},
  CODE_41: {code: 41, msg: "抱歉，订单信息异常", jpMsg: "申し訳ございません、注文情報に異常がございます"},
  CODE_42: {code: 42, msg: "请填写快递单号", jpMsg: "追跡番号をご入力ください"},
  CODE_43: {code: 43, msg: "抱歉，商品库存不足", jpMsg: "申し訳ございません、商品在庫が不足しています"},
  CODE_44: {code: 44, msg: "抱歉，商品信息异常", jpMsg: "申し訳ございません、商品情報に異常がございます"},
  CODE_45: {code: 45, msg: "抱歉，所选订单状态异常", jpMsg: "申し訳ございません、選択中の注文ステータスに異常がございます"},
  CODE_46: {code: 46, msg: "无效操作", jpMsg: "無効な操作です"},
  CODE_47: {code: 47, msg: "今日已提醒过卖家", jpMsg: "本日は既に催促しました"},
  CODE_48: {code: 48, msg: "请选择取消原因", jpMsg: "キャンセル理由をご選択ください"},
  CODE_49: {code: 49, msg: "抱歉，优惠金额异常", jpMsg: "申し訳ございません、割引金額に異常がございます"},
  CODE_50: {code: 50, msg: "抱歉，开始时间不能大于或等于结束时间", jpMsg: "申し訳ございません、開始時間は終了時間と同じ、或いは超過することがはできません"},
  CODE_51: {code: 51, msg: "抱歉，订单不可删除", jpMsg: "申し訳ございません、この注文は削除できません"},
  CODE_52: {code: 52, msg: "抱歉，订单金额计算异常-3", jpMsg: "申し訳ございません、注文金額の計算に異常がございます-2"},
  CODE_53: {code: 53, msg: "抱歉，订单不在可售后状态", jpMsg: "申し訳ございません、この注文はアフターサービス対応可能ステータスではございません-2"},
  CODE_54: {code: 54, msg: "抱歉，退款金额不可大于支付金额", jpMsg: "申し訳ございません、返金金額は注文金額を超過できません"},
  CODE_55: {code: 55, msg: "订单不支持再次发起售后申请", jpMsg: "この注文は、アフターサービスの再依頼に対応していません"},
  CODE_56: {code: 56, msg: "订单超过售后时间啦", jpMsg: "この注文は、アフターサービスの対応期間を経過しました"},
  CODE_57: {code: 57, msg: "订单并未申请售后", jpMsg: "この注文に、アフターサービスを依頼されていません"},
  CODE_58: {code: 58, msg: "订单已进入售后，无法撤销", jpMsg: "この注文は、アフターサービス対応中のため、撤回できません"},
  CODE_59: {code: 59, msg: "请填写处理备注", jpMsg: "処理作業のメッセージをご記入ください"},
  CODE_60: {code: 60, msg: "请完善收货信息", jpMsg: "お届け先情報を補足してください"},
  CODE_61: {code: 61, msg: "请上传完整的身份信息进行验证", jpMsg: "完全な身分証明書情報をアップロードしてください"},
  CODE_95: {code: 95, msg: "重复收藏", jpMsg: "お気に入りに重複がございます"},
  CODE_97: {code: 97, msg: "优惠券领取超过上限", jpMsg: "受領回数の上限を超過しました"},
  CODE_98: {code: 98, msg: "优惠券领取失败", jpMsg: "クーポンの受領が失敗しました"},
  CODE_96: {code: 96, msg: "优惠券数量有限，没有了", jpMsg: "枚数限定クーポンの配布は既に終了しました"},
  CODE_99: {code: 99, msg: "取货码错误", jpMsg: "受取コードが正しくありません"},
  CODE_100: {code: 100, msg: "输入信息与照片识别信息不符", jpMsg: "入力情報と写真識別情報は異なります、ご確認ください"},
  CODE_101: {code: 101, msg: "已到达最大购买量", jpMsg: "購入可能な最大件数を達しました"},
  CODE_102: {code: 102, msg: "请填写整数", jpMsg: "整数をご入力ください"},
  CODE_103: {code: 103, msg: "关闭订单异常，请联系客服或管理员！", jpMsg: "注文のクローズに異常がございます、カスタマサービス或いは管理員にご連絡ください"},
  CODE_13: {code: -13, msg: "统一下单错误！", jpMsg: "一括注文にエラーが発生しました"},
  CODE_80: {code: -80, msg: "小程序创建失败！", jpMsg: "ミニプログラムの作成が失敗しました"},
  CODE_81: {code: -81, msg: "小程序修改失败！", jpMsg: "ミニプログラムの変更が失敗しました"},
  CODE_82: {code: -82, msg: "公司名称或者邮箱已经存在！", jpMsg: "会社名またはメールアドレスは既に存在しています"},
  CODE_3000: {code: -3000, msg: "格式不正确", jpMsg: "書式が正しくありません"},
  CODE_10001: {code: -10001, msg: "开始时间必须距离当前时间至少10分钟间隔", jpMsg: "開始時間は現在時間の10分後以降に設定する必要があります"},
  CODE_10002: {code: -10002, msg: "结束时间必须大于开始时间", jpMsg: "終了時間は開始時間の後に設定する必要があります"},
  CODE_10003: {code: -10003, msg: "满减优惠券，使用门槛必须大于0", jpMsg: "条件付きクーポン、利用条件は0以上のご購入です"},
  CODE_10004: {code: -10004, msg: "优惠券已失效", jpMsg: "クーポンは失効しました"},
  CODE_10005: {code: -10005, msg: "已有领取，不可删除", jpMsg: "受領済みのユーザーがいるため、削除できません"},
  CODE_10006: {code: -10006, msg: "所选时间必须大于现在", jpMsg: "現在時間の後を選択する必要があります"},
  CODE_10007: {code: -10007, msg: "优惠未开始", jpMsg: "イベントは開始されていません"},
  CODE_10008: {code: -10008, msg: "优惠已结束", jpMsg: "イベントは終了しました"},
  CODE_10009: {code: -10009, msg: "优惠券不存在", jpMsg: "クーポンが存在しません"},
  CODE_10010: {code: -10010, msg: "关联使用中", jpMsg: "分類中の素材が使用されています"},
  CODE_10011: {code: -10011, msg: "ICON分组不存在", jpMsg: "素材分類が存在しません"},
  CODE_10012: {code: -10012, msg: "ICON分组已下架", jpMsg: "アイコン分類が使用できません"},
  CODE_10013: {code: -10013, msg: "素材分组不存在", jpMsg: "素材分類が存在しません"},
  CODE_10014: {code: -10014, msg: "素材分组已下架", jpMsg: "素材分類が使用できません"},
  CODE_10015: {code: -10015, msg: "ICON不存在", jpMsg: "アイコンが存在しません"},
  CODE_10016: {code: -10016, msg: "素材不存在", jpMsg: "素材が存在しません"},
  CODE_40002: {code: -40002, msg: "不合法的凭证类型", jpMsg: "証明書類は無効です"},
  CODE_8000: {code: 8000, msg: "已支付", jpMsg: "支払い済み"},
  CODE_8001: {code: 8001, msg: "交易中", jpMsg: "決済中"},
  CODE_8002: {code: 8002, msg: "订单已支付成功", jpMsg: "注文の支払いは成功しました"},
  CODE_8003: {code: 8003, msg: "支付成功", jpMsg: "支払い成功"},
  CODE_8004: {code: 8004, msg: "交易中", jpMsg: "決済中"},
  CODE_8005: {code: 8005, msg: "已退款", jpMsg: "返金済み"},
  CODE_8006: {code: 8006, msg: "退款中", jpMsg: "返金中"},
  CODE_8007: {code: 8007, msg: "退款渠道异常", jpMsg: "返金ルート異常"},
  CODE_8008: {code: 8008, msg: "退款失败", jpMsg: "返金失敗"},
  CODE_8101: {code: 8101, msg: "UNIXPAY支付状态异常", jpMsg: "UNIXPAY決済ステータス異常"},
  CODE_9001: {code: 9001, msg: "品牌商资料未通过审核", jpMsg: ""},
  CODE_10000: {code: -10000, msg: "end", jpMsg: "null"}
};

var RET_CODE_STR = null;

function get_obj(code) {
  return RET_CODE[code];
}

function get_str(code) {
  if (RET_CODE_STR == null) {
    var ret_code_col = new Object();
    Object.entries(RET_CODE).forEach((kv) => {
      ret_code_col[kv[0]] = JSON.stringify(kv[1]);
    });
    RET_CODE_STR = ret_code_col;
  }
  return RET_CODE_STR[code];
}

Object.freeze(RET_CODE);

function allRetCodeToStr() {
  var retStrObj = new Object();
  Object.entries(RET_CODE).forEach((kv) => {
    retStrObj[kv[0]] = JSON.stringify(kv[1]);
  });
  return retStrObj;
}

var RET_CODE_STR = allRetCodeToStr();

function successMessage(results) {
  var resultObj = Object.assign({}, RET_CODE.SUCCESS, {results: results});
  return JSON.stringify(resultObj);
}

function retMessage(code, results) {
  var codeObj = RET_CODE_STR[code] || RET_CODE_STR.FAIL;
  var resultObj = Object.assign({}, codeObj, {results: results});
  return JSON.stringify(resultObj);
}

function locateCodeStr(code) {
  return RET_CODE_STR[code] || RET_CODE_STR.FAIL;
}

function locateCode(code) {
  return RET_CODE[code] || RET_CODE.FAIL;
}

exports.RET_CODE = RET_CODE;
exports.CODE_STR = RET_CODE_STR;
exports.getObj = get_obj;
exports.getStr = get_str;
exports.successMessage = successMessage;
exports.retMessage = retMessage;
exports.locateCode = locateCode;
exports.locateCodeStr = locateCodeStr;
