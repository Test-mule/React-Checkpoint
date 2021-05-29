
import './App.css';

function App() {
  return (
   <div className="App">
     <break/>
     <form class="row g-3">
     <div class="col-md-4">
    <label for="validationServer01" class="form-label">First name</label>
    <input type="text" class="form-control is-valid" id="validationServer01" required />
    <div class="valid-feedback">
    Please provide a valid first name!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationServer02" class="form-label">Last name</label>
    <input type="text" class="form-control is-valid" id="validationServer02" required />
    <div class="valid-feedback">
      Please provide a valid last name!
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationServer03" class="form-label">City</label>
    <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
    <div id="validationServer03Feedback" class="invalid-feedback">
      Please provide a valid city!
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer04" class="form-label">Governorate</label>
    <select class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
      <option selected disabled value="">Choose...</option>
      <option>Ariana</option>
      <option>Ben Arous</option>
      <option>La Marsa</option>
      <option>Soukra</option>
    </select>
    <div id="validationServer04Feedback" class="invalid-feedback">
      Please select a valid Governorate!
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationServer05" class="form-label">Zip code</label>
    <input type="text" class="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required />
    <div id="validationServer05Feedback" class="invalid-feedback">
      Please provide a valid zip code!
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
      <label class="form-check-label" for="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div id="invalidCheck3Feedback" class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
 <footer> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> This site uses cookies to deliver services in accordance with this Privacy Policy. 
       You can specify the conditions for storing or accessing cookies on your browser. <br/>
       © 2021 </footer>
   </div>
   
  );
}

export default App;
