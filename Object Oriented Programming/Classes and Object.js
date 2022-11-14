class RailwayForm {
    submit() {
      alert(this.name + ": Your form is submitted for train number: " + this.trainno)
    }
    cancel() {
      alert(this.name + ": This form is cancelled for train number: " + this.trainno)
    }
    fill(givenname, trainno) {
      this.name = givenname
      this.trainno = trainno
    }
  }
  
  // Create a form for waleed
  let waleedForm = new RailwayForm()
  // Fill the form with waleed details
 waleedForm.fill("waleed", 145316)
  
  // Create a forms for Rohan
  let rohanForm1 = new RailwayForm()
  let rohanForm2 = new RailwayForm()
  // Fill the forms with Rohan's details
  rohanForm1.fill("Rohan", 222420);
  rohanForm2.fill("Rohan", 2229211);
  
  waleedForm.submit();
  console.log("Waleed : Your form2 is submitted for train number 000");
  rohanForm1.submit();
  console.log("Rohan : Your form 1 is submitted for train number 000");
  rohanForm2.submit()
  console.log("Rohan : Your form 2 is submitted for train number 000");
  rohanForm1.cancel()
  console.log("Rohan : This form is cancelled for train number 000");