let nav = document.querySelectorAll("header nav ul li");

// add active class to nav list elements
nav.forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector("header nav ul .active")?.classList.remove("active");
    e.classList.add("active");
  });
});

// add active class to destination list elements

let projects = document.querySelectorAll(".destination .right .list li");
let moon = projects[0];
let mars = projects[1];
let europa = projects[2];
let titan = projects[3];
let planet = document.querySelector(".destination .content .image img");
let planetName = document.querySelector(".destination .right .inf .title");
let planetParagraph = document.querySelector(".destination .right .inf > p ");
let AvgDistance = document.querySelector(
  ".destination .right .inf .details .distance .value"
);
let TravelTime = document.querySelector(
  ".destination .right .inf .details .time .value "
);

projects.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".destination .right .list .active")
      ?.classList.remove("active");
    e.classList.add("active");
  });
});
// change content by click in destination
moon.onclick = () => {
  planet.src = "starter-code/assets/destination/image-moon.png";
  planetName.innerHTML = "Moon";
  planetParagraph.innerHTML =
    " See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  AvgDistance.innerHTML = "384,400 km";
  TravelTime.innerHTML = "3 days";
};
mars.onclick = () => {
  planet.src = "starter-code/assets/destination/image-mars.png";
  planetName.innerHTML = "Mars";
  planetParagraph.innerHTML =
    "  Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,  the tallest planetary mountain in our solar system. It’s two and a half times  the size of Everest! ";
  AvgDistance.innerHTML = "  225 mil. km";
  TravelTime.innerHTML = "9 months";
};
europa.onclick = () => {
  planet.src = "starter-code/assets/destination/image-europa.png";
  planetName.innerHTML = "Europa";
  planetParagraph.innerHTML =
    "  The smallest of the four Galilean moons orbiting Jupiter, Europa is a  winter lover’s dream. With an icy surface, it’s perfect for a bit of   ice skating, curling, hockey, or simple relaxation in your snug  wintery cabin. ";
  AvgDistance.innerHTML = "628 mil. km";
  TravelTime.innerHTML = "3 years";
};
titan.onclick = () => {
  planet.src = "starter-code/assets/destination/image-titan.png";
  planetName.innerHTML = "Titan";
  planetParagraph.innerHTML =
    "  The only moon known to have a dense atmosphere other than Earth, Titan  is a home away from home (just a few hundred degrees colder!). As a  bonus, you get striking views of the Rings of Saturn.";
  AvgDistance.innerHTML = "1.6 bil. km";
  TravelTime.innerHTML = "7 years";
};

let circles = document.querySelectorAll(
  ".crew .content .details .circles div "
);
// add class active
circles.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".crew .content .details .circles .active")
      ?.classList.remove("active");
    e.classList.add("active");
  });
});
let crewTitle = document.querySelector(".crew .content .details .title");
let crewName = document.querySelector(".crew .content .details .name");
let crewInf = document.querySelector(".crew .content .details .inf");
let crewImg = document.querySelector(".crew .content .image img");

circles[0].onclick = () => {
  crewTitle.innerHTML = "Commander";
  crewName.innerHTML = "Douglas Hurley";
  crewInf.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  crewImg.src = "starter-code/assets/crew/image-douglas-hurley.png";
};
circles[1].onclick = () => {
  crewTitle.innerHTML = "Mission Specialist";
  crewName.innerHTML = "Mark Shuttleworth";
  crewInf.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind  the Linux-based Ubuntu operating system. Shuttleworth became the first South  African to travel to space as a space tourist.";
  crewImg.src = "starter-code/assets/crew/image-mark-shuttleworth.png";
};
circles[2].onclick = () => {
  crewTitle.innerHTML = "Pilot";
  crewName.innerHTML = "Victor Glover";
  crewInf.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the  International Space Station. Glover is a commander in the U.S. Navy where  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a  station systems flight engineer.";
  crewImg.src = "starter-code/assets/crew/image-victor-glover.png";
};
circles[3].onclick = () => {
  crewTitle.innerHTML = "Flight Engineer";
  crewName.innerHTML = "Anousheh Ansari";
  crewInf.innerHTML =
    "  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.  Ansari was the fourth self-funded space tourist, the first self-funded woman to  fly to the ISS, and the first Iranian in space.  ";
  crewImg.src = "starter-code/assets/crew/image-anousheh-ansari.png";
};
// add class active to technology
let technos = document.querySelectorAll(".technology .content .circles div");
technos.forEach((e) => {
  e.addEventListener("click", () => {
    document
      .querySelector(".technology .content .circles .active")
      ?.classList.remove("active");
    e.classList.add("active");
  });
});

let TechnoName = document.querySelector(".technology .content .details .name");
let TechnoInf = document.querySelector(".technology .content .details .inf");
let TechnoImg = document.querySelector(".technology .content .image img");

technos[0].onclick = () => {
  TechnoName.innerHTML = "Launch vehicle";
  TechnoInf.innerHTML =
    " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  TechnoImg.src =
    "starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
};
technos[1].onclick = () => {
  TechnoName.innerHTML = "Spaceport";
  TechnoInf.innerHTML =
    " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft,  by analogy to the seaport for ships or airport for aircraft. Based in the  famous Cape Canaveral, our spaceport is ideally situated to take advantage  of the Earth’s rotation for launch.";
  TechnoImg.src = "starter-code/assets/technology/image-spaceport-portrait.jpg";
};
technos[2].onclick = () => {
  TechnoName.innerHTML = "Space capsule";
  TechnoInf.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry  capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema,  and plenty of other activities to keep you entertained.";
  TechnoImg.src =
    "starter-code/assets/technology/image-space-capsule-portrait.jpg";
};

if (document.documentElement.scrollTop < 806) {
  document.querySelector("header nav ul .active")?.classList.remove("active");
  nav[0].classList.add("active");
} else if (
  document.documentElement.scrollTop > 806 &&
  document.documentElement.scrollTop < 1612
) {
  document.querySelector("header nav ul .active")?.classList.remove("active");

  nav[1].classList.add("active");
} else if (
  document.documentElement.scrollTop > 1612 &&
  document.documentElement.scrollTop < 2418
) {
  document.querySelector("header nav ul .active")?.classList.remove("active");
  nav[2].classList.add("active");
} else if (document.documentElement.scrollTop > 2418) {
  document.querySelector("header nav ul .active")?.classList.remove("active");
  nav[3].classList.add("active");
}

// Scroller
let NavList = document.querySelectorAll("header nav ul li");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight / 4 &&
    document.documentElement.scrollTop <=
      document.documentElement.scrollHeight / 2
  ) {
    NavList.forEach((e) => {
      e.classList.remove("active");
      NavList[1].classList.add("active");
    });
  } else if (
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight / 2 &&
    document.documentElement.scrollTop <
      document.documentElement.scrollHeight * 0.75
  ) {
    NavList.forEach((e) => {
      e.classList.remove("active");
      NavList[2].classList.add("active");
    });
  } else if (
    document.documentElement.scrollTop >
      document.documentElement.scrollHeight * 0.75 &&
    document.documentElement.scrollTop <= document.documentElement.scrollHeight
  ) {
    NavList.forEach((e) => {
      e.classList.remove("active");
      NavList[3].classList.add("active");
    });
  } else {
    NavList.forEach((e) => {
      e.classList.remove("active");
      NavList[0].classList.add("active");
    });
  }
});
