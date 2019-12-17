import consumer from "./consumer"

consumer.subscriptions.create({ channel: "ProductsChannel" },
  {
    received(data) {
        document.getElementsByTagName("main")[0].innerHTML = data.html
    }
  })

