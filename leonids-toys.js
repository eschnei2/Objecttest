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

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1;

    toyObject.id = idForNewToy

    toys.push(toyObject)
}

const removeProduct = (toyId) => {
    realId = toyId - 1 

     toys.splice(realId,1) 

    console.log(toys)


}

const elmo = {
    name: "Tickle me Elmo",
    maker: "Fisher Price",
    cost: 1000.00
}

const pen = {
    name: "Toy Pen",
    maker: "Bic",
    cost: 1
}


addToyToInventory(elmo)
addToyToInventory(pen)

for (const toy of toys) {
    toy.cost = toy.cost * 1.05
    console.log(`${toy.name} now costs ${toy.cost}`)
}


removeProduct(3)

