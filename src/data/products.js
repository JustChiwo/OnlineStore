const products = [
  {
    id: "1",
    image: "/images/watch.jpg",
    name: "Apple Watch ",
    subtitle: "Series 5 SE",
    color: "", // N/A Due to figma design, the color is not specified for this product
    price: 529.99,
    rating: 4.5,
    description:
      "The Apple Watch keeps the most useful parts of your phone on your wrist. Check messages and calls at a glance, follow your daily activity and keep an eye on your heart rate without ever reaching into your pocket.\n\nBuilt for everyday life, it tracks workouts from a casual walk to a full run, gives gentle reminders to stand and move, and lasts through a full day on a single charge. A comfortable band and a clear, bright display make it easy to wear from morning to night.",
  },
  {
    id: "2",
    image: "/images/headphones.jpg",
    name: "Sony ZX330BT",
    subtitle: "Light Grey",
    color: "Light Grey",
    price: 39.99,
    rating: 4.5,
    description:
      "The Sony ZX330BT gives you clear, balanced sound without the tangle of wires. Connect over Bluetooth in seconds and enjoy your music, podcasts and calls with a comfortable on-ear fit you can wear for hours.\n\nLightweight and easy to carry, it slips into a bag without taking up space, and the built-in controls let you change tracks, adjust the volume and answer calls without touching your phone.",
  },
  {
    id: "3",
    image: "/images/iphone-11-black.jpg",
    name: "Iphone 11",
    subtitle: "Serious Black",
    color: "Serious Black",
    price: 619.99,
    rating: 4.5,
    description:
      "The iPhone 11 pairs a bright 6.1-inch display with a dual-camera system that takes sharp photos and video, even in low light. It comes in a range of colours, all in a durable glass-and-aluminium design.\n\nPowerful enough for games, streaming and everyday apps, it also has battery life that comfortably gets you through the day, so you can spend less time near a charger and more time using your phone.",
  },
  {
    id: "4",
    image: "/images/iphone-11-subway-blue.jpg",
    name: "Iphone 11",
    subtitle: "Subway Blue",
    color: "Subway Blue",
    price: 619.99,
    rating: 4.5,
    description:
      "The iPhone 11 pairs a bright 6.1-inch display with a dual-camera system that takes sharp photos and video, even in low light. It comes in a range of colours, all in a durable glass-and-aluminium design.\n\nPowerful enough for games, streaming and everyday apps, it also has battery life that comfortably gets you through the day, so you can spend less time near a charger and more time using your phone.",
  },
  {
    id: "5",
    image: "/images/iphone-11-red.jpg",
    name: "Iphone 11",
    subtitle: "Product RED",
    color: "Product RED",
    price: 619.99,
    rating: 4.5,
    description:
      "The iPhone 11 pairs a bright 6.1-inch display with a dual-camera system that takes sharp photos and video, even in low light. It comes in a range of colours, all in a durable glass-and-aluminium design.\n\nPowerful enough for games, streaming and everyday apps, it also has battery life that comfortably gets you through the day, so you can spend less time near a charger and more time using your phone.",
  },
  {
    id: "6",
    image: "/images/iphone-11-white.jpg",
    name: "Iphone 11",
    subtitle: "Milky White",
    color: "Milky White",
    price: 619.99,
    rating: 4.5,
    description:
      "The iPhone 11 pairs a bright 6.1-inch display with a dual-camera system that takes sharp photos and video, even in low light. It comes in a range of colours, all in a durable glass-and-aluminium design.\n\nPowerful enough for games, streaming and everyday apps, it also has battery life that comfortably gets you through the day, so you can spend less time near a charger and more time using your phone.",
  },
  {
    id: "7",
    image: "/images/iphone-11-navy-blue.jpg",
    name: "Iphone 11",
    subtitle: "Navy Blue",
    color: "Navy Blue",
    price: 619.99,
    rating: 4.5,
    description:
      "The iPhone 11 pairs a bright 6.1-inch display with a dual-camera system that takes sharp photos and video, even in low light. It comes in a range of colours, all in a durable glass-and-aluminium design.\n\nPowerful enough for games, streaming and everyday apps, it also has battery life that comfortably gets you through the day, so you can spend less time near a charger and more time using your phone.",
  },
  {
    id: "8",
    image: "/images/iphone-12-green.jpg",
    name: "Iphone 12",
    subtitle: "Green",
    color: "Green",
    price: 679.99,
    rating: 4.5,
    description:
      "The iPhone 12 brings a sharp 6.1-inch OLED display and a slim, flat-edged design that feels great in the hand. 5G connectivity means fast downloads and smooth streaming wherever coverage allows.\n\nA dual-camera system captures detailed photos and video, and a fast processor keeps apps, games and multitasking running smoothly, whether you're working, scrolling or catching up on your favourite shows.",
  },
  {
    id: "9",
    image: "/images/iphone-13-light-grey.jpg",
    name: "Iphone 13",
    subtitle: "Light Grey",
    color: "Light Grey",
    price: 699.99,
    rating: 4.5,
    description:
      "The iPhone 13 has a brighter OLED display and a fast A15 Bionic chip, making everything from gaming to video editing feel quick and responsive. Improved cameras bring out more detail in your photos and videos.\n\nBattery life is better too, comfortably lasting through a full day of calls, messages and streaming. With 5G connectivity and a compact design, it's an easy phone to love and an easy one to carry.",
  },
  {
    id: "10",
    image: "/images/iphone-13-pink.jpg",
    name: "Iphone 13",
    subtitle: "Pink",
    color: "Pink",
    price: 699.99,
    rating: 4.5,
    description:
      "The iPhone 13 has a brighter OLED display and a fast A15 Bionic chip, making everything from gaming to video editing feel quick and responsive. Improved cameras bring out more detail in your photos and videos.\n\nBattery life is better too, comfortably lasting through a full day of calls, messages and streaming. With 5G connectivity and a compact design, it's an easy phone to love and an easy one to carry.",
  },
  {
    id: "11",
    image: "/images/iphone-13-blue.jpg",
    name: "Iphone 13",
    subtitle: "Blue",
    color: "Blue",
    price: 699.99,
    rating: 4.5,
    description:
      "The iPhone 13 has a brighter OLED display and a fast A15 Bionic chip, making everything from gaming to video editing feel quick and responsive. Improved cameras bring out more detail in your photos and videos.\n\nBattery life is better too, comfortably lasting through a full day of calls, messages and streaming. With 5G connectivity and a compact design, it's an easy phone to love and an easy one to carry.",
  },
  {
    id: "12",
    image: "/images/iphone-14-light-grey.jpg",
    name: "Iphone 14",
    subtitle: "Light Grey",
    color: "Light Grey",
    price: 749.99,
    rating: 4.5,
    description:
      "The iPhone 14 combines a vivid 6.1-inch display with a fast A15 Bionic chip and a camera system that performs well even in low light. Photos and video look sharp and natural, day or night.\n\nIt also adds safety features such as Crash Detection, giving you extra peace of mind on the road. With all-day battery life and 5G speed, it handles work, play and everything in between.",
  },
  {
    id: "13",
    image: "/images/dell-xps-13-white.jpg",
    name: "Dell XPS 13",
    subtitle: "White",
    color: "White",
    price: 1799.99,
    rating: 4.5,
    description:
      "The Dell XPS 13 packs a lot of laptop into a small, slim frame. Its nearly borderless display makes everything on screen look bigger and sharper, while the lightweight build makes it easy to take to class, the office or a coffee shop.\n\nFast performance handles documents, browsing, video calls and everyday multitasking with ease, and a comfortable keyboard and trackpad make long working sessions more pleasant. It's a polished all-rounder for work and study.",
  },
  {
    id: "14",
    image: "/images/macbook.jpg",
    name: "Macbook",
    subtitle: "Navy Blue",
    color: "Navy Blue",
    price: 729.99,
    rating: 4.5,
    description:
      "The Macbook is a thin, light laptop made to go wherever you do. Its sharp display makes photos, video and text look crisp, and the slim design slides easily into a bag.\n\nWith long battery life, quick performance and a comfortable keyboard, it's well suited to school, work and creative projects. Whether you're writing an essay or streaming a film, it keeps up without slowing you down.",
  },
  {
    id: "15",
    image: "/images/iphone-13-pro-blue.jpg",
    name: "Iphone 13 Pro",
    subtitle: "Blue",
    color: "Blue",
    price: 749.99,
    rating: 4.5,
    description:
      "The iPhone 13 Pro is built for people who want more from their phone. Its smooth 120Hz display makes scrolling and gaming feel fluid, and the triple-camera system captures detailed photos and video in all kinds of light.\n\nPowered by the fast A15 Bionic chip, it handles demanding apps, games and editing with ease, and strong battery life keeps you going through a full day. A premium finish completes the look.",
  },
  {
    id: "16",
    image: "/images/iphone-13-pro-grey.jpg",
    name: "Iphone 13 Pro",
    subtitle: "Space Grey",
    color: "Space Grey",
    price: 749.99,
    rating: 4.5,
    description:
      "The iPhone 13 Pro is built for people who want more from their phone. Its smooth 120Hz display makes scrolling and gaming feel fluid, and the triple-camera system captures detailed photos and video in all kinds of light.\n\nPowered by the fast A15 Bionic chip, it handles demanding apps, games and editing with ease, and strong battery life keeps you going through a full day. A premium finish completes the look.",
  },
  {
    id: "17",
    image: "/images/iphone-13-pro-white.jpg",
    name: "Iphone 13 Pro",
    subtitle: "Mineral White",
    color: "Mineral White",
    price: 749.99,
    rating: 4.5,
    description:
      "The iPhone 13 Pro is built for people who want more from their phone. Its smooth 120Hz display makes scrolling and gaming feel fluid, and the triple-camera system captures detailed photos and video in all kinds of light.\n\nPowered by the fast A15 Bionic chip, it handles demanding apps, games and editing with ease, and strong battery life keeps you going through a full day. A premium finish completes the look.",
  },
  {
    id: "18",
    image: "/images/samsung-s21-ultra.jpg",
    name: "Samsung Galaxy S21 Ultra",
    subtitle: "Phantom Gray",
    color: "Phantom Gray",
    price: 799.99,
    rating: 4.5,
    description:
      "The Samsung Galaxy S21 Ultra is Samsung's flagship phone, with a large, sharp display that makes video, games and photos look stunning. The multi-lens camera system captures detailed shots, from wide landscapes to close-ups.\n\nWith fast performance, 5G connectivity and a battery built to last, it handles demanding apps and long days without slowing down. It's a great choice if you want the most from your phone.",
  },
  {
    id: "19",
    image: "/images/samsung-s21.jpg",
    name: "Samsung Galaxy S21",
    subtitle: "Blue",
    color: "Blue",
    price: 599.99,
    rating: 4.5,
    description:
      "The Samsung Galaxy S21 combines a smooth, bright display with a sleek, modern design. Its triple camera lets you shoot wide, close and everything in between, so you're ready for any moment.\n\n5G speed keeps downloads and streaming quick, and a fast processor handles everyday apps and games with ease. With a battery that lasts through the day, it's a dependable phone for work and play.",
  },
  {
    id: "20",
    image: "/images/samsung-note21.jpg",
    name: "Samsung Note 21",
    subtitle: "Multicolor",
    color: "Multicolor",
    price: 499.99,
    rating: 4.5,
    description:
      "The Samsung Note 21 is a large-screen phone made for getting things done. Its sharp, spacious display is great for reading, watching videos and working across multiple apps at once.\n\nStrong performance keeps everything running smoothly, and the camera captures clear, detailed photos for everyday moments. With a long-lasting battery, it's built to keep up with a busy day.",
  },
  {
    id: "21",
    image: "/images/dell-xps-15-black.jpg",
    name: "Dell XPS 15",
    subtitle: "Black",
    color: "Black",
    price: 1999.99,
    rating: 4.5,
    description:
      "The Dell XPS 15 is a powerful laptop with a large, vivid display that gives your work plenty of room. It's built for creative projects like photo editing, video work and design, as well as everyday tasks.\n\nStrong performance handles heavy multitasking with ease, while the refined build and comfortable keyboard make it a pleasure to use for hours. It's a great choice if you need extra power and screen space.",
  },
  {
    id: "22",
    image: "/images/dell-xps-13-black.jpg",
    name: "Dell XPS 13",
    subtitle: "Black",
    color: "Black",
    price: 1799.99,
    rating: 4.5,
    description:
      "The Dell XPS 13 packs a lot of laptop into a small, slim frame. Its nearly borderless display makes everything on screen look bigger and sharper, while the lightweight build makes it easy to take to class, the office or a coffee shop.\n\nFast performance handles documents, browsing, video calls and everyday multitasking with ease, and a comfortable keyboard and trackpad make long working sessions more pleasant. It's a polished all-rounder for work and study.",
  },
];

export default products;
