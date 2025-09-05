export default function decorate(block) {
  // Select the child divs
  const children = block.querySelectorAll(":scope > div > div");

  // Assign classes
  children[0].classList.add("icon");
  children[1].classList.add("text");

  const ratingDiv = children[2];
  ratingDiv.classList.add("rating");

  const rating = parseInt(ratingDiv.textContent.trim(), 10);

  // Add color class based on rating
  if (rating >= 1 && rating <= 3) {
    ratingDiv.classList.add("red");
  } else if (rating >= 4 && rating <= 6) {
    ratingDiv.classList.add("yellow");
  } else if (rating >= 7 && rating <= 10) {
    ratingDiv.classList.add("green");
  }

  // Add spans at the end of the block
  for (let i = 0; i < rating; i++) {
    const span = document.createElement("span");
    span.classList.add("star");
    block.appendChild(span);
  }

  console.log(block);
}
