$(function(){$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/features`,method:"GET",contentType:"application/json",success:async function(e){let o=document.getElementById("programmedfeatures");await e.data.forEach((e,a)=>{let t;"image"==e.mediaType?t=`nns-image nns-image-src="${e.media}"`:"video"==e.mediaType&&(t=`nns-video nns-video-src="${e.media}"`);var n=document.createElement("div");n.className="col-lg-6 col-12",n.innerHTML=`
          <div class="mb-3 form-check form-switch">
              <input class="form-check-input" type="checkbox" name="${e.name}" id="${e.name}">
              <label class="form-check-label" for="${e.name}">${e.description}</label>
              <button type="button" class="btn btn-sm btn-primary rounded-3 mx-2" id="${e.name}_btn" ${t}><i class="ti ti-eye"></i></button>
          </div>
          `,o.appendChild(n)}),FormHandler.InitializeFormWatcher()},error:function(e){logger.error(e.responseJSON.error)}});let l=0;function r(e,a,t,n,o,l){var r=l?" show":"",l=`
      <h2 class="accordion-header">
        <button class="accordion-button${l?"":" collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${e}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${e}">
          <strong> ${a} </strong> <!-- , Last edited: ${(e=>{var a=(e=new Date(1e3*e)).getFullYear(),t=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2),o=e.getHours(),e=("0"+e.getMinutes()).slice(-2);let l=o,r="AM";return 12<o?(l=o-12,r="PM"):12===o?(l=12,r="PM"):0==o&&(l=12),a+"-"+t+"-"+n+", "+l+":"+e+" "+r})(o)} by ${n} -->
        </button>
      </h2>
      <div id="panelsStayOpen-collapse${e}" class="accordion-collapse collapse${r}">
        <div class="accordion-body">
          <div class="form-floating mb-3">
            <input type="text" name="keyP[${e}]" class="form-control" placeholder="Keywords" id="keyP[${e}]" value="${a}" required></input>
            <label for="keyP[${e}]">Keywords</label>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" style="height: 75px" name="resP[${e}]" id="resP[${e}]" placeholder="Response" required>${t}</textarea>
            <label for="resP[${e}]">Response</label>
          </div>
          <div class="mb-3">
            <button type="button" class="btn btn-danger" id="del" name="del_${e}">Delete</button>
          </div>
        </div>
      </div>
    `;let s=document.createElement("div");s.className="accordion-item",s.innerHTML=l,s.querySelector("#del").addEventListener("click",function(){s.remove()}),document.getElementById("accordion").appendChild(s)}$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/fetchres`,method:"GET",contentType:"application/json",success:function(e){e=e.data;e&&($("#troll_vietnam").prop("checked",e.troll_vietnam),$("#tin_chuan_chua_anh").prop("checked",e.tin_chuan_chua_anh),$("#accordion").empty(),e.customResponses.forEach((e,a)=>{l+=1;var{keyword:e,response:t,authorId:n,timestamp:o}=e;r(l,e,t,n,o,addNew=!1)}))},error:function(e){logger.error(e.responseJSON.error)}}),$("#addres").on("click",function(){r(l+=1,"Untitled #"+l,"")})});