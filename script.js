
function lesson() {
    var valueCheck = document.getElementsByName("enter")[0].value;
    if (isNaN(valueCheck)){
      document.write("Thats not a number :(");
    }else {
      let time = valueCheck * 2.5;
      document.write("Your lessons should last around " + time + "minutes before a break");
    }
  }
    