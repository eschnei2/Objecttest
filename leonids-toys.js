const toys = [
  {
      id: 1,
      name: "Certified Chicken Squeek Toy",
      maker: "Fisher Price",
      Cost: 4.99
},
  {
      id: 2,
      name: "hard plastic toy screwdriver",
      maker: "Genius Kids Inc.",
      Cost: 1.99
  },
  {
    id: 3,
    name: "Light Bright Deluxe model",
    maker: "Hasbro",
    cost: 10.00
  }
]

const elmo = {
    id: 4,
    name: "Tickle me Elmo",
    maker: "Fisher Price",
    cost: 1000.00
}
toys.push(elmo)

for (const toy of toys) {
    console.log(toy.name)
}