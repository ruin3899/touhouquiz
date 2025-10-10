const question = document.getElementById('question');
const question_ber = document.getElementById('question_ber');
const quiz_area = document.getElementById('quiz_area');
const question_area = document.getElementById('question_area');
const modeSelect = document.getElementById('modeSelect');
const button_area = document.getElementById('button_area');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const label4 = document.getElementById('label4');
const result = document.getElementById('result');
const button = document.getElementById('resultOrNextButton');
const resetButton = document.getElementById('resetButton');
const resultButton = document.getElementById('resultButton');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
let special;
let badEnd = false;

//問題リスト
const question_list = [
    "<h2>博麗霊夢の職業は？</h2>",
    "<h2>白玉楼の庭師は？？</h2>",
    "<h2>東方紅魔郷のラスボスは？</h2>",
    "<h2>レミリア・スカーレットの能力は？</h2>",
    "<h2>フランドール・スカーレットの能力は？</h2>",
    "<h2>十六夜咲夜の能力は？</h2>",
    "<h2>パチュリー・ノーレッジの能力は？</h2>",
    "<h2>アリス・マーガトロイドの能力は？</h2>",
    "<h2>西行寺幽々子の能力は？</h2>",
    "<h2>八雲紫の能力は？</h2>",

    "<h2>火焔猫燐ってなんて読む？</h2>",
    "<h2>東方風神録の3面道中のBGMは？</h2>",
    "<h2>上白沢慧音の人間状態での能力は？</h2>",
    "<h2>上白沢慧音のハクタク状態での能力は？</h2>",
    "<h2>パワーを消費して霊撃を放つゲームは？</h2>",
    "<h2>ゲームシステムがブロック崩しのゲームは？</h2>",
    "<h2>東方靈異伝が初めて配布された年は？</h2>",
    "<h2>東方靈異伝が配布された大学は？</h2>",
    "<h2>河城にとりのスペルカードではないのはどれ？</h2>",
    "<h2>東方地霊殿で使用武器によってスペルカードが変わるキャラクタは誰？</h2>",

    "<h2>6面ボスとEXTRAボスが同じゲームは？</h2>",
    "<h2>東方Projectの原作者は？</h2>",
    "<h2>東方地霊殿に登場しないキャラクタは？</h2>",
    "<h2>完全無欠モードがあるゲームは？</h2>",
    '<h2>完全無欠モードの説明として間違っているのは？</h2>',
    '<h2>東方天空璋での最大ボム数は？</h2>',
    '<h2>村紗水蜜のスペルカードではないのは？</h2>',
    '<h2>東方人気投票で2025年に一位になったのは？</h2>',
    '<h2>プリズムリバー姉妹の長女は？</h2>',
    '<h2>鬼ではないのは？</h2>',

    '<h2>博麗神社の狛犬は？</h2>',
    '<h2>烏天狗は？</h2>',
    '<h2>大天狗は？</h2>',
    '<h2>八咫烏の能力を持っているのは？</h2>',
    '<h2>八雲紫の式神は？</h2>',
    '<h2>登場人物が殆ど女性の理由は？</h2>',
    '<h2>火焔猫燐は誰のペット？</h2>',
    '<h2>霊烏路空に核融合を操る程度の能力を与えた神社は？</h2>',
    '<h2>東方地霊殿でにとりの支援霊撃を使うと何が起こる？</h2>',
    '<h2>東方地霊殿でにとりの支援霊撃を使って、ダメージを受けなかった場合、パワーはいくら回復する？',

    '<h2>東方天空璋の地蔵といえば？</h2>',
    '<h2>東方天空璋のEXTRAで使える季節は？</h2>',
    '<h2>東方ダブルスポイラーのスポイラーは何を意味する？</h2>',
    '<h2>2025年の人気投票で河城にとりは何位？</h2>',
    '<h2>古明地さとりのペットは？</h2>',
    '<h2>東方地霊殿のEXTRAボスは？</h2>',
    '<h2>古明地こいしのスカートの花は？</h2>',
    '<h2>博麗靈夢の表記だったのは？</h2>',
    '<h2>次のEXTRAボスのうち、旧作のボスは？</h2>',
    '<h2>東方地霊殿でにとりが恐れたキャラは？</h2>',

    '<h2>騒霊じゃないのは？</h2>',
    '<h2>高麗野あうんはなんと読む？</h2>',
    '<h2>白狼天狗は？</h2>',
    '<h2>一番偉いのは？</h2>',
    '<h2>一番偉くないのは？</h2>',
    '<h2>東方地霊殿でにとりの支援霊撃を使って、ダメージを受けたらどうなる？'
];
//選択肢リスト
const answer_list = [
    ["魔法使い", "ヴァンパイア", "メイド", "巫女"],
    ["魂魄妖夢", "風見幽香", "火焔猫燐", "霊烏路空"],
    ["レミリア・スカーレット", "フランドール・スカーレット", "十六夜咲夜", "パチュリー・ノーレッジ"],
    ["時間を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["時間を操る程度の能力", "ありとあらゆるものを破壊する程度の能力", "奇跡を起こす程度の能力", "運命を操る程度の能力"],
    ["ナイフを操る程度の能力", "空を飛ぶ程度の能力", "時間を操る程度の能力", "運命を操る程度の能力"],
    ["空を飛ぶ程度の能力", "歴史を変える程度の能力", "奇跡を起こす程度の能力", "火＋水＋木＋金＋土＋日＋月を操る程度の能力"],
    ["人形を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],
    ["運命を操る程度の能力", "死を操る程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],
    ["運命を操る程度の能力", "空を飛ぶ程度の能力", "奇跡を起こす程度の能力", "境界を操る程度の能力"],

    ["かえんびょうりん", "かえんねこりん", "ひおどしびょうりん", "ひおどしねこりん"],
    ["芥川竜之介の河童", "人恋し神様", "神々が恋した幻想郷", "旧地獄街道を征く"],
    ["歴史を食べる程度の能力", "歴史を創る程度の能力", "獣の言葉を聞く程度の能力", "怪力を持つ程度の能力"],
    ["歴史を食べる程度の能力", "歴史を創る程度の能力", "獣の言葉を聞く程度の能力", "怪力を持つ程度の能力"],
    ["東方天空璋", "東方紅魔郷", "東方地霊殿", "東方靈異伝"],
    ["東方靈異伝", "東方幻想郷", "東方神霊廟", "東方紅魔郷"],
    ["1995", "1996", "1997", "1998"],
    ["東京工業大学", "電気通信大学", "東京大学", "東京電機大学"],
    ["のびーるアーム", "河童のポロロッカ", "撃沈アンカー", "光り輝く水底のトラウマ"],
    ["古明地こいし", "古明地さとり", "火焔猫燐", "霊烏路空"],

    ["東方靈異伝", "東方地霊殿", "東方星蓮船", "東方天空璋"],
    ["ZUN", "太田順次", "ビートまりお", "西村博之"],
    ["霊烏路空", "比那名居天子", "射命丸文", "八雲紫"],
    ['東方紺珠伝', "東方地霊殿", '東方神霊廟', '東方星蓮船'],
    ['残機がない', 'ステージの途中からやり直せる', '続きからプレイ再開できる', 'デフォルトモードである。'],
    ["6", '7', '8', '9'],
    ['道連れアンカー', 'シンカーゴースト', 'ハイドロカモフラージュ', 'ディープヴォーテックス'],
    ['古明地さとり', '古明地こいし', 'フランドール・スカーレット', 'レミリア・スカーレット'],
    ['ルナサ', 'メルラン', 'リリカ', 'レイラ'],
    ['星熊勇儀', '伊吹萃香', '驪駒 早鬼', '茨木華扇'],

    ['博麗靈夢', '高麗野あうん', '火焔猫燐', '橙'],
    ['霊烏路空', '犬走椛', '姫海棠はたて', '飯綱丸龍'],
    ['霊烏路空', '犬走椛', '姫海棠はたて', '飯綱丸龍'],
    ['霊烏路空', '犬走椛', '姫海棠はたて', '飯綱丸龍'],
    ['八雲藍', '火焔猫燐', '霊烏路空', '姫海棠はたて'],
    ['かわいいから', '殺伐とした雰囲気にしないため', '幻想郷に女性しかいないから', '女性しか能力を持たない設定だから'],
    ['霊烏路空', '古明地さとり', '古明地こいし', '八雲藍'],
    ['博麗神社', '八坂神社', '守矢神社', '熊野神社'],
    ['バリアが出る', '敵が消える', '敵弾が消える', 'パワーが増える'],
    ['0.1', '0.5', '1', '1.5'],

    ['爾子田里乃', '丁礼田舞', '摩多羅隠岐奈', '矢田寺成美'],
    ['土用', '春', '夏', '冬'],
    ['ゴミ', 'ネタバレ', 'コメディ', '土壌'],
    ['40', '42', '44', '46'],
    ['霊烏路空', '橙', '封獣ぬえ', '高麗野あうん'],
    ['八坂神奈子', '古明地さとり', '古明地こいし', '東風谷早苗'],
    ['バラ', 'チューリップ', 'ユリ', 'ラナンキュラス'],
    ['東方怪綺談', '東方幻想郷', '東方靈異伝', '東方夢時空'],
    ['封獣ぬえ', 'アリス・マーガトロイド', '二ッ岩マミゾウ', '古明地こいし'],
    ['黒谷ヤマメ', '水橋パルスィ', 'キスメ', '星熊勇儀'],

    ['ルナサ', 'メルラン', 'リリカ', 'レイラ'],
    ['こまのあうん', 'こうらいのあうん', 'こうりのあうん', 'こうりいのあうん'],
    ['霊烏路空', '犬走椛', '姫海棠はたて', '飯綱丸龍'],
    ['犬走椛', '姫海棠はたて', '飯綱丸龍', '星熊勇儀'],
    ['犬走椛', '姫海棠はたて', '飯綱丸龍', '河城にとり'],
    ['残機が減る', '敵が消える', '敵弾が消える', '一定時間無敵になる']
];
//正解リスト
const correct_answer_list = [
    "4", "1", "1", "4", "2", "3", "4", "1", "2", "4",
    "1", "3", "1", "2", "3", "1", "2", "4", "3", "2",
    "4", "1", "2", "3", "2", "3", "3", "2", "1", "3",
    "2", "3", "4", "1", "1", "2", "2", "3", "1", "2",
    "4", "1", "1", "3", "1", "3", "4", "3", "2", "4",
    "4", "1", "2", "4", "1", "3"
];
//正解の説明リスト
const explanation_list = [
    "博麗霊夢は博麗神社の巫女さんです。",
    "白玉楼の庭師は妖夢です。",
    "東方紅魔郷のラスボスはレミリア・スカーレットです。",
    "レミリア・スカーレットの能力は運命を操る程度の能力です。",
    "フランドール・スカーレットの能力はありとあらゆるものを破壊する程度の能力です。",
    "十六夜咲夜の能力は時間を操る程度の能力です。",
    "パチュリー・ノーレッジの能力は魔法を使う程度の能力です。",
    "アリス・マーガトロイドの能力は人形を操る程度の能力です。",
    "西行寺幽々子の能力は死を操る程度の能力です。",
    "八雲紫の能力は境界を操る程度の能力です。",

    "火焔猫燐はかえんびょうりんと読みます。",
    "左から順に3面ボス、1面道中、3面道中、地霊殿3面道中です。",
    "最初2つが上白沢慧音の能力です。それ以外は存在しません。",
    "最初2つが上白沢慧音の能力です。それ以外は存在しません。",
    "地霊殿のみが霊撃が別カウントではありません。",
    "東方Project1作目の東方靈異伝のみブロック崩しです。",
    "原作者のZUN氏が大学で配布しました。",
    "原作者のZUN氏の出身大学です。",
    "撃沈アンカーは村紗水蜜のスペルカードです。",
    "古明地さとりは使用武器（支援キャラ）のスペルカードを使います。",

    "東方天空璋は6面ボスもEXTRAボスも摩多羅隠岐奈です。",
    "東方Projectの原作者はZUN（太田順也）氏です。",
    "空は６面ボス、射命丸文と八雲紫は支援キャラです。",
    '完全無欠モードは東方紺珠伝にのみあります。',
    '完全無欠モードは残基の概念がなく、途中からコンティニュー可能ですが、東方地霊殿のようにステージ途中のコンティニューはステージの途中からです。',
    '8です。',
    'ハイドロカモフラージュは水っぽいので村紗っぽいですが、水を操るにとりです。',
    '古明地こいしです。',
    'ルナサが長女です。',
    '鬼って書いてますが鬼じゃないです。',

    '高麗野あうんです。天空璋3面より。',
    'はたてだけが烏天狗です。ちなみに文も烏天狗です。',
    '飯綱丸龍だけが大天狗です。',
    '霊烏路空（地霊殿6ボス）が八咫烏の能力を持っています。',
    '八雲藍です。',
    'ゲームは「弾幕ごっこ」であり、戦争ではありません。',
    '古明地さとりが放し飼いしてます。',
    '守矢神社です。',
    'バリア、つまり光学迷彩を張ります。',
    '1消費して、0.5帰ってきます。',

    '矢田寺成美です。',
    '土用です。土用の丑の日の土用です。季節の変わり目。',
    'ネタバレって意味です。ちゃんというと、台無しにすること。',
    '残念ながら44位でした。',
    '地霊殿のボスは？とでも読み替えてください。',
    '人気1位のこいしちゃんです。',
    'よくわからない花ですね。バラじゃないです。',
    '東方靈異伝です。タイトルも靈でしょ？',
    'アリスだけです。それ以外はWindows版のキャラです。アリス自体はWindows版にもいますが。',
    '鬼の勇儀です。',

    'レイラは人間です。',
    'こまのあうんと読みます。こう読めば狛犬っぽい？',
    '白いですね。',
    '勇儀は鬼です。偉いです。',
    '河童が一番下っ端です。',
    'ボムですね。'
];
let correctans;
let selectedans;
let explanation;
let question_num;
let correct_count = 0;
let wrong_count = 0;
let question_count = 0;
let question_count_max = question_list.length;
let resultMode = true;

//ラジオボタンの選択肢を取得
window.addEventListener('DOMContentLoaded', function () {

    let input_answers = document.querySelectorAll("input[name=answer]");

    for (let element of input_answers) {

        element.addEventListener('change', function () {
            if (this.checked) {
                selectedans = this.value;
            }
        });
    }

});

//答え合わせボタンを押したときの処理
function answerCheck() {

    let input_answers = document.querySelectorAll("input[name=answer]");
    question_list.splice(question_num, 1);
    answer_list.splice(question_num, 1);
    correct_answer_list.splice(question_num, 1);
    explanation_list.splice(question_num, 1);

    if (selectedans === correctans) {
        result.innerText = `正解！${explanation}`;
        input_answers[selectedans - 1].classList.add("correct");
        correct_count++;
    } else {
        if (special) {
            badEnd = true;
            showResult();
        }
        else {
            result.innerText = `不正解！正解は${correctans}番です！`
            input_answers[selectedans - 1].classList.add("incorrect");
            wrong_count++;
        }
    }
    resultMode = false;
    if (question_count >= question_count_max) {
        button.innerText = "結果発表";
    }
    else {
        button.innerText = "次の問題";
        resultButton.classList.remove("hide");
    }
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
}

//ゲーム開始処理
function startQuiz() {
    question_count++;
    question_ber.innerText = `${question_count}問目/${question_count_max}問中`;
    let input_answers = document.querySelectorAll("input[name=answer]");
    for (let element of input_answers) {
        element.checked = false;
        element.classList.remove("correct");
        element.classList.remove("incorrect");
        element.disabled = false;
    }
    result.innerText = "";
    button.innerText = "答え合わせ";
    resultButton.classList.add("hide");
    if (special) {
        question_num = 0;
    } else {
        question_num = Math.floor(Math.random() * question_list.length);
    }
    question.innerHTML = question_list[question_num];
    label1.innerText = answer_list[question_num][0];
    label2.innerText = answer_list[question_num][1];
    label3.innerText = answer_list[question_num][2];
    label4.innerText = answer_list[question_num][3];
    correctans = correct_answer_list[question_num];
    explanation = explanation_list[question_num];
    resultMode = true;
}
//リセットボタンを押したときの処理
function resetQuiz() {
    location.reload();
}
//結果ボタンを押したときの処理
function showResult() {
    if (special) {
        if (badEnd) {
            result.innerText = `残念！最後の問題の答えは${correctans}でした。
            解説は「${explanation}」です。あなたは${question_count - 1}問正解しました！
            また挑戦してね！`
        } else {
            result.innerText = `全問正解おめでとう！`
        }
    } else {
        let correctratio = Math.round(correct_count / (question_count) * 100);
        result.innerText = `正解数：${correct_count}問、不正解数：${wrong_count}問、正答率：${correctratio}%`;
    }
        question_area.classList.add("hide");
        button.classList.add("hide");
        resultButton.classList.add("hide");
}
//一番左のボタンの処理
function buttonFunction() {
    if (resultMode) {
        answerCheck();
    } else {
        if (question_count < question_count_max) {
            startQuiz();
        } else {
            showResult();
            button.innerText = "リトライ";
            button.setAttribute("onclick", "resetQuiz()");
        }
    }
}
openButton.addEventListener('click', function () {
    tips.showModal();
});

closeButton.addEventListener('click', function () {
    tips.close();
});

// モード選択
function normalMode() {
    special = false;
    modeSelect.classList.add('hide');
    quiz_area.classList.remove('hide');
    startQuiz();
}

function specialMode() {
    special = true;
    const header = document.querySelector(header);
    header.style.backgroundColor = yellow;
    modeSelect.classList.add('hide');
    quiz_area.classList.remove('hide');
    startQuiz();
}