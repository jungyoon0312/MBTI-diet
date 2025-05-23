const tips = {
  INTJ: "계획적인 식단과 목표 설정이 중요해요!",
  INFP: "감성적인 보상보다는 자연 속 산책이 잘 맞아요.",
  ENTP: "다이어트를 게임처럼 생각해보세요! 재미가 중요해요.",
  ESFP: "친구와 함께하는 운동이 잘 맞아요!",
};

document.getElementById("showBtn").addEventListener("click", function() {
  const mbti = document.getElementById("mbti").value;
  const result = document.getElementById("result");

  if (tips[mbti]) {
    result.textContent = tips[mbti];
  } else {
    result.textContent = "MBTI를 선택해주세요!";
  }
});
