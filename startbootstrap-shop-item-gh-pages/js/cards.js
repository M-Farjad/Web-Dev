const _card_section = document.querySelector(".card_section");

var count = 0;
// For Fetching data from the files
fetch(`.\\js\\courses.json`)
  .then((response) => response.json())
  .then((rsp) => {
    rsp.forEach((element) => {
      count++;
      appened(element);
    });
  });

// Function To appened html inside the card_section class
const appened = (message) => {
  const _platform=get_platform(message.platform);
  const _image=get_image(message.image);
  const _type=get_type(message.type);
  const _rating=get_rating(message.rating);
  const _price=get_price(message);
  const _link_button=get_link_button(message.link);

  // Creating Item of Product
  const _message = `
        <div class="col mb-5">
        <div class="card h-100">
            ${_platform}
            ${_image}
            <!-- Product details-->
            <div class="card-body p-4">
            <div class="text-center">
                    ${_type}
                    ${_rating}
                    ${_price}
                </div>
            </div>
            ${_link_button}
        </div>
    </div>
    `;
  
  // Adding Data on Html 
  const messageElement = document.createElement("div"); // <div></div>
  messageElement.classList.add("info_items");
  messageElement.innerHTML = _message;
  _card_section.append(messageElement);
};


// Getter Functions
function get_platform (val) {
  var item=`<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${val}</div>`;
  return item;
};
function get_image (val) {
  var item=`<img class="card-img-top" src="${val}" alt="..." />`;
  return item;
};
function get_type (val) {
  var item=`<h5 class="fw-bolder">${val}</h5>`;
  return item;
};
function get_rating (val) {
  var item="";
  if(val>=5){
    item = "<div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div>";
  }
  else if(val>=4 && val <5){
    item = "<div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div>";
  }
  else if(val>=3 && val <4){
    item = "<div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div>";
  }
  else if(val>=2 && val <3){
    item = "<div class=\"bi-star-fill\"></div><div class=\"bi-star-fill\"></div>";
  }
  else if(val>=1 && val <2){
    item = "<div class=\"bi-star-fill\"></div>";
  }
  else {
    item = "<div class=\"bi-star-half\"></div>"
  }
  console.log(item);

  return `<div class="d-flex justify-content-center small text-warning mb-2 stars">
  ${item}
</div>`;
};
function get_price (element) {
  var price=`<h6>Free</h6><h6><h6>`;
  if(element.price){
    if(element.valid){
      price=`<h6>RS-${element.price}</h6><h6>Valid Till: ${element.valid}</h6>`;
    }
    else{
      price=`<h6>RS-${element.price}</h6>` ;
    }
  }
  return price
};
function get_link_button (val) {
  var item=`<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
  <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="${(val)?val:"#"}">Check Now</a></div>
  </div>`;
  return item;
};