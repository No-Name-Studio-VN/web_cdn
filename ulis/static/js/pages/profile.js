(()=>{$("#fileupload").fileinput({language:"vi",showPreview:!0,showUpload:!0,uploadUrl:"/profile/uploadstudentid",browseOnZoneClick:!0,layoutTemplates:{footer:'<div class="file-thumbnail-footer" style ="height:94px">\n  <input class="kv-input kv-new form-control input-sm form-control-sm text-center {TAG_CSS_NEW} file-name" value="{caption}" placeholder="Enter file name...">\n   <div class="small" style="margin:15px 0 2px 0">{size}</div> {progress}\n{indicator}\n{actions}\n</div>'},maxFileSize:25600,elErrorContainer:"#kartik-file-errors",allowedFileExtensions:["png","jpg","jpeg"]});let r={buildAttributes:e=>{let a=[];var{id:e,name:l=e,required:t=!1,disabled:i=!1,readonly:s=!1,pattern:n,minlength:r,maxlength:o,min:u,max:c,step:p,placeholder:d,value:m="",dataset:b={},attributes:h={}}=e;return a.push(`id="${e}"`),a.push(`name="${l}"`),d&&a.push(`placeholder="${d}"`),m&&a.push(`value="${m}"`),t&&a.push("required"),i&&a.push("disabled"),s&&a.push("readonly"),n&&a.push(`pattern="${n}"`),r&&a.push(`minlength="${r}"`),o&&a.push(`maxlength="${o}"`),u&&a.push(`min="${u}"`),c&&a.push(`max="${c}"`),p&&a.push(`step="${p}"`),Object.entries(b).forEach(([e,l])=>{a.push(`data-${e}="${l}"`)}),Object.entries(h).forEach(([e,l])=>{a.push(e+`="${l}"`)}),a.join(" ")},baseInput:e=>{var{type:l="text",label:a,colSize:t=9,classes:i=["form-control"],wrapperClasses:s=["row","mb-3"]}=e;return`
            <div class="${s.join(" ")}">
                <label for="${e.id}" class="col-sm-3 col-form-label form-label">${a}</label>
                <div class="col-sm-${t}">
                    <input type="${l}" 
                           class="${i.join(" ")}"
                           ${r.buildAttributes(e)}>
                </div>
            </div>`},textInput:e=>r.baseInput({...e,type:"text"}),emailInput:e=>r.baseInput({...e,type:"email"}),phoneInput:e=>r.baseInput({...e,type:"tel"}),numberInput:e=>r.baseInput({...e,type:"number"}),selectInput:l=>{var{id:e,label:a,options:t=[],colSize:i=9,classes:s=["form-select"],wrapperClasses:n=["row","mb-3"]}=l,t=t.map(e=>`<option value="${e.value}" ${e.value===l.value?"selected":""}>${e.label}</option>`).join("");return`
            <div class="${n.join(" ")}">
                <label for="${e}" class="col-sm-3 col-form-label form-label">${a}</label>
                <div class="col-sm-${i}">
                    <select class="${s.join(" ")}" ${r.buildAttributes(l)}>
                        <option>${l.placeholder||"Chọn một lựa chọn"}</option>
                        ${t}
                    </select>
                </div>
            </div>`},radioGroup:e=>{let{id:l,label:a,options:t=[],value:i=""}=e;return`
            <div class="row mb-3">
                <label class="col-sm-3 col-form-label form-label">${a}</label>
                <div class="col-sm-9">
                    <div class="input-group input-group-sm-vertical">
                        ${t.map(e=>`
            <label class="form-control" for="${l}_${e.value}">
                <span class="form-check">
                    <input type="radio" 
                           class="form-check-input" 
                           name="${l}" 
                           id="${l}_${e.value}"
                           value="${e.value}"
                           ${e.value===i?"checked":""}>
                    <span class="form-check-label">${e.label}</span>
                </span>
            </label>
        `).join("")}
                    </div>
                </div>
            </div>`},checkbox:e=>{var{id:e,label:l,description:a,checked:t=!1,required:i=!1}=e;return`
            <div class="row align-items-center mb-3">
                <label class="col-sm-3 col-form-label form-label">${l}</label>
                <div class="col-sm-9">
                    <div class="form-check">
                        <input class="form-check-input" 
                               type="checkbox" 
                               value="" 
                               id="${e}"
                               name="${e}"
                               ${t?"checked":""} ${i?"required":""}>
                        <label class="form-check-label" for="${e}">${a}</label>
                    </div>
                </div>
            </div>`}},l=document.getElementById("formcontent");l&&$.get("/api/users/@me",function(e){var e=e.data;e&&(e.profilePicture&&$("#profilePicture").attr("src",e.profilePicture),e=[r.textInput({id:"displayName",label:"Họ và tên",required:!0,value:e.displayName||"",minlength:2,maxlength:50,dataset:{validate:"name",test:"value"},attributes:{autocomplete:"name"}}),r.emailInput({id:"email",label:"Email",required:!0,value:e.email||"",dataset:{validate:"email"},readonly:!0}),r.phoneInput({id:"phoneNumber",label:"Số điện thoại",placeholder:"+x(xxx)xxx-xx-xx",value:e.phoneNumber||""}),r.numberInput({id:"studentId",label:"Mã số sinh viên",placeholder:"MSSV của bạn",value:e.studentId||"",required:!0}),r.selectInput({id:"schoolYear",label:"Khóa",placeholder:"Chọn khóa",options:[{value:"QH-2019",label:"QH-2019"},{value:"QH-2020",label:"QH-2020"},{value:"QH-2021",label:"QH-2021"},{value:"QH-2022",label:"QH-2022"},{value:"QH-2023",label:"QH-2023"},{value:"QH-2024",label:"QH-2024"},{value:"QH-2025",label:"QH-2025"}],value:e.schoolYear||"",required:!0}),r.selectInput({id:"department",label:"Khoa",placeholder:"Chọn khoa",options:window.ULISconstant.departments.map(e=>({value:e,label:e})),value:e.department||"",required:!0}),r.textInput({id:"course",label:"Ngành học",placeholder:"Ngành học của bạn",required:!0,value:e.course||""}),r.textInput({id:"class",label:"Lớp học",placeholder:"Lớp học của bạn",required:!0,value:e.class||""}),r.radioGroup({id:"accountType",label:"Loại tài khoản",options:[{value:"student",label:"Học sinh"},{value:"teacher",label:"Giáo viên"}],value:"student"})],l.innerHTML=e.join(""),FormHandler.InitializeFormWatcher())})})();