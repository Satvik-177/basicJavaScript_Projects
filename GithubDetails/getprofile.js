const url = "https://api.github.com/users";
const buttonEl = document.getElementById('searchBtn');
const inputEl = document.getElementById('searchInput');
const profileContainerEl = document.getElementById("profileContainer");
const loadingEl = document.getElementById('loading');


const getProfile = (profile)=> {

    return `
   <div class="profile-box">
   <div class="top-section">
     <div class="left">
       <div class="avatar">
         <img alt="avatar" src="${profile.avatar_url}" />
       </div>
       <div class="self">
         <h1>${profile.name}</h1>
         <h1>@${profile.url}</h1>
       </div>
     </div>
     <a href="${profile.html_url}" target="_blank">
     <button class="primary-btn">Check Profile</button>
     </a>
   </div>

   <div class="about">
     <h2>About</h2>
     <p>
     ${profile.bio}
     </p>
   </div>
   <div class="status">
     <div class="status-item">
       <h3>${profile.followers}</h3>
       <p></p>
     </div>
     <div class="status-item">
       <h3>${profile.following}</h3>
       <p></p>
     </div>
     <div class="status-item">
       <h3>Repos</h3>
       <p>${profile.public_repos}</p>
     </div>
   </div>
 </div>
   `;
};

const fetchProfile = async ()=>{
     
    const username = inputEl.value;

    loadingEl.innerText = 'loading.....';
    loadingEl.style.color = 'black';
    try {

       const res = await fetch(`${url}/${username}`);
       const data = await res.json();

       if (data.bio) {
        loadingEl.innerText = "";
        profileContainerEl.innerHTML = getProfile(data);

      } else {
        loadingEl.innerHTML = data.message;
        loadingEl.style.color = "red";
        profileContainerEl.innerText = "";
      }
  
      console.log("data", data);
       
    } catch (error) {
        
        console.log({error});
        loadingEl.innerText = "";
    }

}

buttonEl.addEventListener('click',fetchProfile);