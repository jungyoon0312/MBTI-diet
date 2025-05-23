const tips = {
  INTJ: "계획적인 식단과 목표 설정이 중요해요!",
  INTP: "데이터와 근거를 바탕으로 식단을 분석해보세요.",
  ENTJ: "도전적인 목표를 세우고, 달성 과정을 기록해보세요.",
  ENTP: "다이어트를 게임처럼 생각해보세요! 재미가 중요해요.",
  INFJ: "마음의 안정을 위해 명상과 함께 식단을 관리해보세요.",
  INFP: "감성적인 보상보다는 자연 속 산책이 잘 맞아요.",
  ENFJ: "주변 사람들과 함께 목표를 공유하면 동기부여가 커져요.",
  ENFP: "다양한 운동을 시도해보고, 즐거움을 찾아보세요.",
  ISTJ: "정해진 시간에 규칙적으로 식사하는 것이 좋아요.",
  ISFJ: "작은 성공을 스스로 칭찬하며 꾸준히 실천해보세요.",
  ESTJ: "체계적인 계획과 기록이 큰 도움이 돼요.",
  ESFJ: "함께하는 다이어트 모임이 큰 힘이 될 수 있어요.",
  ISTP: "혼자만의 시간에 집중해서 운동해보세요.",
  ISFP: "자연과 함께하는 활동이 잘 맞아요.",
  ESTP: "즉각적인 변화를 느낄 수 있는 HIIT 운동 추천!",
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
