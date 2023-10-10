//1) https://northwind.vercel.app/ api/orders lari fetch ile çek ve ul-li içerisine customerld yazdır.

fetch("https://northwind.vercel.app/api/orders")
  .then(response => response.json())
  .then(data => {
    const ordersList = document.getElementById('ordersList');
    
    // Verilerin arasında dolaşıp customerId'leri listede görüntüleme
    data.forEach(order => {
      const listItem = document.createElement('li');
      listItem.textContent = `Customer ID: ${order.customerId}`;
      ordersList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));



  //2) Country USA olan kaç adet order var?

  fetch("https://northwind.vercel.app/api/orders")
  .then(res => res.json())
  .then(res => {
      var orderUSA = res.filter(x => x.shipAddress.country == "USA")
      console.log("Sipariş verilen ülke USA olan " + orderUSA.length + " tane sipariş var.");
  });


//3) Order Date
    // a) 1996 yılındaki siparişleri console a yaz

    fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(res => {
        var order = res.filter(x => x.orderDate.startsWith(1996))
        console.log("1996 yılında oluşturulan siparişler: ", order);
    })

    //b)*** Geciken siparişleri console a yaz

    fetch("https://northwind.vercel.app/api/orders")
    .then(res => res.json())
    .then(res => {
        var order = res.filter(x => x.shippedDate > x.requiredDate)
        console.log(order.length + " tane geciken sipariş var!");
    })


