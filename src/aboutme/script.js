fetch('https://simple-market-backend.herokuapp.com/aboutme')
  .then(response => response.json())
  .then(data => {
      $('#cardText').append(`"${data.aboutMe}" -Leonardo Pimentel`);
      $("#a-linkedin").attr("href", `${data.linkedin}`);
      $("#a-email").attr("href", `mailto:${data.email}`);
      let phone = data.mobileNumber.split('+')[1];      
      $("#a-phone").attr("href", `https://wa.me/${phone}`);
  });