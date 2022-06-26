//hamburger menu variables 
const menu = document.getElementById("menu");
const xmark = document.getElementById("xmark");
const bars = document.getElementById("bars");
  
// variables for user dashboard
const editProfile = document.getElementById('editp');
const editLink = document.getElementById("edit_profile")
const home = document.getElementById('Home');
const homeList = document.getElementById('home_link');
const homeIcon = document.getElementById('home_icon');
const stories = document.getElementById('stories');
const stats = document.getElementById('stats');
const followers = document.getElementById('followers');
const publish = document.getElementById('publish');

// function for hamburger menu open
const menuDrop = () => {
  menu.style.display = "flex";
  xmark.style.display = "block";
  bars.style.display = "none";
};

// function for hamburger menu close
const menuClose = () => {
  menu.style.display = "none";
  xmark.style.display = "none"
  bars.style.display = "block";
}

//const darkMode = () => {
 // document.getElementById("light_mode").setAttribute("href", "/styles/darktheme.css")
 // console.log('Theme Changed!!')
//}

// function for user dashboard
const pageSwitch = (id) => {  
  if(id == edit_profile){
    editProfile.style.display = "flex";
    id.style.color = "#0d0d0d";
    id.style.fontStyle = "normal";
    id.style.fontSize = "16px";
    id.style.fontWeight = "700";
    id.style.textDecoration = "underline";
    home.style.display = "none";
    stories.style.display = "none";
    stats.style.display = "none";
    followers.style.display = "none";
    publish.style.display = "none";
  } else if(id == home_link){
    backArrow();
  } else if(id == stories_link){
    editProfile.style.display = "none";
    editLink.style.color = "#333";
    editLink.style.fontStyle = "italic";
    editLink.style.fontSize = "12px";
    editLink.style.fontWeight = "500";
    editLink.style.textDecoration = "none";
    home.style.display = "none";
    homeList.style.color = "#333";
    homeIcon.style.color = "#333";
    stories.style.display = "flex";
    stats.style.display = "none";
    followers.style.display = "none";
    publish.style.display = "none";
  } else if(id == stats_link){
    editProfile.style.display = "none";
    editLink.style.color = "#333";
    editLink.style.fontStyle = "italic";
    editLink.style.fontSize = "12px";
    editLink.style.fontWeight = "500";
    editLink.style.textDecoration = "none";
    home.style.display = "none";
    homeList.style.color = "#333";
    homeIcon.style.color = "#333";
    stories.style.display = "none";
    stats.style.display = "flex";
    followers.style.display = "none";
    publish.style.display = "none";
  } else if(id == followers_link){
    editProfile.style.display = "none";
    editLink.style.color = "#333";
    editLink.style.fontStyle = "italic";
    editLink.style.fontSize = "12px";
    editLink.style.fontWeight = "500";
    editLink.style.textDecoration = "none";
    home.style.display = "none";
    homeList.style.color = "#333";
    homeIcon.style.color = "#333";
    stories.style.display = "none";
    stats.style.display = "none";
    followers.style.display = "flex";
    publish.style.display = "none";
  } else if(id == publish_link){
    editProfile.style.display = "none";
    editLink.style.color = "#333";
    editLink.style.fontStyle = "italic";
    editLink.style.fontSize = "12px";
    editLink.style.fontWeight = "500";
    editLink.style.textDecoration = "none";
    home.style.display = "none";
    homeList.style.color = "#333";
    homeIcon.style.color = "#333";
    stories.style.display = "none";
    stats.style.display = "none";
    followers.style.display = "none";
    publish.style.display = "flex";
  }
}

//For left arrow button in the user dashboard
const backArrow = () => {
  editProfile.style.display = "none";
  editLink.style.color = "#333";
  editLink.style.fontStyle = "italic";
  editLink.style.fontSize = "12px";
  editLink.style.fontWeight = "500";
  editLink.style.textDecoration = "none";
  home.style.display = "flex";
  homeList.style.color = "#0d0d0d";
  homeIcon.style.color = "#0d0d0d";
  stories.style.display = "none";
  stats.style.display = "none";
  followers.style.display = "none";
  publish.style.display = "none";
}