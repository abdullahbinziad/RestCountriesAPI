//Onload the Country
const loadCountries = async (resion) => {
   

  const url = `https://restcountries.com/v3.1/region/${resion}`;
  const res = await fetch(url);
  const data = await res.json();


  data.map((mycountry) => CountryCard(mycountry));
};

//onSelect the Region
const myCountrySelect = () => {
  const myregionSelect = document.getElementById("my-region-select");
  const resion = myregionSelect.value;
  const thePreviousResult = document.getElementById('card-parent');
  thePreviousResult.innerHTML = '';
  loadCountries(resion);

};
myCountrySelect();

//make the card dynamically

const CountryCard = (mycountry) => {
  const { name, flags, borders } = mycountry;

  console.log(mycountry);
  const CountryCrad = document.createElement("div");
  CountryCrad.innerHTML = `
<div class="card w-80 h-90 bg-base-100 shadow-xl">
<figure class="h-50	"><img class="h-50" src=${flags.png} alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">${name.common}</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end">
  
  </div>
</div>
</div>
`;

  const parentCard = document.getElementById("card-parent");
  parentCard.appendChild(CountryCrad);
};
