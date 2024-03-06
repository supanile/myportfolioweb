/*=============== CERTIFICATE ITEM FILTER ===============*/
const filterContainer = document.querySelector(".certificate-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      certificateItems = document.querySelectorAll(".certificate-item"),
      totalCertificateItem = certificateItems.length;
      
      for(let i = 0; i < totalFilterBtn; i++) 
      {
        filterBtns[i].addEventListener("click", function()
        {
          filterContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue = this.getAttribute("data-filter");
          for(let k = 0; k < totalCertificateItem; k++)
          {
            if(filterValue === certificateItems[k].getAttribute("data-category"))
            {
              certificateItems[k].classList.remove("hide");
              certificateItems[k].classList.add("show");
            }
            else
            {
              certificateItems[k].classList.add("hide");
              certificateItems[k].classList.remove("show");
            }
            if(filterValue === "all")
            {
              certificateItems[k].classList.remove("hide");
              certificateItems[k].classList.add("show");
            }
          }
        })
      }