(()=>{InjectCSS(`.card .blog {
    border: none;
    backdrop-filter: blur(0px)!important;
    -webkit-backdrop-filter: blur(0px)!important;
    background-blend-mode: normal!important;
    cursor: pointer;
  }`);let s=document.getElementById("listHolder"),t=document.getElementById("listHolderLoading");$.ajax({url:"/api/blog/list",method:"GET",contentType:"application/json",success:e=>{e.data.forEach(async(e,t)=>{t=await((e,t)=>{let{meta:s,href:i}=t,a=JSON.parse(s.tags),d=s.tags?a[0]:"Blog",l=s.avatar||`https://cdn.discordapp.com/embed/avatars/${Math.floor(6*Math.random())}.png`,o=s.author||"No Name Studio",r=s.banner||`/static/img/blogs/img${Math.floor(10*Math.random())+1}.jpg`,n=s.title,c=s.description||null;60<c?.length&&(c=c.slice(0,60)+"...");var t=`${s.readtime} min${1<s.readtime?"s":""} read`,m=s.modifiedTimestamp,p=document.createElement("div");p.classList.add("col-md-6","mb-3"),e<2?p.classList.add(0===e?"col-lg-8":"col-lg-4"):p.classList.add("col-lg-4","d-flex","align-items-stretch"),p.setAttribute("nns-redirect",""),p.setAttribute("nns-redirect-data",i);let g;return g=e<2?`
    <div class="card blog position-relative overflow-hidden hover-img" style="background-image: url(${r});">
      <div class="card-body d-flex flex-column position-relative">
        <div class="d-flex flex-column justify-content-between h-100">
          <div class="d-flex align-items-start justify-content-between">
            <div class="position-relative">
              <img src="${l}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${o}" alt="${o}" class="rounded-circle img-fluid" width="40" height="40">
            </div>
            <span class="badge text-bg-primary rounded-3 fs-2 fw-semibold">${d}</span>
          </div>
          <div>
            <a href="${i}" class="fs-7 my-4 fw-semibold text-white d-block lh-sm">${n} ${c?`<p class="fs-6 fw-normal text-white-50 mt-1">${c}</p>`:""}</a>
            <div class="d-flex align-items-center gap-4">
              <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal"><i class="ti ti-eye fs-5"></i>6006</div>
              <div class="d-flex align-items-center gap-2 text-white fs-3 fw-normal"><i class="ti ti-message-dots fs-5"></i>3</div>
              <div class="d-flex align-items-center gap-1 text-white fw-normal ms-auto">
                <i class="ti ti-point"></i><small nns-dateformatter>${m}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`:e<5?`
      <div class="card rounded-2 overflow-hidden hover-img">
        <div class="position-relative">
          <a href="${i}"><img src="${r}" class="card-img-top rounded-0" alt="${i}"></a>
          <span class="badge text-bg-primary fs-2 rounded-4 lh-sm mt-3 me-3 py-1 px-2 fw-semibold position-absolute top-0 end-0">${d}</span>
          <span class="badge text-bg-light fs-2 rounded-4 lh-sm mb-3 me-3 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">${t}</span>
          <img src="${l}" alt="${o}" class="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9" width="40" height="40" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="${o}">
        </div>
        <div class="card-body d-flex flex-column p-4">
          <a class="d-block my-3 fs-5 fw-semibold" href="${i}">${n}</a>
          <div class="d-flex align-items-center gap-4">
            <div class="d-flex align-items-center gap-2"><i class="ti ti-eye fs-5"></i>9,125</div>
            <div class="d-flex align-items-center gap-2"><i class="ti ti-message-dots fs-5"></i>3</div>
            <div class="d-flex align-items-center fs-2 ms-auto">
              <i class="ti ti-point"></i><span nns-dateformatter>${m}</span>
            </div>
          </div>
        </div>
      </div>`:`
      <div class="card rounded-2 overflow-hidden hover-img border-0 w-100 cursor-pointer">
        <div class="card-body p-0">
          <div class="d-flex align-items-center p-3 bg-hover-light-black rounded border-0">
            <div class="position-relative d-flex align-items-center w-100 gap-1">
              <a href="javascript:void(0)" class="stretched-link "></a>
              <img src="${r}" width="45" class="rounded" alt="${i}">
              <div class="ms-3">
                <h6 class="mb-0 fw-semibold">${n}</h6>
                <span class="fs-2">${c}</span>
              </div>
              <div class="ms-auto">
                <span class="badge text-bg-primary rounded-3 fs-2 fw-semibold">${d}</span>
              </div>
            </div>
          </div>
        </div>
      </div>`,p.innerHTML=g,p})(t,e);s.appendChild(t)}),t.style.display="none",s.classList.remove("d-none")},error:e=>{console.error(e),NotificationHandler.show({title:"Error",content:"Failed to fetch articles",type:"error"})}})})();