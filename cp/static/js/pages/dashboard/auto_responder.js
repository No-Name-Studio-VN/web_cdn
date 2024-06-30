$(function(){$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/features`,method:"GET",contentType:"application/json",success:async function(e){const o=document.getElementById("programmedfeatures");await e.data.forEach((e,a)=>{let t;"image"==e.mediaType?t=`nns-image nns-image-src="${e.media}"`:"video"==e.mediaType&&(t=`nns-video nns-video-src="${e.media}"`);var n=document.createElement("div");n.className="col-lg-6 col-12",n.innerHTML=`
          <div class="mb-3 form-check form-switch">
              <input class="form-check-input" type="checkbox" name="${e.name}" id="${e.name}">
              <label class="form-check-label" for="${e.name}">${e.description}</label>
              <button type="button" class="btn btn-sm btn-primary rounded-3 mx-2" id="${e.name}_btn" ${t}><i class="ti ti-eye"></i></button>
          </div>
          `,o.appendChild(n)}),FormHandler.InitializeFormWatcher()},error:function(e){logger.error(e.responseJSON.error)}});let s=0;function c(e,a,t,n,o,s){var c=s?" show":"",s=`
      <h2 class="accordion-header">
        <button class="accordion-button${s?"":" collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${e}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${e}">
          <strong> ${a} </strong> <!-- , Last edited: ${function(e){var a=(e=new Date(1e3*e)).getFullYear(),t=("0"+(e.getMonth()+1)).slice(-2),n=("0"+e.getDate()).slice(-2),o=e.getHours(),e=("0"+e.getMinutes()).slice(-2);let s=o,c="AM";return 12<o?(s=o-12,c="PM"):12===o?(s=12,c="PM"):0==o&&(s=12),a+"-"+t+"-"+n+", "+s+":"+e+" "+c}(o)} by ${n} -->
        </button>
      </h2>
      <div id="panelsStayOpen-collapse${e}" class="accordion-collapse collapse${c}">
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
    `;const r=document.createElement("div");r.className="accordion-item",r.innerHTML=s,r.querySelector("#del").addEventListener("click",function(){r.remove()}),document.getElementById("accordion").appendChild(r)}$.ajax({url:`/dashboard/${window.location.pathname.split("/")[2]}/${window.location.pathname.split("/")[3]}/fetchres`,method:"GET",contentType:"application/json",success:function(e){e=e.data;e&&($("#troll_vietnam").prop("checked",e.troll_vietnam),$("#tin_chuan_chua_anh").prop("checked",e.tin_chuan_chua_anh),$("#accordion").empty(),e.customResponses.forEach((e,a)=>{s+=1;var{keyword:e,response:t,authorId:n,timestamp:o}=e;c(s,e,t,n,o,addNew=!1)}))},error:function(e){logger.error(e.responseJSON.error)}}),$("#addres").on("click",function(){c(s+=1,"Untitled #"+s,"")})});