const toys = [
  {
      id: 1,
      name: "Certified Chicken Squeek Toy",
      maker: "Fisher Price",
      cost: 4.99
},
  {
      id: 2,
      name: "hard plastic toy screwdriver",
      maker: "Genius Kids Inc.",
      cost: 1.99
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

const pen = {
    id: 5,
    name: "Toy Pen",
    maker: "Bic",
    cost: 1
}
toys.push(elmo, pen)

for (const toy of toys) {
    toy.cost = toy.cost * 1.05
    console.log(`${toy.name} now costs ${toy.cost}`)
}