import React, { useState } from "react";
import axios from "axios";

export default function AddSales() {


  const[name, setName] = useState("");
  const[address, setAddress] = useState("");
  const[city, setCity] = useState("");
  const[email, setEmail] = useState("");
  const[phone, setPhone] = useState("");

  function sendData(e){
    e.preventDefault();

    const newSales={
      name,
      address,
      city,
      email,
      phone
    }

    axios.post("http://localhost:5000/sales/add",newSales).then(()=>{
      alert("sales added")
      setName("");
      setAddress("");
      setCity("");
      setEmail("");
      setPhone("");

    }).catch((err)=>{
      alert(err)
    })
    
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <h1>Delivery Information</h1>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            aria-describedby="Enter your name"
            onChange={(e)=>{
              setName(e.target.value)
            }
            }
          />
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            aria-describedby="Enter your address"
            onChange={(e)=>{
              setAddress(e.target.value)
            }
            }
          />
        </div>

        <div class="mb-3">
          <label for="city" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            id=""
            aria-describedby="Enter your city"
            onChange={(e)=>{
              setCity(e.target.value)
            }
            }
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id=""
            aria-describedby="Enter your email"
            onChange={(e)=>{
              setEmail(e.target.value)
            }
            }
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div class="mb-3">
          <label for="phone_no" class="form-label">
            Contact Number
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="Enter your phone number"
            onChange={(e)=>{
              setPhone(e.target.value)
            }
            }
          />
        </div>

        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
