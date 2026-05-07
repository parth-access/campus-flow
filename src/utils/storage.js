function saveEvent(event) {
  localStorage.setItem("savedEvent", JSON.stringify(event));
}

function getSavedEvent() {
  let event = localStorage.getItem("savedEvent");

  if (event) {
    return JSON.parse(event);
  }

  return null;
}

export { saveEvent, getSavedEvent };