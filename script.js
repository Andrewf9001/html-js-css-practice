function createColText(strContent, colNumber, textColor) {
  const columnDiv = document.querySelector(`.col${colNumber}`);
  const newText = document.createTextNode(strContent);
  columnDiv.style.color = textColor;
  columnDiv.style.textAlign = "center";

  columnDiv.appendChild(newText);
}

createColText("Dark Purple", 1, "#DA1212");
createColText("Dark Blue", 2, "#93FFD8");
createColText("Light Purple", 3, "#00B4D8");
