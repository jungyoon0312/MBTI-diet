const mbtiData = {
  INTJ: {
    tip: "계획적인 식단과 목표 설정이 중요해요!",
    reason: "계획적이고 분석적인 INTJ는 데이터 기반의 체계적인 식단이 잘 맞아.",
    exercise: "웨이트 트레이닝, 러닝머신에서 목표 달성하기"
  },
  INTP: {
    tip: "데이터와 근거를 바탕으로 식단을 분석해보세요.",
    reason: "호기심 많고 논리적인 INTP는 정보를 스스로 찾아보고 실험하는 걸 좋아해요.",
    exercise: "홈트레이닝, 요가, 스트레칭"
  },
  ENTJ: {
    tip: "도전적인 목표를 세우고, 달성 과정을 기록해보세요.",
    reason: "리더십이 강한 ENTJ는 명확한 목표와 성취 과정에서 동기를 얻어요.",
    exercise: "크로스핏, 마라톤, 그룹 PT"
  },
  ENTP: {
    tip: "다이어트를 게임처럼 생각해보세요! 재미가 중요해요.",
    reason: "새로운 경험을 좋아하는 ENTP는 단조로운 식단에 쉽게 질릴 수 있어 다양한 메뉴와 변화를 주는 것이 도움이 돼요.",
    exercise: "댄스, 킥복싱, 다양한 운동 챌린지"
  },
  INFJ: {
    tip: "마음의 안정을 위해 명상과 함께 식단을 관리해보세요.",
    reason: "깊이 있는 INFJ는 내적 동기와 의미를 찾으며 실천할 때 힘을 얻어요.",
    exercise: "요가, 필라테스, 명상"
  },
  INFP: {
    tip: "감성적인 보상보다는 자연 속 산책이 잘 맞아요.",
    reason: "감성적이고 이상주의적인 INFP는 스트레스를 줄이고 자연과 함께할 때 동기부여가 돼요.",
    exercise: "산책, 자전거 타기, 자연 속 걷기"
  },
  ENFJ: {
    tip: "주변 사람들과 함께 목표를 공유하면 동기부여가 커져요.",
    reason: "감성적이고 배려심 많은 ENFJ는 함께 식사하거나 소셜 활동이 포함된 다이어트가 동기부여에 효과적이에요.",
    exercise: "에어로빅, 그룹 운동, 줌바"
  },
  ENFP: {
    tip: "다양한 운동을 시도해보고, 즐거움을 찾아보세요.",
    reason: "창의적이고 자유로운 ENFP는 새로운 도전을 즐기며, 재미있는 활동이 지속에 도움이 돼요.",
    exercise: "댄스, 암벽등반, 다양한 스포츠 체험"
  },
  ISTJ: {
    tip: "정해진 시간에 규칙적으로 식사하는 것이 좋아요.",
    reason: "신중하고 책임감 강한 ISTJ는 루틴을 지키는 게 장점이에요.",
    exercise: "러닝, 수영, 규칙적인 헬스"
  },
  ISFJ: {
    tip: "작은 성공을 스스로 칭찬하며 꾸준히 실천해보세요.",
    reason: "따뜻하고 헌신적인 ISFJ는 꾸준함과 자기보상이 잘 맞아요.",
    exercise: "걷기, 요가, 필라테스"
  },
  ESTJ: {
    tip: "체계적인 계획과 기록이 큰 도움이 돼요.",
    reason: "실용적이고 조직적인 ESTJ는 구체적인 계획과 체크리스트가 동기부여에 좋아요.",
    exercise: "웨이트 트레이닝, 스피닝, 크로스핏"
  },
  ESFJ: {
    tip: "함께하는 다이어트 모임이 큰 힘이 될 수 있어요.",
    reason: "사교적이고 배려심 많은 ESFJ는 주변과 함께할 때 더 힘을 얻어요.",
    exercise: "그룹 필라테스, 에어로빅, 배드민턴"
  },
  ISTP: {
    tip: "혼자만의 시간에 집중해서 운동해보세요.",
    reason: "독립적이고 실용적인 ISTP는 혼자 집중할 때 효율이 높아요.",
    exercise: "사이클, 복싱, HIIT"
  },
  ISFP: {
    tip: "자연과 함께하는 활동이 잘 맞아요.",
    reason: "감각적이고 자유로운 ISFP는 자연 속에서 활동할 때 스트레스를 줄어요.",
    exercise: "트레킹, 산책, 요가"
  },
  ESTP: {
    tip: "즉각적인 변화를 느낄 수 있는 HIIT 운동 추천!",
    reason: "에너지 넘치고 즉흥적인 ESTP는 빠른 변화를 체감할 때 동기부여가 돼요.",
    exercise: "HIIT, 복싱, 스쿼시"
  },
  ESFP: {
    tip: "친구와 함께하는 운동이 잘 맞아요!",
    reason: "활발하고 사교적인 ESFP는 함께 즐길 때 더 오래 실천할 수 있어요.",
    exercise: "댄스, 볼링, 팀 스포츠"
  }
};



document.getElementById("showBtn").addEventListener("click", function() {
  const mbti = document.getElementById("mbti").value;
  const tipBox = document.getElementById("tipBox");
  const reasonBox = document.getElementById("reasonBox");
  const exerciseBox = document.getElementById("exerciseBox");

  if (mbtiData[mbti]) {
    tipBox.innerHTML = `<strong>다이어트 팁:</strong> ${mbtiData[mbti].tip}`;
    reasonBox.innerHTML = `<strong>이유:</strong> ${mbtiData[mbti].reason}`;
    exerciseBox.innerHTML = `<strong>추천 운동:</strong> ${mbtiData[mbti].exercise}`;
  } else {
    tipBox.textContent = "";
    reasonBox.textContent = "MBTI를 선택해주세요!";
    exerciseBox.textContent = "";
  }
});
