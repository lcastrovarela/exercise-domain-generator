/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//write your code here

let pronoun = ["the", "our", "my"];
let adj = ["great", "big", "huge"];
let noun = ["jogger", "racoon", "swimmer"];
let domain = ["com", "net", "us"];

const theDomainNameGenerator = () => {
  for (let i = 0; i < pronoun.length; i++) {
    for (let e = 0; e < adj.length; e++) {
      for (let x = 0; x < noun.length; x++) {
        for (let y = 0; y < domain.length; y++) {
          console.log(pronoun[i] + adj[e] + noun[x] + "." + domain[y]);
        }
      }
    }
  }
};
console.log(theDomainNameGenerator());
