import { getUserData } from "./data_helpers"

const usernames = [
  "akomiqaia",
  "Albadylic",
  "Alexreid95",
  "CampbellDocherty",
  "Chloeh24",
  "glrta",
  "hannahgooding",
  "HettieM",
  "itsina96",
  "Ivo-Evans",
  "jackherizsmith",
  "jamesj-0",
  "Joepock123",
  "Lizzy-j",
  "Roger-Heathcote",
  "tacotoemeck",
  "VatsKan"
]

const userData = [
  
]

usernames.map((user) => {
  return getUserData(user).then((data) => userData.push(data))
})

function getRandomInteger(min, max) {
  const randomInt = Math.floor(Math.random() * (max - min + 1) ) + min;
  return userData[randomInt]
}

export {usernames, userData, getRandomInteger}
