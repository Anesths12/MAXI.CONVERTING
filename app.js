console.log("JS φορτώθηκε");

fetch('orders.json')
  .then(response => response.json())
  .then(orders => {
    const table = document.getElementById('ordersTable');

    orders.forEach(order => {
      if (order.status !== "pending") return;

      const row = document.createElement('tr');
      row.className = order.status;

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
