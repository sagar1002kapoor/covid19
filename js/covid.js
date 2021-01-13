const APIURL = "https://disease.sh/v3/covid-19/countries/india";

async function getRecords(url) {
    const responce = await fetch(url);
    const resData = await responce.json();
    console.log(resData);
   showRecords(resData);

    }
     getRecords(APIURL);

     function showRecords(record){
       // console.log(record);
       document.getElementById("main").innerHTML = 
       `
       <div>
       <h2>Cases</h2>
        <div class="cases">  
         
       <div>
       <h3>Total Records<h/3>
       <div>${record.cases}</div>
       </div>
       <div>
       <h3>Cases per Million<h/3>
       <div>${record.casesPerOneMillion}</div>
       </div>
       <div>
       <h3>Cases Reported Today<h/3>
       <div>${record.todayCases}</div>
       </div>
    
       </div>
       

       <h2>Recovered</h2>
       <div class="recovered">
       <div>
       <h3>Total Recovered<h/3>
       <div>${record.recovered}</div>
       </div>
       <div>
       <h3>Cases Recovered per Million<h/3>
       <div>${record.recoveredPerOneMillion}</div>
       </div>
       <div>
       <h3>Recovered Cases Reported Today<h/3>
       <div>${record.todayRecovered}</div>
       </div>
       </div>

       <h2>Active</h2>
       <div class="active">
       <div>
       <h3>Total Active<h/3>
       <div>${record.recovered}</div>
       </div>
       <div>
       <h3>Cases Active per Million<h/3>
       <div>${record.activePerOneMillion}</div>
       </div>
       </div>

        <h2>Death</h2>
       <div class="death">
       <div>
       <h3>Total Death<h/3>
       <div>${record.deaths}</div>
       </div>
       <div>
       <h3>Deat Cases per Million<h/3>
       <div>${record.deathsPerOneMillion}</div>
       </div>
       </div>
       </div>
       `
     }
         document.getElementById("time").innerHTML = Date();
