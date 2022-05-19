//가입알림창
$().ready(function () {
  $("#alertStart").click(function () {
    Swal.fire({
      icon: "success",
      title: "회원 가입이 완료 되었습니다",
      text: "SKIN SAVE의 가족이 되신 것을 환영합니다",
    });
  });
});
//로그인알림창
$().ready(function () {
  $("#loginalertStart").click(function () {
    Swal.fire({
      icon: "success",
      title: "로그인 성공",
      text: "SKIN SAVE와 함께 건강한 하루 보내세요",
    });
  });
});
