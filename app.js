console.log("JS φορτώθηκε");

fetch('orders.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  })
  .then(orders => {
    console.log("Loaded orders:", orders);

    const table = document.getElementById('ordersTable');

    orders.forEach(order => {

      const row = document.createElement('tr');

      // ΜΗΝ βάζεις raw status σαν class
      if (order.status === "pending") {
        row.classList.add("pending");
      } else if (order.status === "completed") {
        row.classList.add("completed");
      }

      row.innerHTML = `
        <td>${order.orderId}</td>
        <td>${order.supplier}</td>
        <td>${order.date}</td>
        <td>${order.items}</td>
        <td>${order.quantity}</td>
        <td>${order.status}</td>
      `;

      table.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Σφάλμα φόρτωσης JSON:", error);
  });
