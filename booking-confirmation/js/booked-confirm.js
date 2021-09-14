const confirmationSection = document.getElementById("confirmation");
const confirmClose = () => {
  confirmationSection.classList.toggle("hidden");
};

const register = () => {
  fetch("../data/info.json")
    .then((response) => response.json())
    .then((data) => showConfirmData(data));
};

const showConfirmData = (data) => {
  confirmationSection.classList.toggle("hidden");
  const { name, sex, date, slot } = data;
  setInfo(name, "name");
  setInfo(sex, "sex");
  setInfo(date, "date");
  setInfo(slot, "slot");
};

const setInfo = (info, id) => {
  document.getElementById(`confirm-${id}`).innerText = info;
};
