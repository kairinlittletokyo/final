document.getElementById("submitBtn").addEventListener("click", function() {
    window.location.href = "make_place.html";
  })

  function goToScroll(targetId) {
    var target = document.getElementById(targetId);
    if (target) {
        var offsetTop = target.offsetTop;
        var windowHeight = window.innerHeight;
        var targetHeight = target.offsetHeight;
        var scrollToPosition = offsetTop - (windowHeight / 5) + (targetHeight / 5);
        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    }
}

// 선택된 값을 가져오는 함수
function getSelectedValues() {
  var selectedPlace = document.getElementById("place").value;
  var selectedTheme = document.getElementById("theme").value;
  var selectedWith = document.getElementById("with").value;
  
  // BoardDTO로 전달할 객체 생성
  var boardDTO = {
    place: selectedPlace,
    theme: selectedTheme,
    with: selectedWith
  };

  // 생성된 객체 반환
  return boardDTO;
}

// 서버로 BoardDTO 전달하는 함수
function submitBoardDTO() {
  var boardDTO = getSelectedValues(); // 선택된 값 가져오기
}
document.getElementById("submitBtn").addEventListener("click", submitBoardDTO);