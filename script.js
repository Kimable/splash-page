const { body } = document;

function changeBackground(number) {
  // Return to original background
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset backgroound
  body.className = "";
  switch (number) {
    case "1":
      return previousBackground === "background-1"
        ? false
        : body.classList.add("background-1");
      break;
    case "2":
      return previousBackground === "background-2"
        ? false
        : body.classList.add("background-2");
      break;
    case "3":
      return previousBackground === "background-3"
        ? false
        : body.classList.add("background-3");
      break;
    default:
      break;
  }
}
