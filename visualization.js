
document.addEventListener("DOMContentLoaded", () => {
  d3.json("/cantons.json")
    .then(cantons => {
      d3.csv("/referendum.csv")
        .then(yesVotes => {

          

        })
    })
})
