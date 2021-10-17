import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
  margin: 0 ;
  padding: 0 ;
  box-sizing:border-box;
  :focus {
    outline: none;
}

 }


html{
  overflow-x:hidden;
  scrollbar-color: #47B9BB white;
  scrollbar-width: thin;
 
  @media(max-width:768px){
      font-size:75%;
    }
}

body {
   font-family: 'Open Sans', sans-serif;
    width:100%;
    scrollbar-color: #47B9BB white;
    scrollbar-width: thin;

    @media( max-width:768px){
    overflow:hidden;
 }
}
body::-webkit-scrollbar {
  color:#fff; 
  width: 9px;
  border-radius:20px;              /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background: #fff;
  scrollbar-width: thin; 
  border:2px solid #eee;       /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background-color: #47B9BB;    /* color of the scroll thumb */
  scrollbar-width: thin;
   /* creates padding around scroll thumb */
}
p,h1,h2,h3,h4,h5,h6,a{
  direction: rtl;
}
.row{
 @media( max-width:768px){
   padding: 0 1rem;
 }
}
.App{
  position:relative;
}
button,input,textarea {
  outline:none !important ;
  color:#fff;
  text-align:right;
  
}

p{
  text-align:right;
}
input{
  border-radius:none !important;
  -webkit-border-radius: none !important;
  -moz-border-radius: none !important;
  
}
.container {
  max-width: 80% !important;
  width:100%;
  margin: auto;
  padding:0;
  @media (max-width: 768px) {
    max-width: 100% !important;
  }
}
textarea,
input[type="text"],
input[type="button"],
input[type="submit"],
input[type="email"],
input[type="tel"],
input[type="password"]{
     -webkit-appearance: none;
     border-radius: 0;
}
a:hover {
  text-decoration: none !important;
}
ul {
  list-style:none;
}
.masthead {
    min-height: 50vh;
    margin-top:-210px;
    width:100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    position:relative;
    text-align:center;
    @media (max-width: 768px) {
      margin-bottom: 1rem;
      margin-top:65px;
      min-height: 30vh;
  }
    h1 {
      font-size: 2rem;
      color: #fff;
      text-transform:capitalize;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      padding-top:8rem;
      @media (max-width: 768px) {
      font-size:1.5rem;
      padding-top:0;
  }
    }
  }
  img{
    max-width:100%;
  }
.content{
  padding:3rem 0 10rem 0;
  @media (max-width: 768px) {
    padding:3rem .5rem 5rem .5rem;
  }
}
.appointment-button{
  border:2px solid #47B9BB;
  font-size: 1.1rem;
  padding:1rem 5rem;
  background-color:transparent;
  border-radius:50px;
  color:#47B9BB;
  transition:all .3s ease-in;
  margin-top:2rem;
  @media (max-width: 768px) {
    padding:.7rem 3rem;
  }
  &:hover {
    background-color:#47B9BB;
    color:#fff;
  }
}
.comment {
  font-size:1.1rem;
  margin-bottom:3rem;
}
.nav-pills{
  .nav-link{
    color:#47B9BB !important;
    border-radius:0;
  }
  .nav-link.active{
    background-color:#47B9BB;
    color:#fff !important;

  }
  
  
}
#v-pills-tab{
  .nav-link{
    color:#818386 !important;
  }
  .active {
    color:#fff !important;
    background-color:#47B9BB !important;
    border-radius:0 !important;
  }
}
.tab-pane{
  padding:0 1rem 1rem 1rem;
  p{
    color:#818386;
    line-height:2.5rem;
    direction:rtl;
    @media (max-width: 768px) {
      margin-bottom:.5rem !important;
  }
  }
  @media (max-width: 768px) {
   margin-top:3rem;
  }
  h1{
    @media (max-width: 768px) {
    margin-bottom:.3rem;
    text-align:right;
  }
  }
}

.modal-body{
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  svg{
    fill: #47B9BB;
    margin: 1rem auto;
  }
}
.modal-header{
  border-bottom: none;
  span{
    color: #47B9BB;
  }
}
`;

export default GlobalStyle;
