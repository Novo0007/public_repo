
    function showForm() {
      let f = document.getElementById("form");
      f.classList.toggle("hidden");
      document.getElementById("trains").classList.add("hidden");
    }

    function findTrains() {
      let from = document.getElementById("from").value;
      let to = document.getElementById("to").value;
      let date = document.getElementById("date").value;
      let list = document.getElementById("trains");

      if (!from || !to || !date) {
        alert("Please fill all fields.");
        return;
      }

      let data = [
        { no: "12345", name: "Express 1", cost: 500 },
        { no: "54321", name: "Express 2", cost: 600 }
      ];

      let txt = '<h3>Available Trains</h3>';
      data.forEach(t => {
        txt += `
          <div class="train-style">
            <p>Train No: ${t.no}</p>
            <p>Name: ${t.name}</p>
            <p>Cost: ₹${t.cost}</p>
            <label>Class:
              <select id="class-${t.no}">
                <option>General</option>
                <option>Sleeper</option>
                <option>AC</option>
              </select>
            </label>
            <button onclick="book('${t.no}', '${t.name}', '${from}', '${to}')">Book</button>
          </div><hr>
        `;
      });

      list.innerHTML = txt;
      list.classList.remove("hidden");
    }

    function book(no, name, from, to) {
      let cls = document.getElementById(`class-${no}`).value;
      let tNo = Math.floor(100000 + Math.random() * 900000);
      let seat = Math.floor(1 + Math.random() * 100);

      alert(`Ticket Booked!\n\nTicket No: ${tNo}\nSeat No: ${seat}\nTrain: ${name} (${no})\nFrom: ${from}\nTo: ${to}\nClass: ${cls}`);
    }


let users = {};  // Temporary user storage
let loginMode = true;

function switchForm() {
  loginMode = !loginMode;
  document.getElementById("formTitle").innerText = loginMode ? "Login" : "Sign Up";
  document.getElementById("text").innerText = loginMode ? "Don't have an account?" : "Already have an account?";
  document.getElementById("link").innerText = loginMode ? "Sign Up" : "Login";
  document.getElementById("msg").innerText = "";
  document.getElementById("nameInput").value = "";
  document.getElementById("passInput").value = "";
}

function submit() {
  const name = document.getElementById("nameInput").value.trim();
  const pass = document.getElementById("passInput").value.trim();
  const msg = document.getElementById("msg");

  if (!name || !pass) {
    msg.innerText = "Please enter both fields";
    msg.style.color = "red";
    return;
  }

  if (loginMode) {
    if (users[name] && users[name] === pass) {
      msg.innerText = "Login successful!";
      msg.style.color = "green";
      setTimeout(() => {
        document.getElementById("popup").style.display = "none";
      }, 1000);
    } else {
      msg.innerText = "Incorrect username or password";
      msg.style.color = "red";
    }
  } else {
    if (users[name]) {
      msg.innerText = "Username already exists";
      msg.style.color = "red";
    } else {
      users[name] = pass;
      msg.innerText = "Sign up successful! Now please log in.";
      msg.style.color = "green";
      switchForm();
    }
  }
}
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
