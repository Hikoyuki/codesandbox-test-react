import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得しk、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
