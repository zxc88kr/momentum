const quotes = [
    {
        quote: "호호이!",
        character: "신짱구"
    },
    {
        quote: "엄마, 아프지 말아요. 제가 말 잘 들을게요.",
        character: "신짱구"
    },
    {
        quote: "싫어, 피구 말고 축구하자.",
        character: "신짱구"
    },
    {
        quote: "봄은 정말 잔인한 계절이예요.",
        character: "신짱구"
    },
    {
        quote: "하고 싶은 일을 하는 게 제 인생이에요~",
        character: "신짱구"
    },
    {
        quote: "어떤 사람이 다른 사람을 좋아하는 건 자유예요. 누구를 좋아한다는 건 어쩔 수 없는 거에요.",
        character: "신짱구"
    },
    {
        quote: "아저씨 높은 사람이죠! 아저씨가 이 싸움 벌였잖아요! 그런데 도망치는 거예요?",
        character: "신짱구"
    },
    {
        quote: "유리 너 이렇게 능력없는 남자랑 살 거야? 떡잎마을로 돌아가면 능력있고 잘생긴 남자들이 기다린다고!",
        character: "신짱구"
    },
    {
        quote: "훈이 너는 이런 여자랑 살 거야? 떡잎마을로 돌아가면 예쁘고 상냥한 여자들이 더 많아!",
        character: "신짱구"
    },
    {
        quote: "강한 사람은 약한 사람을 도와주는 게 당연하니까!",
        character: "신짱구"
    },
    {
        quote: "강한 사람이든 약한 사람이든 도와줄 수 있으면... 도와주는 게 좋을 것 같아서요.",
        character: "신짱구"
    },
    {
        quote: "원래 맛있는 건 다 같이 먹으면 훨씬 더 맛있거든요!",
        character: "신짱구"
    },
    {
        quote: "신경 쓰이면 전화하면 되잖아요? 이상한 고집 피우면 소중한 걸 잃어요.",
        character: "신짱구"
    },
    {
        quote: "우리~ 리얼 소꿉놀이하자!",
        character: "한유리"
    },
    {
        quote: "너 똑똑히 들어 어른들 생활은 리얼한 소꿉놀이보다 훨씬 비참해! 내 말 절대 잊으면 안 돼!",
        character: "한유리"
    },
    {
        quote: "싫어요! 포기하고 싶지 않아요! 제가 끝까지 포기하지 않으면 인연은 계속 이어져요!",
        character: "맹구"
    },
    {
        quote: "어디면 어때? 여기는 우리가 사는 지구야. 그러니까 아무것도 두려워할 필요 없어.",
        character: "맹구"
    },
    {
        quote: "커다란 자갈돌은 짱돌, 빙글빙글 돌아가는 맷돌",
        character: "맹구"
    },
    {
        quote: "걱정하지 마. 사소하고 소소한 게, 최고야.",
        character: "이훈이"
    },
    {
        quote: "포기하지마! 이런 말이 있잖아. 펜은 칼보다 강하다!",
        character: "이훈이"
    },
    {
        quote: "그래 맞아! 친구들의 우정이 있으면 내 고민도 날아갈거야!",
        character: "김철수"
    },
    {
        quote: "아무리 급해도 법은 지켜야지! 급하다고 해서 어기면 법이 무슨 소용이 있어? 안 그래?",
        character: "김철수"
    },
    {
        quote: "I want you babe~ I need you babe~ I love you babe~",
        character: "김철수"
    },
    {
        quote: "행복해서 가족이 아니야! 가족이라서 행복한 거야!",
        character: "신형만"
    },
    {
        quote: "당연하던 평범한 일상이 진정한 행복이었어",
        character: "신형만"
    },
    {
        quote: "정신 차려! 이 세상에는 배불리 먹는 사람보다 배고픈 사람이 훨씬 많다고!",
        character: "신형만"
    },
    {
        quote: "현실은 드라마보다 더 드라마틱한 법.",
        character: "신형만"
    },
    {
        quote: "내 인생은 그렇게 하찮은 삶이 아니야! 가족이 주는 행복이 얼마나 큰지 너한테 알려주고 싶을 정도다!",
        character: "신형만"
    },
    {
        quote: "아니, 우린 세계를 구하는 거창한 영웅 같은 게 아니야. 아이들에게 미래를 주고픈 한 사람의 아빠일 뿐이야.",
        character: "신형만"
    },
    {
        quote: "뭐? 계획대로 됐다고?! 인생의 묘미는 계획대로 안 되는 거에 있어! 똑똑히 기억해 둬!",
        character: "신형만"
    },
    {
        quote: "일은 대신할 수 있어도, 아버지는 대신할 수 없으니까.",
        character: "신형만"
    },
    {
        quote: "이봐! 무조건 시키기만 하면 되는 줄 알아? 스스로가 하지 않으면 의미가 없다고!",
        character: "신형만"
    },
    {
        quote: "진짜 보물이란 건 말이지. 인생을 걸고 빠져들 수 있는 거란다.",
        character: "신형만"
    },
    {
        quote: "너 만화에서 나오는 거 따라하고 그러면 안 된다.",
        character: "신형만"
    },
    {
        quote: "여보, 애들은 언제나 우리 천사예요. 얘들아, 둘 다 우리 집에 태어나 줘서 정말 고마워.",
        character: "봉미선"
    },
    {
        quote: "그래도.... 애들한텐.... 엄마가 있어야죠.",
        character: "봉미선"
    },
    {
        quote: "부모란, 자식을 위해선 뭐든지 할 수 있는 사람들이에요.",
        character: "봉미선"
    }
];

const quote = document.querySelector("#quote p:first-child");
const character = document.querySelector("#quote p:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
character.innerText = `- ${todayQuote.character} -`;