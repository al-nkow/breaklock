export default (elementId) => {
  const element = document.getElementById(elementId);
  element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
};
