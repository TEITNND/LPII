const API_URL = "/items";

async function fetchItems() {
  const res = await fetch(API_URL);
  const data = await res.json();
  displayItems(data);
}

async function addItem() {
  const name = document.getElementById("itemName").value;
  if (!name) return alert("Please enter a name");

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  document.getElementById("itemName").value = "";
  fetchItems();
}

async function updateItem(id) {
  const newName = prompt("Enter new name:");
  if (!newName) return;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: newName })
  });

  fetchItems();
}

async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  fetchItems();
}

function displayItems(items) {
  const container = document.getElementById("itemsContainer");
  container.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      ${item.name}
      <button onclick="updateItem('${item._id}')">Edit</button>
      <button onclick="deleteItem('${item._id}')">Delete</button>
    `;
    container.appendChild(div);
  });
}

fetchItems();
