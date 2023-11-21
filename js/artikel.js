const BeautyToggle = document.getElementById("BeautyToggle");
const HealthToggle = document.getElementById("HealthToggle");
const LifeStyleToggle = document.getElementById("LifeStyleToggle");
const PressReleaseToggle = document.getElementById("PressReleaseToggle");
const ZapBeutyIndexToggle = document.getElementById("ZapBeutyIndexToggle");
const BeautyArticel = document.getElementById("BeautyArticel");
const HealtArticel = document.getElementById("HealtArticel");
const LifeStyleArticel = document.getElementById("LifeStyleArticel");
const PressRealaseArticel = document.getElementById("PressRealaseArticel");
const ZapBeautyIndexArticel = document.getElementById("ZapBeautyIndexArticel");

BeautyToggle.classList.add("artikelToggle-active");
BeautyArticel.classList.add("artikel-active");

const toggleElements = [
  { toggle: document.getElementById("BeautyToggle"), article: document.getElementById("BeautyArticel") },
  { toggle: document.getElementById("HealthToggle"), article: document.getElementById("HealtArticel") },
  { toggle: document.getElementById("LifeStyleToggle"), article: document.getElementById("LifeStyleArticel") },
  { toggle: document.getElementById("PressReleaseToggle"), article: document.getElementById("PressRealaseArticel") },
  { toggle: document.getElementById("ZapBeutyIndexToggle"), article: document.getElementById("ZapBeautyIndexArticel") },
];

function setActive(element) {
  toggleElements.forEach((item) => {
    item.toggle.classList.remove("artikelToggle-active");
    item.article.classList.remove("artikel-active");
  });

  element.toggle.classList.add("artikelToggle-active");
  element.article.classList.add("artikel-active");
}

toggleElements.forEach((item) => {
  item.toggle.addEventListener("click", () => {
    if (item.toggle === document.getElementById("ZapBeutyIndexToggle")) {
      setActive(item);
      document.getElementById("BeautyArticel").classList.remove("artikel-active");
    } else {
      setActive(item);
      document.getElementById("ZapBeautyIndexArticel").classList.remove("artikel-active");
    }
  });
});
