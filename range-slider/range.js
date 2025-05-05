const slider = document.getElementById("range");

function updateSlide(value) {
  const percentage = ((value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, rgba(255, 82, 0, 1) ${percentage}%, rgba(255, 178, 142, 1) ${percentage}%)`;
}
updateSlide(slider.value);
slider.addEventListener("input", () => {
  updateSlide(slider.value);
});
const min = document.getElementById("min");
const max = document.getElementById("max");

function updateTrack() {
  const minVal = parseInt(min.value);
  const maxVal = parseInt(max.value);
  if (minVal > maxVal - 5) min.value = maxVal - 5;
  if (maxVal < minVal + 5) max.value = minVal + 5;

  const percent1 = ((min.value - 10) / 90) * 100;
  const percent2 = ((max.value - 10) / 90) * 100;
  const background = `linear-gradient(to right, rgba(255, 178, 142, 1) ${percent1}%, rgba(255, 82, 0, 1) ${percent1}%, rgba(255, 82, 0, 1) ${percent2}%, rgba(255, 178, 142, 1) ${percent2}%)`;

  min.style.background = background;
  max.style.background = background;
}
min.addEventListener("input", updateTrack);
max.addEventListener("input", updateTrack);


updateTrack();
