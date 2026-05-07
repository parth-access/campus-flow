function saveEvent(event) {
  let savedEvents = getSavedEvents();

  savedEvents.push(event);

  localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
}

function getSavedEvents() {
  let events = localStorage.getItem("savedEvents");

  if (events) {
    return JSON.parse(events);
  }

  return [];
}

export { saveEvent, getSavedEvents };