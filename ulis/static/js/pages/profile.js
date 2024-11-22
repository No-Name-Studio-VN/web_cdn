let FormBuilder={buildAttributes:e=>{let a=[];var{id:e,name:l=e,required:r=!1,disabled:t=!1,readonly:i=!1,pattern:s,minlength:o,maxlength:u,min:n,max:c,step:d,placeholder:p,value:m="",dataset:b={},attributes:h={}}=e;return a.push(`id="${e}"`),a.push(`name="${l}"`),p&&a.push(`placeholder="${p}"`),m&&a.push(`value="${m}"`),r&&a.push("required"),t&&a.push("disabled"),i&&a.push("readonly"),s&&a.push(`pattern="${s}"`),o&&a.push(`minlength="${o}"`),u&&a.push(`maxlength="${u}"`),n&&a.push(`min="${n}"`),c&&a.push(`max="${c}"`),d&&a.push(`step="${d}"`),Object.entries(b).forEach(([e,l])=>{a.push(`data-${e}="${l}"`)}),Object.entries(h).forEach(([e,l])=>{a.push(e+`="${l}"`)}),a.join(" ")},baseInput:e=>{var{type:l="text",label:a,colSize:r=9,classes:t=["form-control"],wrapperClasses:i=["row","mb-4"]}=e;return`
            <div class="${i.join(" ")}">
                <label for="${e.id}" class="col-sm-3 col-form-label form-label">${a}</label>
                <div class="col-sm-${r}">
                    <input type="${l}" 
                           class="${t.join(" ")}"
                           ${FormBuilder.buildAttributes(e)}>
                </div>
            </div>`},textInput:e=>FormBuilder.baseInput({...e,type:"text"}),emailInput:e=>FormBuilder.baseInput({...e,type:"email"}),phoneInput:e=>FormBuilder.baseInput({...e,type:"tel"}),numberInput:e=>FormBuilder.baseInput({...e,type:"number"}),selectInput:l=>{var{id:e,label:a,options:r=[],colSize:t=9,classes:i=["form-select"],wrapperClasses:s=["row","mb-4"]}=l,r=r.map(e=>`<option value="${e.value}" ${e.value===l.value?"selected":""}>${e.label}</option>`).join("");return`
            <div class="${s.join(" ")}">
                <label for="${e}" class="col-sm-3 col-form-label form-label">${a}</label>
                <div class="col-sm-${t}">
                    <select class="${i.join(" ")}" ${FormBuilder.buildAttributes(l)}>
                        <option>${l.placeholder||"Chọn một lựa chọn"}</option>
                        ${r}
                    </select>
                </div>
            </div>`},radioGroup:e=>{let{id:l,label:a,options:r=[],value:t=""}=e;return`
            <div class="row mb-4">
                <label class="col-sm-3 col-form-label form-label">${a}</label>
                <div class="col-sm-9">
                    <div class="input-group input-group-sm-vertical">
                        ${r.map(e=>`
            <label class="form-control" for="${l}_${e.value}">
                <span class="form-check">
                    <input type="radio" 
                           class="form-check-input" 
                           name="${l}" 
                           id="${l}_${e.value}"
                           value="${e.value}"
                           ${e.value===t?"checked":""}>
                    <span class="form-check-label">${e.label}</span>
                </span>
            </label>
        `).join("")}
                    </div>
                </div>
            </div>`},checkbox:e=>{var{id:e,label:l,description:a,checked:r=!1,required:t=!1}=e;return`
            <div class="row align-items-center mb-4">
                <label class="col-sm-3 col-form-label form-label">${l}</label>
                <div class="col-sm-9">
                    <div class="form-check">
                        <input class="form-check-input" 
                               type="checkbox" 
                               value="" 
                               id="${e}"
                               name="${e}"
                               ${r?"checked":""} ${t?"required":""}>
                        <label class="form-check-label" for="${e}">${a}</label>
                    </div>
                </div>
            </div>`}};(()=>{let l=document.getElementById("formcontent");l&&$.get("/api/users/@me",function(e){var e=e.data;e&&(e.profilePicture&&$("#profilePicture").attr("src",e.profilePicture),e=[FormBuilder.textInput({id:"displayName",label:"Họ và tên",required:!0,value:e.displayName||"",minlength:2,maxlength:50,dataset:{validate:"name",test:"value"},attributes:{autocomplete:"name"}}),FormBuilder.emailInput({id:"email",label:"Email",required:!0,value:e.email||"",dataset:{validate:"email"},readonly:!0}),FormBuilder.phoneInput({id:"phoneNumber",label:"Số điện thoại",placeholder:"+x(xxx)xxx-xx-xx",value:e.phoneNumber||""}),FormBuilder.numberInput({id:"studentId",label:"Mã số sinh viên",placeholder:"MSSV của bạn",value:e.studentId||"",required:!0}),FormBuilder.selectInput({id:"schoolYear",label:"Khóa",placeholder:"Chọn khóa",options:[{value:"QH-2019",label:"QH-2019"},{value:"QH-2020",label:"QH-2020"},{value:"QH-2021",label:"QH-2021"},{value:"QH-2022",label:"QH-2022"},{value:"QH-2023",label:"QH-2023"},{value:"QH-2024",label:"QH-2024"},{value:"QH-2025",label:"QH-2025"}],value:e.schoolYear||"",required:!0}),FormBuilder.selectInput({id:"department",label:"Khoa",placeholder:"Chọn khoa",options:window.ULISconstant.departments.map(e=>({value:e,label:e})),value:e.department||"",required:!0}),FormBuilder.textInput({id:"course",label:"Ngành học",placeholder:"Ngành học của bạn",required:!0,value:e.course||""}),FormBuilder.textInput({id:"class",label:"Lớp học",placeholder:"Lớp học của bạn",required:!0,value:e.class||""}),FormBuilder.radioGroup({id:"accountType",label:"Loại tài khoản",options:[{value:"student",label:"Học sinh"},{value:"teacher",label:"Giáo viên"}],value:"student"})],l.innerHTML=e.join(""),FormHandler.InitializeFormWatcher())})})();