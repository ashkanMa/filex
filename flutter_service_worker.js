'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "612136cc05781cadb34552f559dcfb61",
"assets/assets/animation/loading.json": "e3c7b832180e3ef831fdfb8e5ea7b8ba",
"assets/assets/font/LexendDeca-Bold.ttf": "500804705a4b5fe2cc07a03f2723401b",
"assets/assets/font/LexendDeca-Light.ttf": "121c9680106753ae1e9f57e2f47c6f8f",
"assets/assets/font/LexendDeca-Medium.ttf": "dc2cf8ed63830eae7e97aa648c44dbdd",
"assets/assets/font/LexendDeca-Regular.ttf": "8a9ae28cfa1ac712747029a70bcd06ea",
"assets/assets/font/product-sans-bold-italic.ttf": "79750b1d82b2558801373d62dd7e5280",
"assets/assets/font/product-sans-bold.ttf": "dba0c688b8d5ee09a1e214aebd5d25e4",
"assets/assets/font/product-sans-italic.ttf": "e88ec18827526928e71407a24937825a",
"assets/assets/font/product-sans-regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83",
"assets/assets/font/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/font/Roboto-Italic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/assets/font/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/font/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/image/about_ic.png": "3a6ef26e35f516533ceb089788ab4206",
"assets/assets/image/add_card_icon.png": "f58174704f7692736d1c8ffe1327cb6f",
"assets/assets/image/add_photo.png": "8b81e58822f50601e0b7f011c2001802",
"assets/assets/image/add_user.png": "1696bf299cc16662ecc8f5792b19250d",
"assets/assets/image/arrow_back.png": "316802b07c69cd2611089465ae0f2036",
"assets/assets/image/avatar.png": "7effd67506399d383baf436dd3e1de07",
"assets/assets/image/azercell.png": "7b75d5ca9fffb939ace7e1604a9b36bf",
"assets/assets/image/bakcell.png": "56d730e244f4904620cb6d1bc7583e70",
"assets/assets/image/barcode_scanner.png": "234f4fc43129260950fb9efad14f46cd",
"assets/assets/image/bear.png": "5bc1e4c50b3e0d5265dfc0fb685d0b6c",
"assets/assets/image/bell.png": "5773c83889ad45f8fdd2f845dea0c914",
"assets/assets/image/bottom_sheet_dungle.png": "d3db26de12fb19df13c6ff442ded91ca",
"assets/assets/image/camera.png": "84cf9ef61a6dedbd96cfcdfae09fe30d",
"assets/assets/image/category.png": "f43350570a4ab984e67551041123356a",
"assets/assets/image/chart.png": "b6eb92e22a5f8b64be459a291de2d7fe",
"assets/assets/image/coins.png": "c16fb075dfb7c673718e1641e68c5ccc",
"assets/assets/image/confirm.png": "717939a68ec45d6b077f7486df0278e6",
"assets/assets/image/credit_machine.png": "3a3338c278e07bd97583504fc2783655",
"assets/assets/image/curve_bg.png": "63f65d7b57b140ef94803b6cd5278e7b",
"assets/assets/image/delete.png": "455ba9790af17249fe1395af6ac705c5",
"assets/assets/image/discount.png": "87dcea6f623007bae7c8b8063ac81507",
"assets/assets/image/e-bank.jpg": "d27cbd618268d167ceab6fd4a8636e4c",
"assets/assets/image/edit.png": "f2fd59ad7e380dda811417111c61e3b3",
"assets/assets/image/electricity.png": "2fdcdecbe216cc39778bebbde362018d",
"assets/assets/image/filex_1024.png": "ff35162830c9677fa0c220f65104a811",
"assets/assets/image/filex_coin.png": "299776017fca25cf58012e1d8d828786",
"assets/assets/image/filex_wallet.png": "1ce3e1d128bf026e0c553dd244a1ea7c",
"assets/assets/image/finger.png": "1ab74fc30848b53fa0a8fae92f18d14c",
"assets/assets/image/forward_arrow_back.png": "378e396a321d53edfd8f638857dc82d5",
"assets/assets/image/frame.png": "bc2423b0449c67fd641c09d6727768b8",
"assets/assets/image/gas.png": "0ade16c827b45af96d30ccb797965258",
"assets/assets/image/header.png": "c695e999522097ff6cd00a5abfbbfe96",
"assets/assets/image/heart": "0fabcc9bffc8208bdd7a46fa3ef599b1",
"assets/assets/image/insta.png": "0726b54394721f71eac0dd4d90b7c05d",
"assets/assets/image/ipg_demo.png": "b07690aef7845677a476fcb2cd9e8b37",
"assets/assets/image/loc_icon.png": "add4473da599dc9047929ad22911d83d",
"assets/assets/image/logout": "5ff99a7dc3bfdc6ef1907aa5d156cb37",
"assets/assets/image/logout_ic.png": "84a3c45195404b3e1b9205a09b6b26f6",
"assets/assets/image/logo_kodiak.png": "13f25eeb9d34dd153106b21a3afcdda7",
"assets/assets/image/logo_kodiak_blue.png": "eb21c899f6832577f1cb3fa58ec0cbbd",
"assets/assets/image/manat.png": "31aa727e940436ca2b7d28e97afbce3a",
"assets/assets/image/map_aim.png": "deb50116778d9b965b67cb86bc9eb35f",
"assets/assets/image/message": "0361def7d59c46e0812dc7b76ab158a1",
"assets/assets/image/message.png": "b1d6a0b7050cf34071c40352b9639308",
"assets/assets/image/mokhaberat.png": "bc0b718f1122bd8ec8a259b5d59b83b8",
"assets/assets/image/nar.png": "c7cb0a0be514a7c062abe92cd4718f1d",
"assets/assets/image/nationalCard.png": "80a857bcc7fc0fafb5bb9740d6d0f47b",
"assets/assets/image/nationalCard2.png": "f97946fd15297df053073440bf606ae5",
"assets/assets/image/notification.png": "747a237ea862171f54e17c8596b16f32",
"assets/assets/image/notif_ic.png": "c34014544e47ccaab02b4cae13ab878c",
"assets/assets/image/paper.png": "05ac3ce869a4df11f089836920a8b530",
"assets/assets/image/party_popper.png": "45de576f5d52f9b10c1f002f60bbcaec",
"assets/assets/image/password.png": "88b58d3cc3b07a061fb0dddff49a5ec5",
"assets/assets/image/phone.png": "a452beb95f707ff0ca9ea22789f22642",
"assets/assets/image/play.png": "e007ad179c812b92a916ffa80bb0f951",
"assets/assets/image/profile.png": "39c41a0efef24064df59c00c455c6883",
"assets/assets/image/profile2.png": "04dcdbcddbdb7adf0c6fa070ae653f84",
"assets/assets/image/progress_step1.png": "53d1588724796c5d40bace4b003b687a",
"assets/assets/image/progress_step2.png": "c9ecb2e0829d22a11bb003611c941b1e",
"assets/assets/image/progress_step3.png": "05022231e76b3a4d861aefe9e2990d7f",
"assets/assets/image/public_ic.png": "a073b644ff928417fd9925b2ae2782e1",
"assets/assets/image/question_mark.png": "f050d61d662c8fa09a447061d5cdc8ab",
"assets/assets/image/question_mark2.png": "66411afe3cfb69a5c13621ca3862b43a",
"assets/assets/image/recording_bg.png": "5c35adffcc4e888854172897a5587283",
"assets/assets/image/rectangle.png": "b88ff8aec9525e333ba8075766f20ca7",
"assets/assets/image/right_arrow.png": "21a47c4fd3bb28d0f9c3cf6a1b4d8ca3",
"assets/assets/image/right_arrow_grey": "21a47c4fd3bb28d0f9c3cf6a1b4d8ca3",
"assets/assets/image/sample_avatar.png": "95f63218f73365ef54a925c3f7dd8866",
"assets/assets/image/star.png": "1b04e6d5f7a9be14c8a8e32fbf3662ba",
"assets/assets/image/step1.png": "7d7e36312b62f55dbd2043d18e06ee63",
"assets/assets/image/step2.png": "9f943c3a5f48d1a97218076e7861a165",
"assets/assets/image/step3.png": "29f23f1976a1ca8175bd9c199f0cc00e",
"assets/assets/image/step4.png": "e9732d903c76b3b90f2f8f28cc85a7aa",
"assets/assets/image/support_ic.png": "870a46a1e6b92a800d4464eb5e3566b2",
"assets/assets/image/swap.png": "dab70b8bbcf5604737666263a219182b",
"assets/assets/image/ticket.png": "2c88e6678fda2c75758c85371e7a89c1",
"assets/assets/image/tick_icon.png": "1f9297ce4537af41aaf4521bc0c73ed8",
"assets/assets/image/tick_square.png": "5840b52ff43155be577153137bc948c1",
"assets/assets/image/transparent1_bg.png": "d7ab3cae77b3bdb728470093d9f9e312",
"assets/assets/image/user.png": "50331ed93170e28374b4d96f8f64b987",
"assets/assets/image/user_profile_ic.png": "4772d1323b91f68702e05982f3b97d9c",
"assets/assets/image/vb_card2card.png": "72c9b0895c9f266f88b778f6a6a4da57",
"assets/assets/image/vb_home.png": "11de2ad694de712643f87cab9f7ac892",
"assets/assets/image/vb_settings.png": "a6bd286b6328e5c1767841b51ebb4d5e",
"assets/assets/image/vb_wallet.png": "6d4bc537c2403deea198d331f1bbebf4",
"assets/assets/image/video.png": "97a41382c64c685cde0a94416ffaa15b",
"assets/assets/image/water.png": "0534d538037cd90f3322c75ff95d9c80",
"assets/assets/image/white_profile.png": "42646ebe4d7a8312aa8c9e9d298c5947",
"assets/assets/locale/az.json": "18745c3176657130953856e41b20c090",
"assets/assets/locale/en.json": "1006adfbfc6b2779ce0ecaa6ce14acd9",
"assets/assets/locale/fa.json": "7fdfbb64dd51fc738576db393daa40a7",
"assets/assets/svg/add_blue.svg": "8557dfd347974260cd7ecc5bf078ec94",
"assets/assets/svg/add_photo.svg": "ed27a43cac55a8a00523260b8d5f00ce",
"assets/assets/svg/add_user.svg": "8a4228e547863a4d14410665a95ee1b2",
"assets/assets/svg/arrow_back.svg": "cd11f51550afdf064c3e68fb10219160",
"assets/assets/svg/arrow_bottom.svg": "2530b463e08f93f8526c7ce1c1eb3c3d",
"assets/assets/svg/barcode_scanner.svg": "759f091a6da2fa61abedceb16215381b",
"assets/assets/svg/bear.svg": "a2bb13396ba38d78dfc8caca150f0b98",
"assets/assets/svg/bear2.svg": "7f43fdfe455780bae63711524dd30e43",
"assets/assets/svg/bill_payment.svg": "397be0db0f54b6e385cc166d29dc4f32",
"assets/assets/svg/blue_circle.svg": "01ad2427384c1db942ded62aaa0f9e60",
"assets/assets/svg/bookmark_filled.svg": "9348beceed72e14e08a0b7d1bb35d015",
"assets/assets/svg/bookmark_unfilled.svg": "86a48f46949db56be205f5b5ce24f900",
"assets/assets/svg/camera.svg": "4d3eaa7aa6a3ed2822bde36a16c85f21",
"assets/assets/svg/category2.svg": "09c93f0957f7fb8863f42fb3208bbc83",
"assets/assets/svg/cescent.svg": "3b040daa038b5b5c8adc022c46340469",
"assets/assets/svg/charge.svg": "058365c319592e14ae649957d781197e",
"assets/assets/svg/charge2.svg": "9495ede4db3c822eace0b3fd1db6987e",
"assets/assets/svg/chart.svg": "18f5a4dcbfcb295703b9d97c658b8a00",
"assets/assets/svg/close_black.svg": "29a4ba2bc1728b15a1865f3103502b10",
"assets/assets/svg/close_square.svg": "2d3250bcbcea57f620b9c0ee6e23312a",
"assets/assets/svg/confirm.svg": "b30490c16ed4021a12cd16e43a83ee67",
"assets/assets/svg/contacts.svg": "56e4685e8e89f9b301745871eedf845e",
"assets/assets/svg/curve_bg.svg": "e5ba1616bf152a501d5ab2e05f02e7ff",
"assets/assets/svg/curve_header.svg": "55f90637a4194c91129b5e77db0ba8cf",
"assets/assets/svg/delete.svg": "d0d8e7963f1cb9a0b9caa4df1777e839",
"assets/assets/svg/delete2.svg": "0686587cabcb6478e279010b3bf1576a",
"assets/assets/svg/delete_contact_icon.svg": "55110a669fd5ab3866d758ba282705d1",
"assets/assets/svg/discount.svg": "4907e84be62ecc784d09ba04b976ec94",
"assets/assets/svg/discount2.svg": "0764996cdda6e2dcd0ffb2f37a34e6c2",
"assets/assets/svg/done.svg": "c06e8e86430dd0117364ffbd732c2ef7",
"assets/assets/svg/edit.svg": "8e9e7998a8eada4c24bddb7938dea681",
"assets/assets/svg/edit2.svg": "1a0fed57d5c1bd96090d1d6ebf68e15e",
"assets/assets/svg/empty.svg": "5c7328807a2312f80a3b5c87eb5d8187",
"assets/assets/svg/empty_file.svg": "2251fe06460f7d8cd680b535151742b3",
"assets/assets/svg/error_data.svg": "782313200f6a5bacb59abd73799de144",
"assets/assets/svg/error_snapshot.svg": "ec2fc447b4cf1751e248829e1da49e68",
"assets/assets/svg/event_available_white.svg": "78a4442ce479df4e21ac8f13a4f6193f",
"assets/assets/svg/filter.svg": "5ed8779d6ec715fb5974797f44dab56a",
"assets/assets/svg/finger.svg": "ab30f1ac8c3b83bad15fdc8747872c33",
"assets/assets/svg/forward_arrow_back.svg": "d598ada6cf51c9a58e3be50d2bb5fdf4",
"assets/assets/svg/globe.svg": "b32e2e7d67c1a5e65c500f5ca7531ee5",
"assets/assets/svg/gray_arrow_back.svg": "ea2837703e812af658da455abd3cb921",
"assets/assets/svg/green_tick.svg": "44c432fb7e7729b0f1cd6484cfee29ea",
"assets/assets/svg/header.svg": "ced453bad872d9bc64b01630ca1008d9",
"assets/assets/svg/header2.svg": "b6abad4bd0dc40f0da234f6b480a9f46",
"assets/assets/svg/home_off.svg": "7d8a0de4224cf989f8936903ff7b816a",
"assets/assets/svg/home_on.svg": "ae4f874e9a81d6d5356096476b972586",
"assets/assets/svg/instagram.svg": "4e9ff73b3c9b1d69dada0aa75ddfdb4b",
"assets/assets/svg/kodiak.svg": "f734bf0d60c07bfd4777c1091f9e2f88",
"assets/assets/svg/linkedin.svg": "e37a2b0ddea5a71b59b2b5012d49aad9",
"assets/assets/svg/manat.svg": "886b393d9ab010a4045872695105160c",
"assets/assets/svg/menat_icon.svg": "461da9426eb754ee085b7bb679e43764",
"assets/assets/svg/merchant_management.svg": "ea90e645c75dfab3055bcb85fac46460",
"assets/assets/svg/message.svg": "3f223681df414ff36ce335c216c33099",
"assets/assets/svg/national_card.svg": "c817d6af7147fca0744b6bb2180ea664",
"assets/assets/svg/notification.svg": "d19030a401c992c530df22e288a476ab",
"assets/assets/svg/other_serv.svg": "2d6d77fd04565eef3a5cf5c0f933348d",
"assets/assets/svg/other_services.svg": "6a9263c1120dda68bd6e793439e49cf8",
"assets/assets/svg/party_popper.svg": "5b4f2d1134dfbe5907f0cf2d7f9e2627",
"assets/assets/svg/password.svg": "f48283aad9346ec37ad02158f0fba595",
"assets/assets/svg/pending_actions_blue.svg": "4352f552cce172e10382d6a75491d488",
"assets/assets/svg/phone.svg": "0588709047ab5f40ab98a14613dee421",
"assets/assets/svg/play.svg": "bab0657a92dfdd04722ca3d60d52fa04",
"assets/assets/svg/profile.svg": "fd29d3b3e1d6e7a13c4b033fe95f16a9",
"assets/assets/svg/profile2.svg": "72a4a05cccd2b4ad9748e291dae6ce36",
"assets/assets/svg/profile3.svg": "c340d7d4e139747c18957a286771a342",
"assets/assets/svg/qrcode.svg": "9d0b58052a80fd20ed1bdc776e746324",
"assets/assets/svg/question_mark.svg": "f76ccff1fb1c4e037d680663eb1adfbc",
"assets/assets/svg/question_mark2.svg": "820a0b1a48ca084964545a5290b1b119",
"assets/assets/svg/red_tick.svg": "4a207743249ebec62e90c992608714f5",
"assets/assets/svg/scan.svg": "28223b11f5ea2b7e615d73a6ca54b77f",
"assets/assets/svg/send.svg": "1d38893ceee09de84e11fac7c3dab73a",
"assets/assets/svg/setting_off.svg": "e992b467641e827dd99fe1ffa303e36e",
"assets/assets/svg/setting_on.svg": "544894400c57e0fcef54cc1b62d62306",
"assets/assets/svg/share.svg": "ff794a55af095f7a00b0a128cc6f295b",
"assets/assets/svg/share2.svg": "87767c1617154717e650f4ef60d572c0",
"assets/assets/svg/shieldDone.svg": "3990be47f8e3fdf9a7cd83f4d2e571c6",
"assets/assets/svg/small_bill.svg": "b317dc42551a828694eab0a3fcee4889",
"assets/assets/svg/small_deposit.svg": "db181e138206fe1c383b54ce4ee29d09",
"assets/assets/svg/small_other_service.svg": "b13f68cf3d3d9395a533a0641c25fb0c",
"assets/assets/svg/small_transfer.svg": "4ff311bce89d86e4395755a2acb0ae03",
"assets/assets/svg/splash_mask.svg": "2b9fe1ee697bdfda9058079fd617b7d0",
"assets/assets/svg/star.svg": "ed70481f7a105991bd0cfefb58fae42f",
"assets/assets/svg/successful.svg": "a516f9020289a106004dd3c9e3f02fb6",
"assets/assets/svg/successfull_icon.svg": "a3d3ba24676ddf4291e8aae98670cd7e",
"assets/assets/svg/swap.svg": "c5e3ee22bde7581ee97440284ba60fa8",
"assets/assets/svg/swap2.svg": "1b11c7ce718a80e6782b14be9e5c6789",
"assets/assets/svg/swap3.svg": "1a8a90f4ac67eac7f86ec2cdfdbcc6e0",
"assets/assets/svg/ticket.svg": "567b2ea835d3270b6967c90a186e084b",
"assets/assets/svg/ticket2.svg": "86dce2b0f506b0e456e5dda2aa0a7db8",
"assets/assets/svg/ticket_star.svg": "8de4bbf470146f3289531e9836ab9ceb",
"assets/assets/svg/tick_square.svg": "44c432fb7e7729b0f1cd6484cfee29ea",
"assets/assets/svg/timelapse.svg": "027dac3e723fc356874028b6218ddbde",
"assets/assets/svg/transf.svg": "1a8a90f4ac67eac7f86ec2cdfdbcc6e0",
"assets/assets/svg/transfer.svg": "9867a3f32a057b312d6bd59ae07817a8",
"assets/assets/svg/transfer2.svg": "c43549fd2dd63063aac54b3f31f2a02b",
"assets/assets/svg/twitter.svg": "b4362691b997da1e3f65d1e6ae801a39",
"assets/assets/svg/unsuccessfull_icon.svg": "ae8ec9864bf6d0fb3e3373e764352060",
"assets/assets/svg/user.svg": "b617812b16c51ad36f751dff30c381fd",
"assets/assets/svg/vb_wallet.svg": "ebb2fa44e735763f5616cc022c7ab28d",
"assets/assets/svg/video.svg": "19b295671fcdd88ed77239d9572114ee",
"assets/assets/svg/wallet_off.svg": "7501839448b258a7ba1a6bf165a8102c",
"assets/assets/svg/wallet_on.svg": "c3e5740f06cda8262f11ecec942b5497",
"assets/assets/svg/water.svg": "c9828ba4f17f396c9bf23e1272ca36af",
"assets/assets/svg/water2.svg": "c9828ba4f17f396c9bf23e1272ca36af",
"assets/assets/svg/white_profile.svg": "a2dfddc40d2fa31629b43090a72f35a1",
"assets/assets/svg/withdraw.svg": "d4cc3490bde5158e3ea9e99337ac4c2b",
"assets/assets/svg/work_off.svg": "ebb2fa44e735763f5616cc022c7ab28d",
"assets/assets/svg/work_on.svg": "2bee6f37ab0c57c17a48f68544819a8b",
"assets/assets/svg2/about.svg": "71639a1f7a43624d09c75db508848404",
"assets/assets/svg2/account.svg": "32413859ff75f96b40177211c6005baf",
"assets/assets/svg2/active.svg": "ca4f4ab9dba79ac97260980263a77014",
"assets/assets/svg2/add.svg": "90f25d40201d11ec7923366dcb19aec1",
"assets/assets/svg2/add_card.svg": "a45f722b78416091a04faaa1f695eae2",
"assets/assets/svg2/appguide-logo.svg": "d493b6ee9c15ec0f8a65503585944df5",
"assets/assets/svg2/apple.svg": "69b0ace88ccac1b5d4db6e51594f23ef",
"assets/assets/svg2/arrow-left-square.svg": "9e8f1289d8cdd5ed1be004b71cd582ff",
"assets/assets/svg2/azerbaijan-rectangle.svg": "5a03855d362ac0948b86a8059ed44b20",
"assets/assets/svg2/azerbaijan.svg": "0bbf7aad8124bd383aef22ba3a7c8012",
"assets/assets/svg2/azercel.svg": "ea30ccf2fd7412a8fc111ce65ae27765",
"assets/assets/svg2/azercell.svg": "22f97e0a0c7d6ddffd3f60d2594c9acf",
"assets/assets/svg2/back.svg": "269532590d6bddc6e8370273d753c44a",
"assets/assets/svg2/bag-add.svg": "874e9bfccaaff942f20724b4e8bff6e4",
"assets/assets/svg2/bakcel.svg": "7f353b5d0fd96459792d811805930726",
"assets/assets/svg2/bakcell.svg": "cb2de954dabb2f332a1de313f68c537f",
"assets/assets/svg2/barcode-scanner-white.svg": "57416600aa22df8f00c98f22876a4a2d",
"assets/assets/svg2/barcode-scanner.svg": "b5a2794473d69139f58a081e68d8494b",
"assets/assets/svg2/bell.svg": "6cc54830613e6fe4eab761cbcbb4efb5",
"assets/assets/svg2/big-plus.svg": "73f59858b63a0a8af5bf6cdfe513d885",
"assets/assets/svg2/calender.svg": "15b13197de277a1e653f2938317800af",
"assets/assets/svg2/car.svg": "b71927dd0897eecff4aa8a5c598b2346",
"assets/assets/svg2/card-logo.svg": "80dfeb17cdc7148c0d28c0d35be381f5",
"assets/assets/svg2/card-payment.svg": "35e3b425fdf47c0efbbe7f28b08d9f32",
"assets/assets/svg2/card.svg": "01ee381cb990ac390cbc01b4c33d1719",
"assets/assets/svg2/card_logo_purple.svg": "fe000908d5e24350e58817a1731fa3cc",
"assets/assets/svg2/card_white.svg": "717a0ee1853002a446623b2bd5745dd1",
"assets/assets/svg2/cashback_card_logo.svg": "f103e520b2a1a566c41fc24e6be719a7",
"assets/assets/svg2/change_pin.svg": "7f88282adee32ec7fedd4941950dd2e6",
"assets/assets/svg2/check-mark-green.svg": "8fc5df55f2e061d3ce8872fa3ab22329",
"assets/assets/svg2/check-mark-red.svg": "d0c894dfb6bcae8a7f36486b3400d8b6",
"assets/assets/svg2/clock.svg": "cafb3a895452798852723a8080ba622b",
"assets/assets/svg2/coins.svg": "9b2239fa5e26ffb0c6d74cef0f6c5c99",
"assets/assets/svg2/contact-list.svg": "2eac1323ef2e21873d394733ce0179bd",
"assets/assets/svg2/contactless%2520_indicator.svg": "71be279c369a7cbbd97ca2508983e86f",
"assets/assets/svg2/copy.svg": "ea6fb1f2ec797ec1d85d4d5c6bc7abef",
"assets/assets/svg2/copy2.svg": "d3594ebf1d8aa0b1b5a0b5752a21f32e",
"assets/assets/svg2/credit-machine.svg": "50a04e8db34c391077e4a535d1f850da",
"assets/assets/svg2/credit.svg": "1dc784b5c4a8583dfe03d122c7078844",
"assets/assets/svg2/deactive.svg": "f3465803970fa5817c19ba367129aa0f",
"assets/assets/svg2/deposit.svg": "2ec919a77c817f01a22aa1abbbaf2b17",
"assets/assets/svg2/document.svg": "6f3e140ac204c8825bb0492bf5bd618b",
"assets/assets/svg2/elephant.svg": "3f949d6465f289737550726a07acf335",
"assets/assets/svg2/empty-list.svg": "cc3c87a9c4f5dfca6cd7a28abc9a6464",
"assets/assets/svg2/face-id.svg": "8a493faf699adac4bd231523721fcad6",
"assets/assets/svg2/facebook.svg": "f19e604364cbca5bda57a7346b99d6a0",
"assets/assets/svg2/filex.svg": "cc4b519416718dbf9dc1808e3a48ee13",
"assets/assets/svg2/fill.svg": "444beadcd69015eaad4fd2a9c07ea1f1",
"assets/assets/svg2/filter.svg": "92ecf8e30423d38b99bac49c498e8408",
"assets/assets/svg2/filter2.svg": "878f9c798757995924b0632d2c7548de",
"assets/assets/svg2/fingerprint.svg": "13447abe822e21d3558fbcdd3b9ff7c3",
"assets/assets/svg2/forward-flash-cropped.svg": "4e32aa06378757bc2e5003fb3f69ad32",
"assets/assets/svg2/forward-flash-light.svg": "2130acb5c9f6a9675b5b9f1712417e6e",
"assets/assets/svg2/forward-flash.svg": "d80d60b7d9c29b856a1d9fc3a69830ff",
"assets/assets/svg2/game.svg": "7671889aa6707a6aea633046809a4721",
"assets/assets/svg2/global.svg": "1529aad28051b44d1dba24b2019bbc35",
"assets/assets/svg2/goverment.svg": "e7256570ed7a4727437ecd678a1cfe4c",
"assets/assets/svg2/graduation.svg": "77cc3086c99956f3db48af48d8f5359d",
"assets/assets/svg2/green-flash.svg": "fc1663f333148ba7395069c579b67e53",
"assets/assets/svg2/heart-outlied.svg": "1dea3a50cc92c3c6a8bea94b9aa2170c",
"assets/assets/svg2/history.svg": "732323d0a457791b03b9a308d72bdc01",
"assets/assets/svg2/home-filled.svg": "6f3e375ac05e37d7fe0cc097a8815b73",
"assets/assets/svg2/home-outlied.svg": "307c40448a94661b9d95471275dae24f",
"assets/assets/svg2/home-telephone.svg": "8682e078b3c0b5eccab7a40a89aeb6bc",
"assets/assets/svg2/insta.svg": "c774e4e8f401d349c8d47a3e6d1f921c",
"assets/assets/svg2/insurance.svg": "461810ec711a8d1b303d1ea5cc7c98f2",
"assets/assets/svg2/internet.svg": "d0bc49bd979be81f0e58c08ac27f3eed",
"assets/assets/svg2/invisibility.svg": "166ca53c747eb0797f1be950366bee4b",
"assets/assets/svg2/invoice.svg": "5f87e4cce1bfbf093b80536bb6674f37",
"assets/assets/svg2/iran-rectangle.svg": "bad3d7a178527e3b35dfe8de089da9c2",
"assets/assets/svg2/iran.svg": "db6273f9c21a0680b902235b56785e7a",
"assets/assets/svg2/kodiak-logo.svg": "3bf7dd38655cad1a9a62c756e1efde7b",
"assets/assets/svg2/kodiak.svg": "f8b2adf28a62f308445a6aaaeb2da84d",
"assets/assets/svg2/limits.svg": "7132405024bd75496be2e2be6e206c87",
"assets/assets/svg2/loading.svg": "0710320bb710a1f05a039b9c5bf39b41",
"assets/assets/svg2/loan.svg": "f214d73c4280b72db37a45e47a65e170",
"assets/assets/svg2/location.svg": "9aa5d7662decf34a733da8d7993760a9",
"assets/assets/svg2/lock.svg": "ea7885bed620e7c3b0acde0d3ab45228",
"assets/assets/svg2/lock2.svg": "669d8b0c70be32bcacce311d1e63c96e",
"assets/assets/svg2/lock3.svg": "cabf96bcf617051e3d43fbeef6b9401b",
"assets/assets/svg2/lock4.svg": "88dffe64163913c489212e38300bcda6",
"assets/assets/svg2/logo.svg": "e4ae3ef565ae20a131abd6b0d68d1342",
"assets/assets/svg2/menu.svg": "a5046280bb7288072615c02bac069bc8",
"assets/assets/svg2/minus-red.svg": "d2d8fd158944c4f58867b4198289f615",
"assets/assets/svg2/mobile-carries.svg": "7b222d9918432b1823d4f8aa6b3e0a04",
"assets/assets/svg2/more.svg": "06c8464fd5a47f2d2accbcafb9fc37c7",
"assets/assets/svg2/nar.svg": "61bb81a8548e7cec81a2dfb4726fa2ce",
"assets/assets/svg2/nar2.svg": "61bb81a8548e7cec81a2dfb4726fa2ce",
"assets/assets/svg2/narr.svg": "c7d5e088f2d3ca18691bda8ccdd8e246",
"assets/assets/svg2/new-check-mark-green.svg": "5ba780df53906e9e5034f6ef0ac89203",
"assets/assets/svg2/new-check-mark-red.svg": "dce2fe8f3ced708cb5ba698ffb6af5fd",
"assets/assets/svg2/new-notification.svg": "fdfaeb444f040a2ba6cf7fb3c7e4aa10",
"assets/assets/svg2/notification-bell.svg": "90049dbb25746762a2e580e7fd0970e4",
"assets/assets/svg2/notification.svg": "33609b4e22f13beab3de4b05c8c2c0fe",
"assets/assets/svg2/others-filled.svg": "3343bff043d658725b40343f2e83debb",
"assets/assets/svg2/others.svg": "548e90f07ae77a23a1660c277c3be9ef",
"assets/assets/svg2/paper.svg": "faf273bb61aee38ace3399a996f1f719",
"assets/assets/svg2/pay-back-filled.svg": "100fe908b4e51baa9496606b4b107b39",
"assets/assets/svg2/pay-now.svg": "823e6dbc3b26f4d55c905709c5ca8d14",
"assets/assets/svg2/percentage-filled.svg": "b4ac147883407e2d402eadbd674ce7f9",
"assets/assets/svg2/percentage.svg": "171f6353d224647d9938eb8e2cca5801",
"assets/assets/svg2/pie-chart.svg": "abb7b4307daa65506600fb0ca4e2f860",
"assets/assets/svg2/pin.svg": "585110fa302db7b3a17d36f8b26a3d67",
"assets/assets/svg2/plus-gray.svg": "90f25d40201d11ec7923366dcb19aec1",
"assets/assets/svg2/plus-green.svg": "54ed05e9a03978ea8c6dd61f1b24684e",
"assets/assets/svg2/policy.svg": "3767e5ca0e1f9e5d9c52a27cd60bf42f",
"assets/assets/svg2/prize.svg": "b17ff14f8acb45c1fc3d181b9ddbec5d",
"assets/assets/svg2/process.svg": "1ec586c2cb30ae397560ccde3113b748",
"assets/assets/svg2/profile-filled.svg": "13b9dc224dbd17138b7edd7cbfaad60d",
"assets/assets/svg2/profile-outlied.svg": "42b84f9aa06f43337148c94d40e736b1",
"assets/assets/svg2/profile.svg": "13b9dc224dbd17138b7edd7cbfaad60d",
"assets/assets/svg2/qr-code.svg": "c7d34cb906d5bae972dfc4aa0bae242b",
"assets/assets/svg2/receive.svg": "25eef40a1ed2b511665ddc35f94fd24c",
"assets/assets/svg2/red-flash.svg": "1e4d59f8a24d5b7a78c4e415540646ee",
"assets/assets/svg2/regular_transfer.svg": "21aae58e433356fe54ab55d1d84c7803",
"assets/assets/svg2/repeat-filled.svg": "f06d9ee0ff6d396625839e2eb7ab4fcb",
"assets/assets/svg2/search-outlied.svg": "f7bfebb72229731f1f084ddcd417af81",
"assets/assets/svg2/secure.svg": "91e3d81bf95b759a3039f768540706ec",
"assets/assets/svg2/send-purple.svg": "ff27a3e5f15c9778a5eb12736e57c65e",
"assets/assets/svg2/send.svg": "e1a7b7150df3ec8f32a8a8639d361819",
"assets/assets/svg2/setting.svg": "7cf5dbbe55485ee3980f6425c8400288",
"assets/assets/svg2/share-filled.svg": "215c54ab32fc06211273aaf87bbef65e",
"assets/assets/svg2/shop.svg": "d9a99a91f698f5d23000d3dec4e8e337",
"assets/assets/svg2/shop2.svg": "7292606f9550247c3fc5b411481be7da",
"assets/assets/svg2/side-button-confirm.svg": "e847c68ba5a1321b50611d9e9864cb62",
"assets/assets/svg2/splash-logo.svg": "2cfa9853be4abc08f8dace525d836d6e",
"assets/assets/svg2/star-filled.svg": "c968f224b438d504ca4b75232ff57768",
"assets/assets/svg2/star-outlied.svg": "520ee22c5532c42ce3d9d7f6659c1986",
"assets/assets/svg2/starbox.svg": "6fe6547038d1d9b12f76e885d6e3cfe6",
"assets/assets/svg2/support.svg": "70e628787fb4c554c7e8baf30a254c63",
"assets/assets/svg2/tariffs.svg": "0453a1899f96dfae8e34958de0358d59",
"assets/assets/svg2/tiktak.svg": "0c2081a89a7f9a8ad5230bea40635137",
"assets/assets/svg2/top-up.svg": "2352702a31643aacdeb953a6e21df0fd",
"assets/assets/svg2/top-up2.svg": "bfabd8bfe5c7800af53800cd4771bc1d",
"assets/assets/svg2/touch-id.svg": "1848d32512c171a2547f269096825064",
"assets/assets/svg2/transfer-filled.svg": "b15026991d851745a78c214b62503253",
"assets/assets/svg2/transfer-flash.svg": "0a0fed4f39892c624f7f8d1028bc377a",
"assets/assets/svg2/transfer-outlied.svg": "17ae02a43e66cc7d968f3f46399db277",
"assets/assets/svg2/transfer-purple.svg": "4f1d9a96bd42e5912fe9e4ed69d2c43f",
"assets/assets/svg2/transfer-to-money.svg": "119e8eee66cdce0e155981ca48946cb4",
"assets/assets/svg2/transform.svg": "8a2e8c940aa847a73b5c8eaeb5e8caa3",
"assets/assets/svg2/try-filled.svg": "f06d9ee0ff6d396625839e2eb7ab4fcb",
"assets/assets/svg2/tv.svg": "c269c35b2cc750a9777df5f6422cc003",
"assets/assets/svg2/united_kingdom-rectangle.svg": "4d79528445c495875f6f74ec9a0b9a7e",
"assets/assets/svg2/united_kingdom.svg": "e5564902e2642c5e6e2e98e68a7d41f5",
"assets/assets/svg2/visibility.svg": "ebf690c1b955db3bf7ec02b7f75ccf5c",
"assets/assets/svg2/wallet-filled.svg": "e2b5748088984cabc01bc9a255693456",
"assets/assets/svg2/wallet-outlied.svg": "0b4eac9c463fef74fed2d29c12181389",
"assets/assets/svg2/wallet2.svg": "277db16f39df50a629b2c9db81fbb972",
"assets/assets/svg2/withdrawal.svg": "d2863b772d0fc19de56e39985012cfb3",
"assets/assets/svg2/yellow_info.svg": "99ad7428f7cc2dd2fb9f6261fa15e172",
"assets/FontManifest.json": "8554bc04083020372cb09c33382a5b29",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "af719c355a50c89d76061fb716dd9ab4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator.gif": "ce0141cf86895cf948736c923fa92ade",
"assets/packages/loading_gifs/assets/images/circular_progress_indicator_small.gif": "502a31bacaa2182d511eb4866354fbab",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator.gif": "3990e106caf3029a36788b9b58a86b41",
"assets/packages/loading_gifs/assets/images/cupertino_activity_indicator_small.gif": "05ffb16f4f31cf9941a8295740476ee1",
"assets/packages/loading_gifs/assets/images/placeholder_empty.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "696e77e4f36876d81be784d95378a6c7",
"icons/android-icon-144x144.png": "bf50751c44521ce0bb51477bca96dc10",
"icons/android-icon-192x192.png": "8ed3c8b17bcbd14229922b7eb4e00204",
"icons/android-icon-36x36.png": "53062fec1cbbe9390d960c4df0b758da",
"icons/android-icon-48x48.png": "42dc074a1546ad7c22db23fc15868ac6",
"icons/android-icon-72x72.png": "48a1872868e7c735f6969c5da8949236",
"icons/android-icon-96x96.png": "93ba9d8e4ef4c3f29f2fe4b9083295e6",
"icons/apple-icon-114x114.png": "98d3f51ccd2faa57b53d5c19d9c4cbbc",
"icons/apple-icon-120x120.png": "8a698866f8d648ccb00477ca9308941e",
"icons/apple-icon-144x144.png": "bf50751c44521ce0bb51477bca96dc10",
"icons/apple-icon-152x152.png": "58bb009ecccf65edcfb67ed4f6eb9925",
"icons/apple-icon-180x180.png": "54a97d4fdab31f100e94dd9b3edc3fc9",
"icons/apple-icon-57x57.png": "20bfb85e3455e9e4853f9fa0ef7c4a3a",
"icons/apple-icon-60x60.png": "533f6ffdde56b2e120d1b263c3b76be0",
"icons/apple-icon-72x72.png": "48a1872868e7c735f6969c5da8949236",
"icons/apple-icon-76x76.png": "aead0b9d7496f8c55a00d60f1f87ad97",
"icons/apple-icon-precomposed.png": "e73122cf52ae6db2706989879a5642a5",
"icons/apple-icon.png": "e73122cf52ae6db2706989879a5642a5",
"icons/favicon-16x16.png": "f389bc718e7335205627add4ff0117da",
"icons/favicon-32x32.png": "2cddf830ff0c0db8ce821f80f80231e7",
"icons/favicon-96x96.png": "93ba9d8e4ef4c3f29f2fe4b9083295e6",
"icons/favicon.ico": "21e2587c5292dc821e08361d37b443d4",
"icons/ms-icon-144x144.png": "bf50751c44521ce0bb51477bca96dc10",
"icons/ms-icon-150x150.png": "b8347552947a6c4259086814219b4e97",
"icons/ms-icon-310x310.png": "dbd92f974a71a913013f8d789a12e2dd",
"icons/ms-icon-70x70.png": "e36e12c598a6bc621457062b65e9f6d6",
"index.html": "17a309e379ada4fba4e63d001d8db9b3",
"/": "17a309e379ada4fba4e63d001d8db9b3",
"main.dart.js": "a9cb915dc3120e4307b9b62422c6f454",
"manifest.json": "7475a4ad8282a373885b9d0ca3ce9e90",
"version.json": "7a259c8b59cfba03a1d7ff8b87a48d64"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
