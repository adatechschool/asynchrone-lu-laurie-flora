// exo 1

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function reqListener () {
  console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '<https://www.affirmations.dev/>', true);
req.onload  = reqListener;
req.send(null);

// transformer avec fetch

var req = new XMLHttpRequest('<https://www.affirmations.dev/>')

fetch(req)
    .then(function(reponse) {
        return reponse.json();
        // les données sont transférées (serveur/client)
    }
    )
    .then(function(data) {
        console.log(data);
        // pour la suite du code à dev (côté programmation)
    }
    )
    .catch(function(error) {
        console.log("error")
        // pour la suite du code à dev (côté programmation)
    }
    )

    // exo 2 utiliser async et await

    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function get(url, success, error) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (req.readyState === 4) {
            if (req.status === 200) {
                success(req.responseText);
            } else {
                error(req);
            }
        }
    }
    req.open('GET', url, true);
    req.send();
}

function getCat() {
    get('<https://api.thecatapi.com/v1/images/search?format=json>', 
    function(response) {
        var cat = JSON.parse(response);
        console.log(cat[0]['url']);
    },
    function (error) {
        console.error(error);
    })
}

getCat();

// exo 3


async function getNumber1() {
    return 10;
  }
  
  async function getNumber2() {
    return 4;
  }
  
  async function compute() {
    return await getNumber1() + await getNumber2();
  }
  
  compute()
    .then(function(res) {
      document
        .getElementById("result")
        .innerText = res + '';
  });

  // exo 4

  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("hello world"); }, 2000);
  });
  
  function job() {
      return myPromise;
  }
  
  module.exports = job;
  
  
  