import vcrData from "../public/data/data.json" assert { type: "json" };

const yearSelectionDiv = document.querySelector(".year-selections");

const decades = ["1960s", "1970s", "1980s", "1990s", "2000s", "2010s"];

const scroller = document.querySelector(".year-selections");

window.addEventListener("wheel", (e) => {
  scroller.scrollLeft += e.deltaY;
});

decades.forEach((year) => {
  const yearsElement = document.createElement("div");
  yearsElement.className = "years";
  yearsElement.innerText = year;
  yearSelectionDiv.appendChild(yearsElement);
});

// ================== MAIN ====================

console.log(vcrData);
