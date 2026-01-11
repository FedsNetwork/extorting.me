const search = document.getElementById("search");
const tools = document.querySelectorAll(".tool");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  tools.forEach(tool => {
    const text = tool.innerText.toLowerCase();
    tool.style.display = text.includes(value) ? "block" : "none";
  });
});
