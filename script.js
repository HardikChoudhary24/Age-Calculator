const day = document.querySelector(".d-in");
const month = document.querySelector(".m-in");
const year = document.querySelector(".y-in");
const dayLabel = day.previousElementSibling;
const monthLabel = month.previousElementSibling;
const yearLabel = year.previousElementSibling;
const dayerror = day.nextElementSibling;
const montherror = month.nextElementSibling;
const yearerror = year.nextElementSibling;

document.querySelector(".btn").addEventListener("click", () => {
  let dayvalue = day.value;
  let monthvalue = month.value;
  let yearvalue = year.value;
  if (dayvalue != "" && monthvalue != "" && yearvalue != "") {
    let userDate = moment(`${dayvalue}/${monthvalue}/${yearvalue}`);

    let isValidDate = moment(
      `${dayvalue}/${monthvalue}/${yearvalue}`,
      "DD/MM/YYYY",
      true
    ).isValid();
    const dateobj = {
      year: undefined,
      month: undefined,
      date: undefined,
    };
    let nowDay = parseInt(moment().format("DD"));
    let nowMonth = parseInt(moment().format("MM"));
    let nowYear = parseInt(moment().format("YYYY"));
    if (isValidDate) {
      let yearDiff = nowYear - yearvalue;
      dateobj.year = yearDiff;
      let monthDiff = nowMonth - monthvalue;
      if (monthDiff < 0) {
        dateobj.month = 12 + (monthDiff + 1);
        dateobj.date = 31 - dayvalue + nowDay;
        if (dateobj === 31) {
          dateobj.month++;
          dateobj.date = 0;
        }
      } else if (monthDiff >= 0) {
        dateobj.year++;
        dateobj.month = monthDiff;
        dateobj.date = 31 - dayvalue + nowDay;
        // console.log(31-dayvalue+nowDay);
        // console.log(dayvalue , nowDay);
        if (dateobj === 31) {
          dateobj.month++;
          dateobj.date = 0;
        }
      }

      document.querySelector(".year-display span").textContent = dateobj.year;
      document.querySelector(".months-display span").textContent =
        dateobj.month;
      document.querySelector(".days-display span").textContent = dateobj.date;
    } else {
      const months = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];
      if (monthvalue > 12) {
        month.style.borderColor = " hsl(0, 100%, 67%)";
        monthLabel.style.color = " hsl(0, 100%, 67%)";
        montherror.textContent = "Must be a valid month";
      }
      if (monthvalue <= 12 && dayvalue > months[monthvalue - 1]) {
        day.style.borderColor = " hsl(0, 100%, 67%)";
        dayLabel.style.color = " hsl(0, 100%, 67%)";
        dayerror.textContent = "Must be a valid day";
      } else if (monthvalue > 12 && dayvalue > 31) {
        month.style.borderColor = " hsl(0, 100%, 67%)";
        monthLabel.style.color = " hsl(0, 100%, 67%)";
        day.style.borderColor = " hsl(0, 100%, 67%)";
        dayLabel.style.color = " hsl(0, 100%, 67%)";
        montherror.textContent = "Must be a valid month";
        dayerror.textContent = "Must be a valid day";
      }
      if (yearvalue > nowYear) {
        year.style.borderColor = " hsl(0, 100%, 67%)";
        yearLabel.style.color = " hsl(0, 100%, 67%)";
        yearerror.textContent = "Must be in the past";
      }
    }
  }
  else{
    if(dayvalue == ""){
        day.style.borderColor = " hsl(0, 100%, 67%)";
        dayLabel.style.color = " hsl(0, 100%, 67%)";
        dayerror.textContent = "This field is required";
    } 
    if(monthvalue == "" ){
        month.style.borderColor = " hsl(0, 100%, 67%)";
        monthLabel.style.color = " hsl(0, 100%, 67%)";
        montherror.textContent = "This field is required";
    }
    if(yearvalue == ""){
        year.style.borderColor = " hsl(0, 100%, 67%)";
        yearLabel.style.color = " hsl(0, 100%, 67%)";
        yearerror.textContent = "This field is required";
    }  
  }
});
