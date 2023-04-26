export default (elementId) => {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
};
